import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroDatailComponent} from './components/hero-datail/hero-datail.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HeroAddComponent} from './components/hero-add/hero-add.component';

const routes: Routes = [
  {path: 'hero', component: HeroesComponent},
  {path: 'hero/dashboard', component: DashboardComponent},
  {path: 'hero/add', component: HeroAddComponent},
  {path: 'hero/detail/:id', component: HeroDatailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule {
}
