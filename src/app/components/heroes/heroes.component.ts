import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroesStorageService} from '../../services/heroes-storage/heroes-storage.service';
import {MessangerService} from '../../services/messanger/messanger.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Array<Hero>;
  selectedHero: Hero;

  constructor(private storage: HeroesStorageService, private messenger: MessangerService) {
  }

  ngOnInit(): void {
    this.storage.get().subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messenger.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
