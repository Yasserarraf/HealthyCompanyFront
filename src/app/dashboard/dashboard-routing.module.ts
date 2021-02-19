import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestpsyComponent} from './testpsy/testpsy.component';
import {ProfileComponent} from './profile/profile.component';
import {SingleTestComponent} from './single-test/single-test.component';
import {SinglequestionComponent} from './singlequestion/singlequestion.component';



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

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
