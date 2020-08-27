import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessangerService {
  messages: Array<string> = [];

  add(message) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
