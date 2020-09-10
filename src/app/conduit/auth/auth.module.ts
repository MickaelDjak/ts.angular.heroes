import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {reducers} from './store/reducer';

import {RegisterComponent} from './components/register/register.component';
import {ValidationViewerComponent} from './components/validation-viewer/validation-viewer.component';
import {LoginComponent} from './components/login/login.component';

import {AuthService} from './services/auth.service';

import {LoginEffect} from './store/effects/login.effect';
import {RegisterEffect} from './store/effects/register.effect';
import {GetCurrentUserEffect} from './store/effects/getCurrentUser.effect';

import {ConduitRoutingModule} from '../conduit-routing.module';

@NgModule({
  declarations: [
    ValidationViewerComponent,
    RegisterComponent,
    LoginComponent
  ],
  providers: [
    AuthService,
  ],
  imports: [
    CommonModule,
    ConduitRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      LoginEffect,
      RegisterEffect,
      GetCurrentUserEffect
    ]),
  ]
})
export class AuthModule {
}
