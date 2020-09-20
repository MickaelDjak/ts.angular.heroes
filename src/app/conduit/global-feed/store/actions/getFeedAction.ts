import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {FeedListResponseInterface} from '../../types/feedListResponse.interface';

export const getFeedAction = createAction(
  ActionTypes.GET_FEED,
  props<{ url: string, tag?: string, page?: number }>()
);

export const getFeedSuccessAction = createAction(
  ActionTypes.GET_FEED_SUCCESS,
  props<{ feed: FeedListResponseInterface }>()
);

export const getFeedFailureAction = createAction(
  ActionTypes.GET_FEED_FAILURE
);
