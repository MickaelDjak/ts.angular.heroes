import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {Router} from '@angular/router';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';

import {getCurrentUserAction, getCurrentUserSuccessAction, getCurrentUserFailureAction} from '../actions/getCurrentUser.action';

import {AuthService} from '../../services/auth.service';
import {CurrentUserInterface} from '../../../shered/types/currentUser.interface';
import {HttpErrorResponse} from '@angular/common/http';
import {PersistenceStorageService} from '../../../shered/serices/persistence-storage.service';

@Injectable()
export class GetCurrentUserEffect {
  register$ = createEffect(() => this.actions$
    .pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persistenceService.get('accessToken');
        if (!token) {
          return of(getCurrentUserFailureAction());
        }

        return this.authService.getCurrentUser()
          .pipe(
            map((currentUser: CurrentUserInterface) => {
              this.persistenceService.set('accessToken', currentUser.token);

              return getCurrentUserSuccessAction({currentUser});
            }),
            catchError((errorResponse: HttpErrorResponse) => {
              return of(getCurrentUserFailureAction());
            })
          );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService,
    private persistenceService: PersistenceStorageService,
  ) {
  }
}

