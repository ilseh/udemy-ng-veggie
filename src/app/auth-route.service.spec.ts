import { TestBed, inject } from '@angular/core/testing';

import { AuthRouteService } from './auth-route.service';

describe('AuthRouteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthRouteService]
    });
  });

  it('should be created', inject([AuthRouteService], (service: AuthRouteService) => {
    expect(service).toBeTruthy();
  }));
});
