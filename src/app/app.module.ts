import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {TestpsyComponent} from './dashboard/testpsy/testpsy.component';
import { CompanyServicesComponent } from './company-services/company-services.component';
import { ContactComponent } from './contact/contact.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    HomeComponent,
    CompanyServicesComponent,
    ContactComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    DashboardModule

  ],
  providers: [TestpsyComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
