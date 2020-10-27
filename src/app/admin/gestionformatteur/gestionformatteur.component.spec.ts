import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionformatteurComponent } from './gestionformatteur.component';

describe('GestionformatteurComponent', () => {
  let component: GestionformatteurComponent;
  let fixture: ComponentFixture<GestionformatteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionformatteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionformatteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
