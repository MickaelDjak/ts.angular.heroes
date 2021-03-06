import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {CurrentUserInterface} from '../../types/currentUser.interface';
import {currentUserSelector, isLoggedInSelector} from '../../../auth/store/selectors';
import {getCurrentUserAction} from '../../../auth/store/actions/getCurrentUser.action';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
})
export class TopBarComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  currentUser$: Observable<CurrentUserInterface | null>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.initializeValue();
  }

  initializeValue(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
    this.store.dispatch(getCurrentUserAction());
  }

}
