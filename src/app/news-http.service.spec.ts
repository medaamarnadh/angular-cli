import { TestBed } from '@angular/core/testing';

import { NewsHttpService } from './news-http.service';

describe('NewsHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsHttpService = TestBed.get(NewsHttpService);
    expect(service).toBeTruthy();
  });
});
