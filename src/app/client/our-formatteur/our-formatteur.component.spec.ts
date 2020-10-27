import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurFormatteurComponent } from './our-formatteur.component';

describe('OurFormatteurComponent', () => {
  let component: OurFormatteurComponent;
  let fixture: ComponentFixture<OurFormatteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurFormatteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurFormatteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
