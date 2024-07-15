import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { TableComponent } from './table/table.component';
import { TableBenefciaireComponent } from './table-beneficiaire/table-beneficiaire.component';

const routes: Routes = [
  {path:"home",component:FormulaireComponent},
  {path:"home/:id",component:TableComponent},
  {path:"beneficiaire/:idB",component:TableBenefciaireComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
