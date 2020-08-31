import {Component} from '@angular/core';
import {MissionService} from '../../services/mission/mission.service';

@Component({
  selector: 'app-mission-control',
  templateUrl: './mission-control.component.html',
  styleUrls: ['./mission-control.component.css'],
  providers: [
    MissionService
  ]
})
export class MissionControlComponent {
  astronauts = ['First astronauts', 'Misha Djak', 'Last astronauts'];
  history: string[] = [];
  missions: string[] = [
    'Fly to the moon!',
    'Fly to mars!',
    'Fly to Vegas!'
  ];
  nextMission = 0;

  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
      });
  }

  announce() {
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) {
      this.nextMission = 0;
    }
  }

}
