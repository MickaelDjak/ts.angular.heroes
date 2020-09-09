import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {CurrentUserInterface} from '../../shered/types/currentUser.interface';
import {currentUserSelector, isLoggedInSelector} from '../../modules/auth/store/selectors';
import {tap} from 'rxjs/operators';

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
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector)).pipe(tap(e => console.log(e, 'her')));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }

}
