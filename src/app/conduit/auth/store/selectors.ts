import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthStateInterface} from '../types/authState.interface';
import {AppStateInterface} from '../../shered/types/appState.interface';
import {ErrorReportInterface} from '../../shered/types/errorReport.interface';
import {CurrentUserInterface} from '../../shered/types/currentUser.interface';

export const authFeatureSelector = createFeatureSelector<AppStateInterface, AuthStateInterface>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface): boolean => authState.isSubmitting
);

export const validationMessageSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface): ErrorReportInterface => authState.validationErrors
);

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface): boolean => !!authState.currentUser
);

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface): CurrentUserInterface => authState.currentUser
);
