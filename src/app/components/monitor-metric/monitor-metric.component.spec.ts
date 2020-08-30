import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorMetricComponent } from './monitor-metric.component';

describe('MonitorMetricComponent', () => {
  let component: MonitorMetricComponent;
  let fixture: ComponentFixture<MonitorMetricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorMetricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorMetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
