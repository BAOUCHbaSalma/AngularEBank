import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../Model/Model.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
FormLogin!:FormGroup
  

  constructor(private srv:ServiceService,private route:ActivatedRoute,private fb:FormBuilder){}

  ngOnInit(): void {
    this.FormLogin=this.fb.group({
      username:'',
      password:'',
   
       }) 
}

hundelSubmit(){
  const formValue = this.FormLogin.value;
  const user: User = {
    userId: 0,
    username: formValue.username,
    password: formValue.password,
    age: 0,
    genre: "",
    listeCompte: []
  };
  this.srv.Login(user).subscribe((res:any)=>{
    if(res && res.token){
      console.log("login successs")
      localStorage.setItem("jwt",res.token)
    }
  })
}
}
