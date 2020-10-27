import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionquizComponent } from './gestionquiz.component';

describe('GestionquizComponent', () => {
  let component: GestionquizComponent;
  let fixture: ComponentFixture<GestionquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
