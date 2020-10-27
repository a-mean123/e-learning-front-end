import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFormationsComponent } from './detail-formations.component';

describe('DetailFormationsComponent', () => {
  let component: DetailFormationsComponent;
  let fixture: ComponentFixture<DetailFormationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFormationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
