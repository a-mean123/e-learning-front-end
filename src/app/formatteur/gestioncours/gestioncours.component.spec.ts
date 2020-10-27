import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioncoursComponent } from './gestioncours.component';

describe('GestioncoursComponent', () => {
  let component: GestioncoursComponent;
  let fixture: ComponentFixture<GestioncoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestioncoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioncoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
