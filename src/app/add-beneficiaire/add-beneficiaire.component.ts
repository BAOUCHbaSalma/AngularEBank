import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { FormBuilder } from '@angular/forms';
import { Beneficiaire } from '../Model/Model.models';

@Component({
  selector: 'app-add-beneficiaire',
  templateUrl: './add-beneficiaire.component.html',
  styleUrl: './add-beneficiaire.component.css'
})
export class AddBeneficiaireComponent implements OnInit {
  beneficiaireForm:any

constructor(private srv:ServiceService,private fb:FormBuilder){}
  ngOnInit(): void {
    this.beneficiaireForm=this.fb.group({
      idBeneficiaire:'',
      nomBeneficiaire:'',
      banque:'',
      numeroCompte:'',
      idCompte:'', 

    }

    )
    
  }
  submitBeneficiaire(){
    const inputData:Beneficiaire={
      idBeneficiaire:0,
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
 this.srv.addBeneficiaire(inputData).subscribe(()=>{
  this.ngOnInit()
 })
  }

}
