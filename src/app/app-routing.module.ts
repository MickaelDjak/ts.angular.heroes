import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroDatailComponent} from './components/hero-datail/hero-datail.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {VoterComponent} from './components/voter/voter.component';
import {MissionControlComponent} from './components/mission-control/mission-control.component';
import {ObservableComponent} from './components/observable/observable.component';
import {StockManageComponent} from './components/stock-manage/stock-manage.component';
import {StockDashboardComponent} from './components/stock-dashboard/stock-dashboard.component';
import {StockLayoutComponent} from './components/stock-layout/stock-layout.component';

const routes: Routes = [
  {path: 'hero', component: HeroesComponent},
  {path: 'hero/dashboard', component: DashboardComponent},
  {path: 'hero/detail/:id', component: HeroDatailComponent},
  {path: 'voter', component: VoterComponent},
  {path: 'mission', component: MissionControlComponent},
  {path: 'observable', component: ObservableComponent},
  {path: 'stock', component: StockDashboardComponent},
  { path: 'stock/manage', component: StockManageComponent },
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
