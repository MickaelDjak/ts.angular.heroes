import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {getTagAction} from './global-feed/store/actions/getTagAction';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {
  constructor(private storage: Store) {
  }

  ngOnInit(): void {
    this.initializeData();
  }

  initializeData(): void {
    this.storage.dispatch(getTagAction());
  }
}
