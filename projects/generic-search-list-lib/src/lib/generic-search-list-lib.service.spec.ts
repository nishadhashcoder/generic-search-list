import { TestBed } from '@angular/core/testing';

import { GenericSearchListLibService } from './generic-search-list-lib.service';

describe('GenericSearchListLibService', () => {
  let service: GenericSearchListLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericSearchListLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
