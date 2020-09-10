import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {Router} from '@angular/router';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';

import {registerAction, registerFailureAction, registerSuccessAction} from '../actions/register.action';

import {AuthService} from '../../services/auth.service';
import {CurrentUserInterface} from '../../../shered/types/currentUser.interface';
import {HttpErrorResponse} from '@angular/common/http';
import {PersistenceStorageService} from '../../../shered/serices/persistence-storage.service';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() => this.actions$
    .pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return this.authService.register(request)
          .pipe(
            map((currentUser: CurrentUserInterface) => {
              this.persistenceService.set('accessToken', currentUser.token);

              return registerSuccessAction({currentUser});
            }),
            catchError((errorResponse: HttpErrorResponse) => {
              return of(registerFailureAction({errors: errorResponse.error.errors}));
            })
          );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(() => this.actions$
      .pipe(
        ofType(registerSuccessAction),
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

