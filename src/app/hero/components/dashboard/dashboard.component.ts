import {Component, OnInit} from '@angular/core';
import {HeroesStorageService} from '../../services/heroes-storage/heroes-storage.service';
import {Hero} from '../heroes/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Array<Hero>;

  constructor(private heroesService: HeroesStorageService) {
  }

  ngOnInit(): void {
    this.heroesService.get()
      .subscribe(
        heroes => this.heroes = heroes.slice(0, 5)
      );
  }
}
