import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {TagTypeInterface} from '../../../shered/types/tagType.interface';

export const getTagAction = createAction(
  ActionTypes.GET_TAG
);

export const getTagSuccessAction = createAction(
  ActionTypes.GET_TAG_SUCCESS,
  props<{ data: Array<TagTypeInterface> }>()
);

export const getTagFailureAction = createAction(
  ActionTypes.GET_TAG_FAILURE
);
