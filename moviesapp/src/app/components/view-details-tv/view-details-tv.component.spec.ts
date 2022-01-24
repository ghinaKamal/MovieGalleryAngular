import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailsTvComponent } from './view-details-tv.component';

describe('ViewDetailsTvComponent', () => {
  let component: ViewDetailsTvComponent;
  let fixture: ComponentFixture<ViewDetailsTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDetailsTvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailsTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
