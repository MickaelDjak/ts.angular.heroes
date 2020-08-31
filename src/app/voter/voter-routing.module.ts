import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VoterComponent} from './components/voter/voter.component';

const routes: Routes = [
  {path: 'voter', component: VoterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class VoterRoutingModule {
}
