import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';

import {getTagAction, getTagSuccessAction, getTagFailureAction} from '../actions/getTagAction';

import {HttpErrorResponse} from '@angular/common/http';
import {TagFetcherService} from '../../services/tag-fetcher.service';
import {TagTypeInterface} from '../../../shered/types/tagType.interface';

@Injectable()
export class GetTagEffect {
  register$ = createEffect(() => this.actions$
    .pipe(
      ofType(getTagAction),
      switchMap(() => {
        return this.tagService.getList()
          .pipe(
            map((data: Array<TagTypeInterface>) => {
              return getTagSuccessAction({data});
            }),
            catchError((errorResponse: HttpErrorResponse) => {
              return of(getTagFailureAction());
            })
          );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private tagService: TagFetcherService,
  ) {
  }
}

