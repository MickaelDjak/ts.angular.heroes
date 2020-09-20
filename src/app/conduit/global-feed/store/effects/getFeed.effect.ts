import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';

import {getFeedAction, getFeedSuccessAction, getFeedFailureAction} from '../actions/getFeedAction';

import {HttpErrorResponse} from '@angular/common/http';
import {FeedServiceService} from '../../services/feed-service.service';
import {FeedListResponseInterface} from '../../types/feedListResponse.interface';

@Injectable()
export class GetFeedEffect {
  register$ = createEffect(() => this.actions$
    .pipe(
      ofType(getFeedAction),
      switchMap(({url, tag = '', page = 1}) => {
        return this.feedService.getFeed(url, tag, page)
          .pipe(
            map((feed: FeedListResponseInterface) => {
              return getFeedSuccessAction({feed});
            }),
            catchError((errorResponse: HttpErrorResponse) => {
              return of(getFeedFailureAction());
            })
          );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private feedService: FeedServiceService,
  ) {
  }
}

