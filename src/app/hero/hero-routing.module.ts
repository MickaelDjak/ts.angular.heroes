import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroDatailComponent} from './components/hero-datail/hero-datail.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HeroAddComponent} from './components/hero-add/hero-add.component';
import {HeroLoggerComponent} from './components/hero-logger/hero-logger.component';
import {HeroSearchComponent} from './components/hero-search/hero-search.component';

const routes: Routes = [
  {
    path: 'hero',
    component: HeroesComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'add', component: HeroAddComponent},
      {path: 'detail/:id', component: HeroDatailComponent},
      {path: 'log', component: HeroLoggerComponent},
      {path: 'search', component: HeroSearchComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule {
}
