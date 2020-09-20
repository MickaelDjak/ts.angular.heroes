import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppStateInterface} from '../../../shered/types/appState.interface';
import {TagStateInterface} from '../../types/tagState.interface';
import {TagTypeInterface} from '../../../shered/types/tagType.interface';

const tagStateSelector = createFeatureSelector<AppStateInterface, TagStateInterface>('tag');

export const getTagList = createSelector(
  tagStateSelector,
  (state: TagStateInterface): Array<TagTypeInterface> => state?.data
);

export const isLoading = createSelector(
  tagStateSelector,
  (state: TagStateInterface): boolean => state.isLoading
);

export const isLoaded = createSelector(
  tagStateSelector,
  (state: TagStateInterface): boolean => state.isLoaded
);
