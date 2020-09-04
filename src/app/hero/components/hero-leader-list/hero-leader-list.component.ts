import {Component} from '@angular/core';
import {Hero} from '../hero-layout/hero';
import {StorageService} from '../../services/storage/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './hero-leader-list.component.html',
  styleUrls: ['./hero-leader-list.component.css']
})
export class HeroLeaderListComponent {

  heroes: Array<Hero>;

  constructor(private heroesService: StorageService) {
    this.heroesService.heroListData$.subscribe(heroes => this.heroes = heroes.slice(0, 5));
  }
}
