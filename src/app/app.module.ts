import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatButtonModule } from "@angular/material/button";
import { MatLineModule } from "@angular/material/core";
import { AppComponent } from "./app.component";
import { SideNavComponent } from "./side-nav/side-nav.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import { ResumeComponent } from './resume/resume.component';
import { WorksComponent } from './works/works.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { AboutComponent } from './about/about.component';
import { IntroComponent } from './intro/intro.component';
import { IconBarComponent } from './icon-bar/icon-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ContactComponent,
    HomeComponent,
    HeaderComponent,
    ResumeComponent,
    WorksComponent,
    AboutComponent,
    IntroComponent,
    IconBarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatLineModule,
    MatToolbarModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatDatepickerModule,
  ],
  providers: [
    { provide: Window, useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
