import { TestBed } from '@angular/core/testing';

import { ArtIframeLibService } from './art-iframe-lib.service';

describe('ArtIframeLibService', () => {
  let service: ArtIframeLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtIframeLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
