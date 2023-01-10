import { TestBed } from '@angular/core/testing';

import { NavAuthGuardService } from './nav-auth-guard.service';

describe('NavAuthGuardService', () => {
  let service: NavAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
