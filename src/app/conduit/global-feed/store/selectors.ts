import {createFeatureSelector, createSelector,} from '@ngrx/store';
import {AppStateInterface} from '../../shered/types/appState.interface';
import {FeedStateInterface} from '../types/feedState.interface';
import {FeedInterface} from '../types/feed.interface';

const feedStateSelector = createFeatureSelector<AppStateInterface, FeedStateInterface>('feed');

export const getFeeds = createSelector(
  feedStateSelector,
  (state: FeedStateInterface): Array<FeedInterface> => {

    return state.data.articles;
  }
);


