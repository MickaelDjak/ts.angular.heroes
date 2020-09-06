import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthStateInterface} from '../types/authState.interface';
import {AppStateInterface} from '../../../shered/types/appState.interface';

export const authFeatureSelector = createFeatureSelector<AppStateInterface, AuthStateInterface>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface): boolean => authState.isSubmitting
);
