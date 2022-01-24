import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTvshowsComponent } from './card-tvshows.component';

describe('CardTvshowsComponent', () => {
  let component: CardTvshowsComponent;
  let fixture: ComponentFixture<CardTvshowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTvshowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTvshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
