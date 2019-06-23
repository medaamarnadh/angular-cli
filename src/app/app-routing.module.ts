import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroComponent} from './hero/hero.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeadLinesComponent} from './head-lines/head-lines.component';
import { HeroReactiveComponent } from './hero-reactive/hero-reactive.component';
import { HeroTemplateComponent } from './hero-template/hero-template.component';
import { Student } from './student';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {
    path:'heros',
    component: HeroComponent
  },{
    path:'dashboard',
    component:DashboardComponent
  },{
    path:'',
    redirectTo:'/dashboard',
    pathMatch:'full'
 },{
    path:'head-lines',
    component: HeadLinesComponent
},{
  path:'reactive-form',
  component: HeroReactiveComponent
},{
  path:'template-form',
  component: HeroTemplateComponent
},{
  path: 'student',
  component: StudentComponent,
  children:[{
    path:'',
    component: StudentListComponent,
  },{
    path:':id',
    component: StudentViewComponent,
  },{
    path:':id/edit',
    component: StudentCreateComponent
  },{
    path:'create',
    component: StudentCreateComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
