import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecategorieComponent } from './updatecategorie.component';

describe('UpdatecategorieComponent', () => {
  let component: UpdatecategorieComponent;
  let fixture: ComponentFixture<UpdatecategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
