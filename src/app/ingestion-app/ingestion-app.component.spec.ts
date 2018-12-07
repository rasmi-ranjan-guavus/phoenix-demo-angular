import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngestionAppComponent } from './ingestion-app.component';

describe('IngestionAppComponent', () => {
  let component: IngestionAppComponent;
  let fixture: ComponentFixture<IngestionAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngestionAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngestionAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
