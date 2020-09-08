import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';
import {RegisterComponent} from './modules/auth/components/register/register.component';
import {CardsComponent} from './components/cards/cards.component';
import {LoginComponent} from './modules/auth/components/login/login.component';

const routes: Routes = [
  {
    path: 'conduit', component: LayoutComponent, children: [
      {path: '', component: CardsComponent},
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
