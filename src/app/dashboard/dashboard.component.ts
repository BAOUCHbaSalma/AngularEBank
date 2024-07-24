import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TokenService } from '../Service/token-decode.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  idCompte:any
  username!:string

  constructor(private route:ActivatedRoute,private srv:TokenService){}
  ngOnInit(): void {
    this.idCompte=this.route.snapshot.paramMap.get("id")
    const token=localStorage.getItem('jwt')
    this.username=this.srv.getUsernameFromToken(token)
  }
  @ViewChild('addBeneficier', { static: false })
  addBeneficier!: ElementRef;
  check: boolean = false;




  
  onOpen() {
    if (this.check) {
      this.addBeneficier.nativeElement.style.display = "none";
    } else {
      this.addBeneficier.nativeElement.style.display = "flex";
    }
    this.check = !this.check;
  }

  onClose() {
    this.addBeneficier.nativeElement.style.display = "none";
    this.check = false;
  }

  




}
