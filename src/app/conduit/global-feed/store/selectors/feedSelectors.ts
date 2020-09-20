import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppStateInterface} from '../../../shered/types/appState.interface';
import {FeedStateInterface} from '../../types/feedState.interface';
import {FeedInterface} from '../../types/feed.interface';

const feedStateSelector = createFeatureSelector<AppStateInterface, FeedStateInterface>('feed');

export const getFeeds = createSelector(
  feedStateSelector,
  (state: FeedStateInterface): Array<FeedInterface> => state?.data?.articles
);

export const getFeedNumber = createSelector(
  feedStateSelector,
  (state: FeedStateInterface): number => Number(state?.data?.articlesCount || 0)
);

export const isLoading = createSelector(
  feedStateSelector,
  (state: FeedStateInterface): boolean => state.isLoading
);

