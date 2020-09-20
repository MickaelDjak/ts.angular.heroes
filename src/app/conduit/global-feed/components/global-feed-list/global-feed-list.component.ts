import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './global-feed-list.component.html',
})
export class GlobalFeedListComponent implements OnInit {
  targetUrl = '';
  tagName = '';

  constructor(private activatedRoute: ActivatedRoute) {

  }

  get url(): string {
    return environment.articleUrl + this.targetUrl;
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.targetUrl = data.url;
    });

    this.activatedRoute.queryParamMap.subscribe((map) => {
      if (map.has('tag')) {
        this.tagName = map.get('tag');
      }
    });
  }
}
