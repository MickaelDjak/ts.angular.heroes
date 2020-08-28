import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroDatailComponent} from './components/hero-datail/hero-datail.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {VoterComponent} from './components/voter/voter.component';
import {MissionControlComponent} from './components/mission-control/mission-control.component';
import {ObservableComponent} from './components/observable/observable.component';

const routes: Routes = [
  {path: 'hero', component: HeroesComponent,},
  {path: 'hero/dashboard', component: DashboardComponent},
  {path: 'hero/detail/:id', component: HeroDatailComponent},
  // {path: 'heroes', component: HeroesComponent},
  // {path: 'detail/:id', component: HeroDatailComponent},
  // {path: 'dashboard', component: DashboardComponent},
  {path: 'voter', component: VoterComponent},
  {path: 'mission', component: MissionControlComponent},
  {path: 'observable', component: ObservableComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
