import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesFormationComponent } from './mes-formation.component';

describe('MesFormationComponent', () => {
  let component: MesFormationComponent;
  let fixture: ComponentFixture<MesFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
