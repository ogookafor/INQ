import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {Enquirer} from './enquirer.model';

describe('Enquirer', () => {
  it('should create an instance', () => {
    expect(new Enquirer()).toBeTruthy();
  });
});
