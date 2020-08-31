import {Component, OnInit} from '@angular/core';
import {MessangerService} from '../../services/messanger/messanger.service';

@Component({
  selector: 'app-messages',
  templateUrl: './hero-logger.component.html',
  styleUrls: ['./hero-logger.component.css']
})
export class HeroLoggerComponent implements OnInit {

  constructor(public messenger: MessangerService) {
  }

  ngOnInit(): void {
  }

}
