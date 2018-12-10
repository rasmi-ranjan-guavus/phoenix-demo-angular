import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GvsButtonBarComponent } from './gvs-button-bar.component';

describe('GvsButtonBarComponent', () => {
  let component: GvsButtonBarComponent;
  let fixture: ComponentFixture<GvsButtonBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GvsButtonBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GvsButtonBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
