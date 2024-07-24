import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Beneficiaire } from '../Model/Model.models';
import { subscribe } from 'diagnostics_channel';


@Component({
  selector: 'app-updatebeneficiaire',
  templateUrl: './updatebeneficiaire.component.html',
  styleUrl: './updatebeneficiaire.component.css'
})
export class UpdatebeneficiaireComponent implements OnInit{
  idBeneficiaire:any
  beneficiaireForm:any
  CompteId:any
  


  constructor(private srv:ServiceService, private route:ActivatedRoute,private fb:FormBuilder,private routes:Router){}

  ngOnInit(): void {
    

    this.idBeneficiaire = this.route.snapshot.paramMap.get('idB')
    console.log(this.idBeneficiaire)
    this.initForm()

    this.srv.finfBeneficiaire(this.idBeneficiaire).subscribe((res:any)=>{
      this.beneficiaireForm.patchValue({
        idBeneficiaire:res.idBeneficiaire,
        nomBeneficiaire:res.nomBeneficiaire,
        banque:res.banque,
        numeroCompte:res.numeroCompte,
        idCompte:res.compte.idCompte,
      })
      this.CompteId=res.compte.idCompte
      

    })
   
  }
 
  initForm(){
    this.beneficiaireForm=this.fb.group({
    
      idBeneficiaire:'',
      nomBeneficiaire:'',
      banque:'',
      numeroCompte:'',
      idCompte:'', 

    }

    )
  }

  updateBeneficiaire(){
    const inputData:Beneficiaire={
         idBeneficiaire:this.idBeneficiaire,
        nomBeneficiaire:this.beneficiaireForm.value.nomBeneficiaire,
        banque:this.beneficiaireForm.value.banque,
        numeroCompte:this.beneficiaireForm.value.numeroCompte ,
        compte:{
         idCompte: this.beneficiaireForm.value.idCompte,
          typeCompte: '',
          solde: 0,
          dateCreation: '',
          status: '',
          numeroCompte: '',
          raisonFermeture: '',
          user: {
            userId: 0,
            username: '',
            password: '',
            age: 0,
            genre: '',
            listeCompte: []
          }
        }
      
    }
    this.srv.updateBeneficiaire(this.idBeneficiaire,inputData).subscribe()
    }
    close(){
      this.routes.navigateByUrl(`dashboard/${this.CompteId}`)
    }

  }


