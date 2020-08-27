import {Component, OnInit} from '@angular/core';
import {MessangerService} from '../../services/messanger/messanger.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messenger: MessangerService) {
  }

  ngOnInit(): void {
  }

}
