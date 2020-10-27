import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouttestComponent } from './ajouttest.component';

describe('AjouttestComponent', () => {
  let component: AjouttestComponent;
  let fixture: ComponentFixture<AjouttestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouttestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
