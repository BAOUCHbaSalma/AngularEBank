import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { Transaction } from '../Model/Model.models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent implements OnInit{
  listTransaction!:any;
  idCompte:any;

  constructor(private srv:ServiceService,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.idCompte=this.route.snapshot.paramMap.get('id')
    this.srv.showAllTransactionByIdCompte(this.idCompte).subscribe(value=>{
      this.listTransaction=value;

    })
  ;
  }

}
