import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { TableComponent } from './table/table.component';
import { TableBenefciaireComponent } from './table-beneficiaire/table-beneficiaire.component';
import { UpdatebeneficiaireComponent } from './updatebeneficiaire/updatebeneficiaire.component';
import { AddBeneficiaireComponent } from './add-beneficiaire/add-beneficiaire.component';
import { CarteBancaireComponent } from './carte-bancaire/carte-bancaire.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
   {path:"home/:id",component:TableComponent},
   {path:"dashboard/:id",component:DashboardComponent},
  // {path:"beneficiaires/:idB",component:TableBenefciaireComponent},
  // {path:"beneficiaire/:idB",component:UpdatebeneficiaireComponent},
  // {path:"beneficiaire",component:AddBeneficiaireComponent},
  // {path:"cartes/:idC",component:CarteBancaireComponent},
 // {path:"login",component:LoginComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

