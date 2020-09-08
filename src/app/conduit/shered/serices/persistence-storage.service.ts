import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistenceStorageService {

  get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.log('Error getting to local storage', e);
    }

    return null;
  }

  set(key: string, value: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.log('Error saving to local storage', e);
    }
  }
}
