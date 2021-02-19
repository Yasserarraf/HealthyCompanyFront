import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfileComponent} from './dashboard/profile/profile.component';
import {TestpsyComponent} from './dashboard/testpsy/testpsy.component';
import {SingleTestComponent} from './dashboard/single-test/single-test.component';
import {AddTestComponent} from './dashboard/add-test/add-test.component';
import {AboutComponent} from './about/about.component';
import {CompanyServicesComponent} from './company-services/company-services.component';
import {ContactComponent} from './contact/contact.component';
import {HistoryComponent} from './dashboard/history/history.component';
import {HistorySingleTestComponent} from './dashboard/history-single-test/history-single-test.component';





const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent,
    children:[
      {
        path:'',
        component:TestpsyComponent
      },
      {
        path:'testpsy',
        component:TestpsyComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'singleTest/:urlTest',
        component:SingleTestComponent,
      },
      {
        path:'newTest',
        component:AddTestComponent
      },
      {
        path:'testCompleted',
        component:HistoryComponent
      },
      {
        path:'historySingleTest',
        component:HistorySingleTestComponent
      }

    ]

  },{
    path:'Home',
    component:HomeComponent,
  },{
    path:'login',
    component:LoginComponent
  },{
    path:'signUp',
    component:SignupComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'services',
    component:CompanyServicesComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:"",
    component:HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
