import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';

import { SingleTestComponent } from './single-test/single-test.component';
import {FormsModule} from '@angular/forms';
import {TestpsyComponent} from './testpsy/testpsy.component';
import { AddTestComponent } from './add-test/add-test.component';
import { HistoryComponent } from './history/history.component';
import { HistorySingleTestComponent } from './history-single-test/history-single-test.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    TestpsyComponent,
    SingleTestComponent,
    AddTestComponent,
    HistoryComponent,
    HistorySingleTestComponent,
   ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
