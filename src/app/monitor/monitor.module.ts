import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {MonitorDashboardComponent} from './components/monitor-dashboard/monitor-dashboard.component';
import {MonitorMetricComponent} from './components/monitor-metric/monitor-metric.component';
import {MonitorNodesComponent} from './components/monitor-nodes/monitor-nodes.component';
import {MonitorNodeRowComponent} from './components/monitor-node-row/monitor-node-row.component';
import {MonitorRefresherComponent} from './components/monitor-refresher/monitor-refresher.component';

import {MonitorRoutingModule} from './monitor-routing.module';
import {MonitorLayoutComponent} from './components/monitor-layout/monitor-layout.component';

@NgModule({
  declarations: [
    MonitorLayoutComponent,
    MonitorDashboardComponent,
    MonitorMetricComponent,
    MonitorNodesComponent,
    MonitorNodeRowComponent,
    MonitorRefresherComponent,
  ],
  imports: [
    BrowserModule,
    MonitorRoutingModule
  ],
})
export class MonitorModule {
}
