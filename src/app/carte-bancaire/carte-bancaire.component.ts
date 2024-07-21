import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { ActivatedRoute } from '@angular/router';
import { CarteBancaire } from '../Model/Model.models';

@Component({
  selector: 'app-carte-bancaire',
  templateUrl: './carte-bancaire.component.html',
  styleUrl: './carte-bancaire.component.css'
})
export class CarteBancaireComponent implements OnInit{
  listCartes:any
  compteId:any
  constructor(private srv:ServiceService,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.compteId = this.route.snapshot.paramMap.get('id');
    this.srv.showCartesBancaires(this.compteId).subscribe(value=>{
      this.listCartes=value

    })

  }
  updateStatus(idCarte:number,status:string){
    this.srv.changerStatusCarte(status,idCarte).subscribe(()=>{
      this.ngOnInit()
    })
    
  }

  getFormattedCardNumber(carte: CarteBancaire): String {
    if (carte?.numero) {
      return carte.numero.replace(/(\d{4})(?=\d)/g, '$1 ');
    }
    return '';
  }

 
  getFormattedExpirationDate(carte: CarteBancaire): string {
    if (carte?.dateExpiration) {
      const [year, month] = carte.dateExpiration.split('-');
      return `${month}/${year.slice(-2)}`;
    }
    return '';
  }
}

