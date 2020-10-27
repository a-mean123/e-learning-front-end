import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioncategorieComponent } from './gestioncategorie.component';

describe('GestioncategorieComponent', () => {
  let component: GestioncategorieComponent;
  let fixture: ComponentFixture<GestioncategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestioncategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioncategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
