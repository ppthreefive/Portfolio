import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeComponent } from './resume.component';
import {AppModule} from "../app.module";

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ AppModule ],
      declarations: [ ResumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
