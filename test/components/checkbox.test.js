/* eslint-disable no-unused-expressions */
import {
  html,
  fixture,
  expect,
} from '../../node_modules/@open-wc/testing';

import '../../src/components/checkbox.js';

describe('Checkbox Tests', () => {

  it('should have a value of "foo"', async () => {
    const el = await fixture('<vp-checkbox label="Basic Checkbox" name="check-box-name" value="foo" checked="true"></vp-checkbox>');
    const input = el.querySelector('input');
    expect(input.getAttribute('value')).to.equal('foo');
  });

  it('should have a destructive class', async () => {
    const el = await fixture('<vp-checkbox label="Destrictive Checkbox" type="destructive" value="bar" name="check-box-name"></vp-checkbox>');
    const label = el.querySelector('label');
    expect(label.getAttribute('class').indexOf('destructive')).to.be.above(-1);
  });

  it('should have a disabled class', async () => {
    const el = await fixture('<vp-checkbox label="Disabled Checkbox" type="disabled" value="bar" name="check-box-name"></vp-checkbox>');
    const label = el.querySelector('label');
    expect(label.getAttribute('class').indexOf('disabled')).to.be.above(-1);
  });

});