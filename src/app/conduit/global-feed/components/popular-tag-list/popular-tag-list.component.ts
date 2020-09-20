import {Component, OnChanges, OnInit} from '@angular/core';
import {TagTypeInterface} from '../../../shered/types/tagType.interface';
import {getTagAction} from '../../store/actions/getTagAction';
import {select, Store} from '@ngrx/store';
import {getTagList, isLoaded, isLoading} from '../../store/selectors/tagSelectors';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'cn-sr-popular-tag-list',
  templateUrl: './popular-tag-list.component.html',
})
export class PopularTagListComponent implements OnInit {

  isLoading$: Observable<boolean>;
  tags$: Observable<Array<TagTypeInterface>>;

  constructor(private storage: Store) {
  }

  ngOnInit(): void {
    this.initializeValue();
  }

  initializeValue(): void {
    this.isLoading$ = this.storage.pipe(select(isLoading));
    this.tags$ = this.storage.pipe(select(getTagList));
  }
}
