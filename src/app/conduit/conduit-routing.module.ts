import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LayoutComponent} from './layout.component';
import {RegisterComponent} from './auth/components/register/register.component';
import {LoginComponent} from './auth/components/login/login.component';
import {GlobalFeedListComponent} from './global-feed/components/global-feed-list/global-feed-list.component';


const routes: Routes = [
  {
    path: 'conduit', component: LayoutComponent, children: [
      {path: '', redirectTo: 'feed', pathMatch: 'full'},
      {path: 'feed', component: GlobalFeedListComponent, data: {url: '/feed'}},
      {path: 'articles', component: GlobalFeedListComponent, data: {url: ''}},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ConduitRoutingModule {
}
