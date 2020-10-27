import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiontestComponent } from './gestiontest.component';

describe('GestiontestComponent', () => {
  let component: GestiontestComponent;
  let fixture: ComponentFixture<GestiontestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestiontestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestiontestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
