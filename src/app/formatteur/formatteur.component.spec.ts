import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatteurComponent } from './formatteur.component';

describe('FormatteurComponent', () => {
  let component: FormatteurComponent;
  let fixture: ComponentFixture<FormatteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
