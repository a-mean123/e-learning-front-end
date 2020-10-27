import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsidComponent } from './asid.component';

describe('AsidComponent', () => {
  let component: AsidComponent;
  let fixture: ComponentFixture<AsidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
