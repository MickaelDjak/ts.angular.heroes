import {Component, OnDestroy, OnInit} from '@angular/core';
import {Hero} from './hero';
import {StorageService} from '../../services/storage/storage.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './hero-layout.component.html',
  styleUrls: ['./hero-layout.component.css']
})
export class HeroLayoutComponent {

  heroListData$: Observable<Array<Hero>>;

  constructor(private storage: StorageService) {
    this.heroListData$ = storage.heroListData$;
  }

  delete(hero: Hero): void {
    this.storage.delete(hero);
  }
}
