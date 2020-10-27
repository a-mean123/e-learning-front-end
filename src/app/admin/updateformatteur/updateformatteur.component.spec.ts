import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateformatteurComponent } from './updateformatteur.component';

describe('UpdateformatteurComponent', () => {
  let component: UpdateformatteurComponent;
  let fixture: ComponentFixture<UpdateformatteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateformatteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateformatteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
