import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

import {registerAction, registerFailureAction, registerSuccessAction} from '../actions/register.action';
import {AuthService} from '../../services/auth.service';
import {CurrentUserInterface} from '../../../../shered/types/currentUser.interface';
import {ErrorReportInterface} from '../../../../shered/types/errorReport.interface';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() => this.actions$
    .pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return this.authService.register(request)
          .pipe(
            map((currentUser: CurrentUserInterface) => {
              return registerSuccessAction({currentUser});
            }),
            catchError((errorResponse: HttpErrorResponse) => {
              return of(registerFailureAction({errors: errorResponse.error.errors}));
            })
          );
      })
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {
  }
}

