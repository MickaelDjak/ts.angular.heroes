import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MissionControlComponent} from './components/mission-control/mission-control.component';

const routes: Routes = [
  {path: 'mission', component: MissionControlComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AstronautRoutingModule {
}
