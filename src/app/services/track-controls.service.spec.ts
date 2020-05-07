import { TestBed } from '@angular/core/testing';

import { TrackControlsService } from './track-controls.service';

describe('TrackControlsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrackControlsService = TestBed.get(TrackControlsService);
    expect(service).toBeTruthy();
  });
});
