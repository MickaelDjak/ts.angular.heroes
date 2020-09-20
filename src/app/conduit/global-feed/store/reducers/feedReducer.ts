import {FeedStateInterface} from '../../types/feedState.interface';
import {Action, createReducer, on} from '@ngrx/store';
import {getFeedAction, getFeedFailureAction, getFeedSuccessAction} from '../actions/getFeedAction';

const initialState: FeedStateInterface = {
  isLoading: false,
  errors: [],
  data: {
    articles: [],
    articlesCount: 0
  }
};

export function reducers(state: FeedStateInterface, action: Action) {
  const feedReducer = createReducer(
    initialState,
    on(getFeedAction, (state): FeedStateInterface => ({
      ...state,
      data: null,
      isLoading: true
    })),
    on(getFeedSuccessAction, (state, action) => ({
      ...state,
      data: action.feed,
      isLoading: false
    })),
    on(getFeedFailureAction, (state: FeedStateInterface): FeedStateInterface => ({
      ...state,
      isLoading: false
    })),
  );

  return feedReducer(state, action);
}
