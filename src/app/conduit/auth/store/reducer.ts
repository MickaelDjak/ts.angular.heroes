import {AuthStateInterface} from '../types/authState.interface';
import {Action, createReducer, on} from '@ngrx/store';
import {registerAction, registerFailureAction, registerSuccessAction} from './actions/register.action';
import {loginAction, loginFailureAction, loginSuccessAction} from './actions/login.action';
import {getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction} from './actions/getCurrentUser.action';

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
      loginSuccessAction,
      (state, action) => ({
        ...state,
        isSubmitting: false,
        currentUser: action.currentUser,
        validationErrors: null
      })
    ),
    on(
      loginFailureAction,
      (state, action) => ({
        ...state,
        isSubmitting: false,
        currentUser: null,
        validationErrors: action.errors
      })
    ),


    on(
      getCurrentUserAction,
      (state) => ({
        ...state,
        currentUser: null
      }),
    ),
    on(
      getCurrentUserSuccessAction,
      (state, action) => ({
        ...state,
        currentUser: action.currentUser,
      })
    ),
    on(
      getCurrentUserFailureAction,
      (state) => ({
        ...state,
        isSubmitting: false,
        currentUser: null,
      })
    )
  );
  return authReducer(state, action);
}
