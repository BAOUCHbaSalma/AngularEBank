import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../Service/service.service';
import { Compte } from '../Model/Model.models';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{

  userId:any;
  listComptes:Compte[]=[]
  constructor(private route:ActivatedRoute , private srv:ServiceService){}
 

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.srv.tableUser(this.userId).subscribe(value=>{
      this.listComptes=value

    })
  }
 
 

}
