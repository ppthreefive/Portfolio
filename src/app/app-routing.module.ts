import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";
import {ResumeComponent} from "./resume/resume.component";
import {WorksComponent} from "./works/works.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "resume",
    component: ResumeComponent,
  },
  {
    path: "works",
    component: WorksComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },

  { path: "**", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
