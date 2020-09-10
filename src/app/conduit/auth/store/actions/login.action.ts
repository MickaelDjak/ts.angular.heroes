import {createAction, props} from '@ngrx/store';

import {ActionTypes} from '../actionTypes';
import {CurrentUserInterface} from '../../../shered/types/currentUser.interface';
import {ErrorReportInterface} from '../../../shered/types/errorReport.interface';
import {LoginRequestInterface} from '../../types/loginRequest.interface';

export const loginAction = createAction(
    ActionTypes.LOGIN,
    props<{ request: LoginRequestInterface }>()
);

export const loginSuccessAction = createAction(
    ActionTypes.LOGIN_SUCCESS,
    props<{ currentUser: CurrentUserInterface }>()
);

export const loginFailureAction = createAction(
    ActionTypes.LOGIN_FAILURE,
    props<{ errors: ErrorReportInterface }>()
);

