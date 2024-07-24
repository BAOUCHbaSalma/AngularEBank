import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-account',
  templateUrl: './show-account.component.html',
  styleUrl: './show-account.component.css'
})
export class ShowAccountComponent implements OnInit{
  idCompte:any
  compte:any

  constructor(private srv:ServiceService,private route:ActivatedRoute,private routes:Router){}
  ngOnInit(): void {
   this.idCompte=this.route.snapshot.paramMap.get('id')
    this.srv.findCompteById(this.idCompte).subscribe(value=>{
      this.compte=value
    

    })
  }
  updateStatus(idCompte:number,status:string){
    this.srv.changeStatusCompte(idCompte,status).subscribe(()=>{
      this.routes.navigateByUrl(`/home/${this.compte.user.userId}`)
    }
     
    )
    
  }

}
