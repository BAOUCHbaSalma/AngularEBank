import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Transaction } from '../Model/Model.models';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrl: './add-transaction.component.css'
})
export class AddTransactionComponent implements OnInit{
  compteId!:any
  transactionForm!:FormGroup;

  constructor(private srv:ServiceService,private route:ActivatedRoute,private fb:FormBuilder){}
  ngOnInit(): void {
    
    this.compteId = this.route.snapshot.paramMap.get('id');
    this.transactionForm = this.fb.group({
      dateTransaction: '',
      heureTransaction: '',
      montant: '',
      typeTransaction: '',
      descriptionTransaction: '',
      banque: '',
      beneficiaireId: '',
      compteId: ''
    });

   
  }

  submitTransaction() {
    const transactionData: Transaction = {
      idTransaction: 0, 
      dateTransaction:"",
      heursTransaction: "",
      montant: this.transactionForm.value.montant,
      typeTransaction: this.transactionForm.value.typeTransaction,
      descriptionTransaction: this.transactionForm.value.descriptionTransaction,
      banque: this.transactionForm.value.banque,
      beneficiaire: {
        idBeneficiaire: this.transactionForm.value.beneficiaireId,
        nomBeneficiaire: '', 
        banque: '',
        numeroCompte: '',
        compte: {
          idCompte: this.compteId,
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
      },
      compte: {
        idCompte: this.transactionForm.value.compteId,
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
    };
    this.srv.addTransaction(transactionData, this.compteId).subscribe(() => {
      this.ngOnInit(); 
    });
  }

}
