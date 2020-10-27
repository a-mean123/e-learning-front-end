import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionformationComponent } from './gestionformation.component';

describe('GestionformationComponent', () => {
  let component: GestionformationComponent;
  let fixture: ComponentFixture<GestionformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
