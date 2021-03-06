import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, retry, switchMap, catchError } from 'rxjs/operators';
import { LIST_REQUEST, DETAILS_REQUEST } from '../actions/actionTypes';
import { listSuccess, listFailure, detailsSuccess, detailsFailure } from '../actions/actionCreators';
import { of } from 'rxjs';

export const listRequestEpic = action$ => action$.pipe(
  ofType(LIST_REQUEST), 
  switchMap(() => ajax.getJSON(process.env.REACT_APP_SERVICES_URL).pipe(
    retry(3),
    map(o => listSuccess(o)),
    catchError(e => of(listFailure(e.xhr.statusText ? e.xhr.statusText : 'No Connecting'))),
  )),
)

export const detailsRequestEpic = action$ => action$.pipe(
  ofType(DETAILS_REQUEST),
  switchMap(o => ajax.getJSON(`${process.env.REACT_APP_SERVICES_URL}/${o.payload.id}`).pipe(
    retry(3),
    map(o => detailsSuccess(o)),
    catchError(e => of(detailsFailure(e.xhr.statusText ? e.xhr.statusText : 'No Connecting'))),
  )),
);
