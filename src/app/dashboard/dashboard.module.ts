import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { TestpsyComponent } from './testpsy/testpsy.component';
import { TestpsycompletedComponent } from './testpsycompleted/testpsycompleted.component';
import { SingleTestComponent } from './single-test/single-test.component';
import {SinglequestionComponent} from './singlequestion/singlequestion.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    TestpsyComponent,
    TestpsycompletedComponent,
    SingleTestComponent,
    SinglequestionComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
