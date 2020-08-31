import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorNodeRowComponent } from './monitor-node-row.component';

describe('MonitorNodeRowComponent', () => {
  let component: MonitorNodeRowComponent;
  let fixture: ComponentFixture<MonitorNodeRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorNodeRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorNodeRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
