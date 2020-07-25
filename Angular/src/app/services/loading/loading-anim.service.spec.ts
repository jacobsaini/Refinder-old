import { TestBed } from '@angular/core/testing';

import { LoadingAnimService } from './loading-anim.service';

describe('LoadingAnimService', () => {
  let service: LoadingAnimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingAnimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
