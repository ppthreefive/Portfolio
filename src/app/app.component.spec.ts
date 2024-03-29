import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {SideNavComponent} from "./side-nav/side-nav.component";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {AppModule} from "./app.module";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ AppModule ],
      declarations: [
        AppComponent,
        SideNavComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
