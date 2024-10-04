import { TestBed } from '@angular/core/testing';

import { FormateurserviceService } from './formateurservice.service';

describe('FormateurserviceService', () => {
  let service: FormateurserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormateurserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
