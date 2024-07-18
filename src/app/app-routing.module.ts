import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { TableComponent } from './table/table.component';
import { TableBenefciaireComponent } from './table-beneficiaire/table-beneficiaire.component';
import { UpdatebeneficiaireComponent } from './updatebeneficiaire/updatebeneficiaire.component';
import { AddBeneficiaireComponent } from './add-beneficiaire/add-beneficiaire.component';
import { CarteBancaireComponent } from './carte-bancaire/carte-bancaire.component';

const routes: Routes = [
  {path:"home",component:FormulaireComponent},
  {path:"home/:id",component:TableComponent},
  {path:"beneficiaires/:idB",component:TableBenefciaireComponent},
  {path:"beneficiaire/:idB",component:UpdatebeneficiaireComponent},
  {path:"beneficiaire",component:AddBeneficiaireComponent},
  {path:"cartes/:idC",component:CarteBancaireComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
