import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroLoggerComponent } from './hero-logger.component';

describe('MessagesComponent', () => {
  let component: HeroLoggerComponent;
  let fixture: ComponentFixture<HeroLoggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroLoggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
