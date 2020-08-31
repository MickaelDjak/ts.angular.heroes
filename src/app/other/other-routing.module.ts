import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ObservableComponent} from './components/observable/observable.component';
import {FormsComponent} from './components/forms/forms.component';

const routes: Routes = [
  {path: 'observable', component: ObservableComponent},
  {path: 'forms', component: FormsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule {
}
