import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HeroLayoutComponent} from './components/hero-layout/hero-layout.component';
import {HeroDatailComponent} from './components/hero-datail/hero-datail.component';
import {HeroLeaderListComponent} from './components/hero-leader-list/hero-leader-list.component';
import {HeroAddComponent} from './components/hero-add/hero-add.component';
import {HeroLoggerComponent} from './components/hero-logger/hero-logger.component';
import {HeroSearchComponent} from './components/hero-search/hero-search.component';

const routes: Routes = [
  {
    path: 'hero',
    component: HeroLayoutComponent,
    children: [
      {path: 'leaders', component: HeroLeaderListComponent},
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
