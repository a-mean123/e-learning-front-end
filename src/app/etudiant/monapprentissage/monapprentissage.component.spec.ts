import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonapprentissageComponent } from './monapprentissage.component';

describe('MonapprentissageComponent', () => {
  let component: MonapprentissageComponent;
  let fixture: ComponentFixture<MonapprentissageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonapprentissageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonapprentissageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
