import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { TableBenefciaireComponent } from './table-beneficiaire/table-beneficiaire.component';
import { UpdatebeneficiaireComponent } from './updatebeneficiaire/updatebeneficiaire.component';
import { AddBeneficiaireComponent } from './add-beneficiaire/add-beneficiaire.component';
import { CarteBancaireComponent } from './carte-bancaire/carte-bancaire.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './Service/auth-interceptor.service';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowAccountComponent } from './show-account/show-account.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';





@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    TableComponent,
    TableBenefciaireComponent,
    UpdatebeneficiaireComponent,
    AddBeneficiaireComponent,
    CarteBancaireComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    ShowAccountComponent,
    TransactionComponent,
    AddTransactionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
   { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
