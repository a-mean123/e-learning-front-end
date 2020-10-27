import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutquizComponent } from './ajoutquiz.component';

describe('AjoutquizComponent', () => {
  let component: AjoutquizComponent;
  let fixture: ComponentFixture<AjoutquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
