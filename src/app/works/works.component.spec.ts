import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksComponent } from './works.component';
import {AppModule} from "../app.module";

describe('WorksComponent', () => {
  let component: WorksComponent;
  let fixture: ComponentFixture<WorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ AppModule ],
      declarations: [ WorksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
