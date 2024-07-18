export interface User{
    userId:number
    username:string
    password:string
     age:number
    genre:string
    listeCompte:Array<Compte>
}
export interface Compte{
     idCompte:number
     typeCompte:string
     solde:number
     dateCreation:string
     status:string
    numeroCompte:string
    raisonFermeture:string
    user:User

}

export interface CompteRequest{
    user:User
    typeCarte:string
    typeCompte:string

}

export interface Beneficiaire{

   idBeneficiaire:number
   nomBeneficiaire:string
   banque:string
   numeroCompte:string
   compte:Compte 

}

export interface CarteBancaire{

     idCarte:number
     numero:number   
     dateExpiration:string
     typeCarte:string
     status:string
     compte:Compte

}