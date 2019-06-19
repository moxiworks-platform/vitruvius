/* eslint-disable no-unused-expressions */
import {
  html,
  fixture,
  expect,
} from '../../node_modules/@open-wc/testing';

import '../../src/components/input.js';

describe('Input/Textarea Tests', () => {

  it('should be type input', async () => {
    const el = await fixture('<vp-input type="text" label="Plain Input Text Field" name="foo" id="bar"></vp-input>');
    const input = el.querySelector('input');
    expect(input.getAttribute('type')).to.equal('text');
  });

  it('should be type textarea', async () => {
    const el = await fixture('<vp-input type="textarea" label="Text Area Example" name="foo" id="plop" rows="20"></vp-input>');
    const textarea = el.querySelector('textarea');
    expect(textarea).to.exist;
  });

  it('should have a label', async () => {
    const el = await fixture('<vp-input type="text" label="Plain Input Text Field" name="foo" id="bar"></vp-input>');
    const label = el.querySelector('label');
    expect(label).to.exist;
  });

  it('should have a clear button', async () => {
    const el = await fixture('<vp-input type="tel" label="Input with clear button" name="foo" iconclose="true" pattern="[0-9]*"></vp-input>');
    const input = el.querySelector('input');
    let e = document.createEvent('HTMLEvents');
    e.initEvent('keyup', false, true);
    input.dispatchEvent(e);
    const closeIcon = el.querySelector('.v-icon-close-circle');
    expect(closeIcon.getAttribute('style')).to.equal('display: none;');
  });

  it('should NOT have a clear button', async () => {
    const el = await fixture('<vp-input type="tel" label="Input with clear button" name="foo"></vp-input>');
    const closeIcon = el.querySelector('.v-icon-close-circle');
    expect(closeIcon.style.display).to.equal('');
  });

  it('should have a clear button with display block', async () => {
    const el = await fixture('<vp-input type="tel" label="Input with clear button" name="foo" iconclose="true" pattern="[0-9]*"></vp-input>');
    const input = el.querySelector('input');
    input.value = 'Testing';
    let e = document.createEvent('HTMLEvents');
    e.initEvent('keyup', false, true);
    input.dispatchEvent(e);
    const closeIcon = el.querySelector('.v-icon-close-circle');
    expect(closeIcon.getAttribute('style')).to.equal('display: block;');
  });

  it('placeholder should have active class', async () => {
    const el = await fixture('<vp-input type="text" label="Plain Input Text Field" name="foo" id="bar" value="baz"></vp-input>');
    const input = el.querySelector('input');
    input.focus();
    const label = el.querySelector('label');
    expect(label.getAttribute('class')).to.equal('active');
  });

  it('placeholder should have a left icon', async () => {
    const el = await fixture('<vp-input type="tel" label="Icon Left With label" name="foo" iconleft="v-icon-chat"></vp-input>');
    const input = el.querySelector('input');
    const icon = el.querySelector('i');
    expect(icon.getAttribute('data-icontype')).to.equal('left');
  });

  it('placeholder should format a phone number', async () => {
    const el = await fixture('<vp-input type="tel" format="true" label="Phone Number Formatting" name="foo" value="5555555555"></vp-input>');
    const input = el.querySelector('input');
    let e = document.createEvent('HTMLEvents');
    e.initEvent('keyup', false, true);
    input.dispatchEvent(e);
    expect(input.value).to.include('-');
  });

});
