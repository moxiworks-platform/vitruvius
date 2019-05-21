/* eslint-disable no-unused-expressions */
import {
  html,
  fixture,
  expect,
} from '../../node_modules/@open-wc/testing';

import '../../src/components/button.js';

describe('Property Check', () => {
  it('is false by default', async () => {
    const el = await fixture('<vp-button></vp-button>');
    expect(el).to.have.property('tea');
  });
});