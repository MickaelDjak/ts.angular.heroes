import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent {
  agreed: number = 0;
  disagreed: number = 0;
  voters: Array<string> = [
    'Mis', 'Ola', 'Alex'
  ];

  onVote(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
}
