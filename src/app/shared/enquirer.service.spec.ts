import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { EnquirerService } from './enquirer.service';

describe('Enquirer Service', () => {
  beforeEachProviders(() => [EnquirerService]);

  it('should ...',
      inject([EnquirerService], (service: EnquirerService) => {
    expect(service).toBeTruthy();
  }));
});
