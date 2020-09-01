import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DangerDetectorService {

  THRESHOLD = 0.7;

  isDanger(used: number, total: number): boolean {
    return used / total > this.THRESHOLD;
  }
}
