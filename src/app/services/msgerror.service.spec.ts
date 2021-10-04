import { TestBed } from '@angular/core/testing';

import { MsgerrorService } from './msgerror.service';

describe('MsgerrorService', () => {
  let service: MsgerrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsgerrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
