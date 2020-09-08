import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './components/layout/layout.component';
import {ConduitRoutingModule} from './conduit-routing.module';
import {AuthModule} from './modules/auth/auth.module';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../../environments/environment';
import {CardsComponent} from './components/cards/cards.component';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {PersistenceStorageService} from './shered/serices/persistence-storage.service';

@NgModule({
  declarations: [
    LayoutComponent,
    CardsComponent
  ],
  providers: [
    PersistenceStorageService,
  ],
  imports: [
    CommonModule,
    ConduitRoutingModule,
    AuthModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ]
})

export class ConduitModule {
}
