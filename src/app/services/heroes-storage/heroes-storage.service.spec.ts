import { TestBed } from '@angular/core/testing';

import { HeroesStorageService } from './heroes-storage.service';

describe('HeroesStorageService', () => {
  let service: HeroesStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroesStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
