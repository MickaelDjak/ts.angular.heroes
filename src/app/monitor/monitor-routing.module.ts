import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MonitorLayoutComponent} from './components/monitor-layout/monitor-layout.component';

const routes: Routes = [
  {path: 'monitor', component: MonitorLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MonitorRoutingModule {
}
