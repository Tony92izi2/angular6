import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AboutComponent } from './menu/about/about.component';
import { ContactComponent } from './menu/contact/contact.component';
import { ReferencesComponent } from './menu/references/references.component';
import { CustomerListComponent } from './menu/customer/customer-list/customer-list.component';
import { CreateCustomerComponent } from './menu/customer/create-customer/create-customer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  { path: 'login', component: UserloginComponent },
  { path: '', component: MainpageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'references', component: ReferencesComponent },
  { path: 'customers', component: CustomerListComponent },
  { path: 'customers/add', component: CreateCustomerComponent },
  { path: '**', component: MainpageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserloginComponent,
    MainpageComponent,
    AboutComponent,
    ContactComponent,
    ReferencesComponent,
    CustomerListComponent,
    CreateCustomerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
