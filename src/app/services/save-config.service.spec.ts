import { TestBed } from '@angular/core/testing';

import { SaveConfigService } from './save-config.service';

describe('SaveConfigService', () => {
  let service: SaveConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
