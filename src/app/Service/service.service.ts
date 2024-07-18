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

  public addUser(FormData:any){
    return this.http.post("http://localhost:8080/user",FormData)
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
  public finfBeneficiaire(id:number):Observable<Beneficiaire>{
    return this.http.get<Beneficiaire>(`${this.urlApi}/findB/${id}`)
  }
  public updateBeneficiaire(id:number,inputData:Beneficiaire){
    return this.http.put(`${this.urlApi}/beneficiaire/${id}`,inputData)

  }
  public addBeneficiaire(FormData:Beneficiaire){
    return this.http.post(`${this.urlApi}/beneficiaire`,FormData)

  }
  public showCartesBancaires(id:number){
    return this.http.get(`${this.urlApi}/cartes/${id}`)

  }
}
