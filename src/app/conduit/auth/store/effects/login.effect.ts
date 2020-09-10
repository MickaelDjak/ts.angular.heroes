import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {Router} from '@angular/router';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';

import {loginAction, loginFailureAction, loginSuccessAction} from '../actions/login.action';

import {AuthService} from '../../services/auth.service';
import {CurrentUserInterface} from '../../../shered/types/currentUser.interface';
import {HttpErrorResponse} from '@angular/common/http';
import {PersistenceStorageService} from '../../../shered/serices/persistence-storage.service';

@Injectable()
export class LoginEffect {

  login$ = createEffect(() => this.actions$
    .pipe(
      ofType(loginAction),
      switchMap(({request}) => {
        return this.authService.login(request)
          .pipe(
            map((currentUser: CurrentUserInterface) => {
              this.persistenceService.set('accessToken', currentUser.token);

              return loginSuccessAction({currentUser});
            }),
            catchError((errorResponse: HttpErrorResponse) => {
              return of(loginFailureAction({errors: errorResponse.error.errors}));
            })
          );
      })
    ));

  redirectAfterSubmit$ = createEffect(() => this.actions$
      .pipe(
        ofType(loginSuccessAction),
        tap(() => this.router.navigateByUrl('/conduit'))
      ),
    {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService,
    private persistenceService: PersistenceStorageService,
  ) {
  }
}

