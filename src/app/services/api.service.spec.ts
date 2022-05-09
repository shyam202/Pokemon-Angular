import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get limit', () => {
    var offset = 0;
    var limit = 4;
    var url =
      'https://pokeapi.co/api/v2/pokemon' +
      '?limit=' +
      limit +
      '&offset=' +
      offset;
      expect(url).toEqual(url + '?limit=' + limit + '&offset=' + (offset - limit))
  });
})


