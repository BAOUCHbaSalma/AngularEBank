import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompteRequest, User } from '../Model/Model.models';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent implements OnInit{
  userForm!:FormGroup
  
  constructor(private srv:ServiceService,private fb:FormBuilder){

  }
  ngOnInit(): void {
    this.userForm=this.fb.group({
      username:'',
      password:'',
      age:'',
      genre:'',
      typeCompte:'',
      typeCarte:'',

    }

    )
  }


  hundelSubmit(): void {
    const formValue = this.userForm.value;
    const user: User = {
      userId: 0,
      username: formValue.username,
      password: formValue.password,
      age: formValue.age,
      genre: formValue.genre,
      listeCompte: []
    };
    const userCompte: CompteRequest = {
      user: user,
      typeCompte: formValue.typeCompte,
      typeCarte: formValue.typeCarte
    };
    console.log(formValue.username)
    console.log(formValue.password)
    console.log(formValue.typeCarte)

    this.srv.addUser(userCompte).subscribe(() => {
      this.ngOnInit();
    });
  }
  
  
  
}
