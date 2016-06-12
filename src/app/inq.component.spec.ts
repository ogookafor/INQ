import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { InqAppComponent } from '../app/inq.component';

beforeEachProviders(() => [InqAppComponent]);

describe('App: Inq', () => {
  it('should create the app',
      inject([InqAppComponent], (app: InqAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'inq works!\'',
      inject([InqAppComponent], (app: InqAppComponent) => {
    expect(app.title).toEqual('inq works!');
  }));
});
