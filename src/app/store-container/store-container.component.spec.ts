import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreContainerComponent } from './store-container.component';

describe('StoreContainerComponent', () => {
  let component: StoreContainerComponent;
  let fixture: ComponentFixture<StoreContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
