import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { ActivatedRoute } from '@angular/router';
import { Beneficiaire } from '../Model/Model.models';

@Component({
  selector: 'app-table-beneficiaire',
  templateUrl: './table-beneficiaire.component.html',
  styleUrls: ['./table-beneficiaire.component.css']
})
export class TableBenefciaireComponent implements OnInit {
  @Output() openForm = new EventEmitter<void>();
  
  idCompte: any;
  listBeneficiaire: Beneficiaire[] = [];

  constructor(private srv: ServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idCompte = this.route.snapshot.paramMap.get('id');
    this.srv.tableBenificiaire(this.idCompte).subscribe(value => {
      this.listBeneficiaire = value;
    });
  }

  deleteBeneficiaire(id: number) {
    this.srv.deleteBenificiaire(id).subscribe(() => {
      this.ngOnInit();
    });
  }


}
