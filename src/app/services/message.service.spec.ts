import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({schemas: [ NO_ERRORS_SCHEMA ]}));

  it('should be created', () => {
    const service = TestBed.inject(MessageService);
    expect(service).toBeTruthy();
  });
});
