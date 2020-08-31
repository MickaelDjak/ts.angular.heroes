import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorRefresherComponent } from './monitor-refresher.component';

describe('MonitorRefresherComponent', () => {
  let component: MonitorRefresherComponent;
  let fixture: ComponentFixture<MonitorRefresherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorRefresherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorRefresherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
