import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ObservableComponent} from './components/observable/observable.component';

const routes: Routes = [
  {path: 'observable', component: ObservableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule {
}