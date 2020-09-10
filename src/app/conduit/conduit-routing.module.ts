import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './shered/components/layout/layout.component';
import {RegisterComponent} from './auth/components/register/register.component';
import {LoginComponent} from './auth/components/login/login.component';
import {FeedListComponent} from './global-feed/components/feed-list/feed-list.component';

const routes: Routes = [
  {
    path: 'conduit', component: LayoutComponent, children: [
      {path: '', component: FeedListComponent},
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
