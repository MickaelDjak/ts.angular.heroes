import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ObservableComponent} from './other/components/observable/observable.component';

const routes: Routes = [
  {path: 'observable', component: ObservableComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
