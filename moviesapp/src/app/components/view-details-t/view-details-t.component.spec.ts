import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailsTComponent } from './view-details-t.component';

describe('ViewDetailsTComponent', () => {
  let component: ViewDetailsTComponent;
  let fixture: ComponentFixture<ViewDetailsTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDetailsTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailsTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
