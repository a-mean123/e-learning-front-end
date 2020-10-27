import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadeComponent } from './heade.component';

describe('HeadeComponent', () => {
  let component: HeadeComponent;
  let fixture: ComponentFixture<HeadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
