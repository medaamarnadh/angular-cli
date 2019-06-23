import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { OneComponent } from './hero/one/one.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HeadLinesComponent } from './head-lines/head-lines.component';
import { HeroReactiveComponent } from './hero-reactive/hero-reactive.component';
import { HeroTemplateComponent } from './hero-template/hero-template.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    OneComponent,
    DashboardComponent,
    MessagesComponent,
    HeadLinesComponent,
    HeroReactiveComponent,
    HeroTemplateComponent,
    StudentListComponent,
    StudentCreateComponent,
    StudentViewComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
