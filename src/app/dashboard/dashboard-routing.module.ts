import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {SingleTestComponent} from './single-test/single-test.component';
import {TestpsyComponent} from './testpsy/testpsy.component';
import {AddTestComponent} from './add-test/add-test.component';
import {HistoryComponent} from './history/history.component';
import {HistorySingleTestComponent} from './history-single-test/history-single-test.component';




const routes: Routes = [
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
    component:AddTestComponent,
  },{
    path:'testCompleted',
    component:HistoryComponent
  },
  {
    path:'historySingleTest',
    component:HistorySingleTestComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
