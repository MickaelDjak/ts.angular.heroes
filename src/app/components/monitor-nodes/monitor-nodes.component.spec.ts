import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorNodesComponent } from './monitor-nodes.component';

describe('MonitorNodesComponent', () => {
  let component: MonitorNodesComponent;
  let fixture: ComponentFixture<MonitorNodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorNodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorNodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
