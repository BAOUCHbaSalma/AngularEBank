import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { ActivatedRoute } from '@angular/router';
import { Beneficiaire } from '../Model/Model.models';

@Component({
  selector: 'app-table-beneficiaire',
  templateUrl: './table-beneficiaire.component.html',
  styleUrl: './table-beneficiaire.component.css'
})

export class TableBenefciaireComponent implements OnInit{
  idCompte:any
  listBeneficiaire:Beneficiaire[]=[]

  constructor(private srv:ServiceService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.idCompte = this.route.snapshot.paramMap.get('idB');
    this.srv.tableBenificiaire(this.idCompte).subscribe(value =>{
      this.listBeneficiaire=value
    })
   
  }
  

}
