import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { ActivatedRoute } from '@angular/router';

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
    this.compteId = this.route.snapshot.paramMap.get('idC');
    this.srv.showCartesBancaires(this.compteId).subscribe(value=>{
      this.listCartes=value

    })

  }

}
