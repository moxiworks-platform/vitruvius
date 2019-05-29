/* eslint-disable no-unused-expressions */
import {
  html,
  fixture,
  expect,
} from '../../node_modules/@open-wc/testing';

import '../../src/components/button.js';

describe('Button / Anchor Tag Tests', () => {
  it('is button tag', async () => {
    const el = await fixture('<vp-button>Im a Button</vp-button>');
    expect(document.querySelector('button.btn-flat')).to.exist;
  });
  it('is anchor tag', async () => {
    const el = await fixture('<vp-button href="foo">Im a anchor tag</vp-button>');
    expect(document.querySelector('a.btn-flat')).to.exist;
  });
  it('has primary class name', async () => {
    const el = await fixture('<vp-button type="primary">Im a anchor tag</vp-button>');
    expect(document.querySelector('button.btn-primary')).to.exist;
  });
  it('has an href property', async () => {
    const el = await fixture('<vp-button type="primary" href="http://moxiworks.com">Im a anchor tag</vp-button>');
    expect(document.querySelector('a.btn-primary')).to.have.property('href');
  });
  it('returns title text', async () => {
    const el = await fixture('<vp-button type="primary" title="Im a Title!"></vp-button>');
    expect(document.querySelector('button.btn-primary')).property('title').to.exist;
  });
  it('has an icon', async () => {
    const el = await fixture('<vp-button type="primary,dense" icon="v-icon-location-pin-filled">Primary</vp-button>');
    expect(el.querySelector('i')).to.exist;
  });
});