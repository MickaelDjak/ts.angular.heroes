import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-votetaker',
  templateUrl: './votetaker.component.html',
  styleUrls: ['./votetaker.component.css']
})
export class VotetakerComponent {
  @Input() name: string;
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;

  onVote(vote: boolean): void {
    this.voted.emit(vote);
    this.didVote = true;
  }
}
