import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddformatteurComponent } from './addformatteur.component';

describe('AddformatteurComponent', () => {
  let component: AddformatteurComponent;
  let fixture: ComponentFixture<AddformatteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddformatteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddformatteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
