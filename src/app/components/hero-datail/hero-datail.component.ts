import {Component, OnInit, Input} from '@angular/core';
import {Hero} from '../heroes/hero';

@Component({
  selector: 'app-hero-datail',
  templateUrl: './hero-datail.component.html',
  styleUrls: ['./hero-datail.component.css']
})
export class HeroDatailComponent implements OnInit {

  @Input() hero: Hero;

  constructor() {
  }

  ngOnInit(): void {
  }

}
