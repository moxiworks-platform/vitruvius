/* eslint-disable no-unused-expressions */
import {
  html,
  fixture,
  expect,
} from '../../node_modules/@open-wc/testing';

import '../../src/components/input.js';

describe('Input/Textarea Tests', () => {

  it('should create focus when label is clicked', async () => {
    const el = await fixture('<vp-input type="tel" label="Icon Left With label" name="foo"></vp-input>');
    const elem = el.querySelector('label');
    elem.click();
    expect(elem.classList.contains('active')).to.equal(true);
  });

  it('should clear field when clicked', async () => {
    const el = await fixture('<vp-input type="tel" label="Input with clear button" name="foo" iconclose="true" pattern="[0-9]*" value="bar"></vp-input>');
    const input = document.querySelector('input');
    const icon = el.querySelector('i');
    setTimeout(function() {
      icon.click();
      expect(input.value).to.equal('');
    }, 250)
  });

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

  it('should have a clear button with padding', async () => {
    const el = await fixture('<vp-input type="tel" label="Input with clear button" name="foo" iconclose="true" pattern="[0-9]*"></vp-input>');
    const input = el.querySelector('input');
    input.value = 'Testing';
    let e = document.createEvent('HTMLEvents');
    e.initEvent('keyup', false, true);
    input.dispatchEvent(e);
    expect(input.getAttribute('style').indexOf('padding-right: 30px')).to.be.above(-1);
  });

  it('should have a different text color', async () => {
    const el = await fixture('<vp-input type="tel" label="Input with clear button" name="foo" iconclose="true" pattern="[0-9]*" color="red"></vp-input>');
    const input = el.querySelector('input');
    input.value = 'Testing';
    let e = document.createEvent('HTMLEvents');
    e.initEvent('keyup', false, true);
    input.dispatchEvent(e);
    expect(input.getAttribute('style').indexOf('color: red')).to.be.above(-1);
  });

  it('should have a blue background color', async () => {
    const el = await fixture('<vp-input type="tel" label="Input with clear button" name="foo" iconclose="true" pattern="[0-9]*" background="blue"></vp-input>');
    const elem = document.querySelector('label');
    expect(elem.getAttribute('style').indexOf('background: blue')).to.be.above(-1);
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
    setTimeout(function() {
      expect(input.value).to.include('-');
    }, 250)
  });

  it('should have an inactive placeholder', async () => {
    const el = await fixture('<vp-input type="tel" label="Icon Left With label" name="foo"></vp-input>');
    const elem = el.querySelector('label');
    requestAnimationFrame(function() {
      expect(elem.classList.indexOf('active')).to.equal(-1);
    })
  });

  it('should have an active placeholder', async () => {
    const el = await fixture('<vp-input type="tel" label="Icon Left With label" name="foo" value="bar"></vp-input>');
    const elem = el.querySelector('label');
    requestAnimationFrame(function() {
      expect(elem.classList.indexOf('active')).to.above(-1);
    })
  });



});
