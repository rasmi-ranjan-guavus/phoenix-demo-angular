import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GvsCardComponent } from './gvs-card.component';

describe('GvsCardComponent', () => {
  let component: GvsCardComponent;
  let fixture: ComponentFixture<GvsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GvsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GvsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
