import {Action, createReducer, on} from '@ngrx/store';
import {getTagAction, getTagFailureAction, getTagSuccessAction} from '../actions/getTagAction';
import {TagStateInterface} from '../../types/tagState.interface';

const initialState: TagStateInterface = {
  isLoading: false,
  isLoaded: false,
  errors: [],
  data: []
};

export function reducers(state: TagStateInterface, action: Action) {
  const tagReducer = createReducer(
    initialState,
    on(getTagAction, (state): TagStateInterface => ({
      ...state,
      data: null,
      isLoading: true,
    })),
    on(getTagSuccessAction, (state, action) => ({
      ...state,
      data: action.data,
      isLoading: false,
      isLoaded: true
    })),
    on(getTagFailureAction, (state: TagStateInterface): TagStateInterface => ({
      ...state,
      isLoading: false
    })),
  );

  return tagReducer(state, action);
}
