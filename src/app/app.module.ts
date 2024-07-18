import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { TableBenefciaireComponent } from './table-beneficiaire/table-beneficiaire.component';
import { UpdatebeneficiaireComponent } from './updatebeneficiaire/updatebeneficiaire.component';
import { AddBeneficiaireComponent } from './add-beneficiaire/add-beneficiaire.component';
import { CarteBancaireComponent } from './carte-bancaire/carte-bancaire.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    TableComponent,
    TableBenefciaireComponent,
    UpdatebeneficiaireComponent,
    AddBeneficiaireComponent,
    CarteBancaireComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
