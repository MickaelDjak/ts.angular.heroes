import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';

import {reducers} from './store/reducer';

import {RegisterComponent} from './components/register/register.component';

import {AuthService} from './services/auth.service';
import {EffectsModule} from '@ngrx/effects';
import {RegisterEffect} from './store/effects/register.effect';
import { ValidationViewerComponent } from './components/validation-viewer/validation-viewer.component';

@NgModule({
  declarations: [
    RegisterComponent,
    ValidationViewerComponent
  ],
  providers: [
    AuthService
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),

  ]
})
export class AuthModule {
}
