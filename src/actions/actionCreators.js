import {
  LIST_REQUEST,
  LIST_FAILURE,
  LIST_SUCCESS,
  DETAILS_REQUEST,
  DETAILS_FAILURE,
  DETAILS_SUCCESS,
} from './actionTypes';

export const listRequest = () => ({
  type: LIST_REQUEST,
});

export const listFailure = error => ({
  type: LIST_FAILURE,
  payload: { error },
});

export const listSuccess = items => ({
  type: LIST_SUCCESS,
  payload: { items },
});

export const detailsRequest = id => ({
  type: DETAILS_REQUEST,
  payload: { id },
});

export const detailsFailure = error => ({
  type: DETAILS_FAILURE,
  payload: { error },
});

export const detailsSuccess = item => ({
  type: DETAILS_SUCCESS,
  payload: { item },
});
