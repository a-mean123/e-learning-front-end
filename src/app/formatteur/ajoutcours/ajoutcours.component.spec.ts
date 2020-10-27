import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutcoursComponent } from './ajoutcours.component';

describe('AjoutcoursComponent', () => {
  let component: AjoutcoursComponent;
  let fixture: ComponentFixture<AjoutcoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutcoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
