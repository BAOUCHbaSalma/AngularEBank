import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beneficiaire, Compte, CompteRequest, Transaction, User } from '../Model/Model.models';

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

 public showSoldeCompte(id:number){
    return this.http.get(`${this.urlApi}/compte/${id}/solde`)
  }

  public changerStatusCarte(status:string,idCarte:number){
    return this.http.post(`${this.urlApi}/carte/${idCarte}/status`,status)
  }

  public Login(FormData:User){
    return this.http.post(`${this.urlApi}/login`,FormData)
  }
  getToken(): string | null {
    return localStorage.getItem('jwt');
  }
  public changeStatusCompte(idCompte:number,status:string){
    return this.http.put(`${this.urlApi}/compte/${idCompte}/status`,status)

  }
  public findIdByUsername(username:String){
    return this.http.get(`${this.urlApi}/user/id?username=${username}`)
  }

  public showAllTransactionByIdCompte(idCompte:string){
    return this.http.get(`${this.urlApi}/transactions/${idCompte}`)

  }

  public findCompteById(idCompte:number){
    return this.http.get(`${this.urlApi}/compte/${idCompte}`)
  }

  public addTransaction(transaction:Transaction , idCompte:number){
    return this.http.post(`${this.urlApi}/transaction/${idCompte}`,transaction)
  }

}
