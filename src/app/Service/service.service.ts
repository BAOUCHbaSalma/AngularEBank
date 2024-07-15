import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beneficiaire, Compte, CompteRequest, User } from '../Model/Model.models';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  urlApi="http://localhost:8080";

  constructor(private http : HttpClient) { }

  public addUser(FormData:any):Observable<CompteRequest>{
    return this.http.post<CompteRequest>("http://localhost:8080/user",FormData)
  }
  public tableUser(id:number):Observable<Array<Compte>>{
    return this.http.get<Array<Compte>>(`${this.urlApi}/comptes/${id}`)
  }
  public deleteBenificiaire(id:number){
    return this.http.delete(`${this.urlApi}/beneficiaire/${id}`)
  }
  public tableBenificiaire(id:number):Observable<Array<Beneficiaire>>{
    return this.http.get<Array<Beneficiaire>>(`${this.urlApi}/beneficiaires/${id}`)
  }
}
