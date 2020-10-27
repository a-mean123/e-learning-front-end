import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GereretudiantComponent } from './gereretudiant.component';

describe('GereretudiantComponent', () => {
  let component: GereretudiantComponent;
  let fixture: ComponentFixture<GereretudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GereretudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GereretudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
