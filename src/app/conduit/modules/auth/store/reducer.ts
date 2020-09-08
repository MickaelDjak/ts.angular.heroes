import {AuthStateInterface} from '../types/authState.interface';
import {Action, createReducer, on} from '@ngrx/store';
import {registerAction, registerFailureAction, registerSuccessAction} from './actions/register.action';
import {loginAction, loginFailureActions, loginSuccessActions} from './actions/login.action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  validationErrors: null
};

export function reducers(state: AuthStateInterface, action: Action) {

  const authReducer = createReducer(
    initialState,
    on(
      registerAction,
      (state: AuthStateInterface): AuthStateInterface => ({
        ...state,
        isSubmitting: true,
        validationErrors: null
      })),
    on(
      registerSuccessAction,
      (state, action) => ({
        ...state,
        currentUser: action.currentUser,
        isSubmitting: false,
        validationErrors: null
      })),
    on(
      registerFailureAction,
      (state, action) => ({
        ...state,
        isSubmitting: false,
        currentUser: null,
        validationErrors: action.errors
      })),
    on(
      loginAction,
      (state) => ({
        ...state,
        currentUser: null,
        isSubmitting: true,
        validationErrors: null
      }),
    ),
    on(
      loginSuccessActions,
      (state, action) => ({
        ...state,
        isSubmitting: false,
        currentUser: action.currentUser,
        validationErrors: null
      })
    ),
    on(
      loginFailureActions,
      (state, action) => ({
        ...state,
        isSubmitting: false,
        currentUser: null,
        validationErrors: action.errors
      })
    )
  );
  return authReducer(state, action);
}
