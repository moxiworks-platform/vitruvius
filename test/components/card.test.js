/* eslint-disable no-unused-expressions */
import {
  html,
  fixture,
  expect,
} from '../../node_modules/@open-wc/testing';

import '../../src/components/card.js';

describe('Card / Surface Tests', () => {
  it('Should have a type', async () => {
    const el = await fixture('<vp-card type="level-1">Im a Card</vp-card>');
    expect(document.querySelector('.level-1')).to.exist;
  });
  it('Should have image header', async () => {
    const el = await fixture('<vp-card type="level-1" imageheadertext="<h3>Foo</h3>" headerimage="https://moxi1.ssl.hwcdn.net/img-pr-000955/psm/e1362c566a86d15cac4f8e93d55b25db9a20dde3/0_3_small.jpg">Im a Card</vp-card>');
    const rootElem = document.querySelector('.v-card');
    expect(rootElem.querySelector('h3').innerHTML).to.equal('Foo');
  });
  it('Should have image height', async () => {
    const el = await fixture('<vp-card type="level-1" headerimageheight="500px" headerimage="https://moxi1.ssl.hwcdn.net/img-pr-000955/psm/e1362c566a86d15cac4f8e93d55b25db9a20dde3/0_3_small.jpg">Im a Card</vp-card>');
    const rootElem = document.querySelector('.v-card');
    expect(rootElem.querySelector('.v-card-header-image').getAttribute('style').indexOf('500px')).to.be.above(-1);
  });
  it('Should have a badge', async () => {
    const el = await fixture(
      `<vp-card type="level-1"
        imageheadertext="<h3>Foo</h3>"
        headerimage="https://moxi1.ssl.hwcdn.net/img-pr-000955/psm/e1362c566a86d15cac4f8e93d55b25db9a20dde3/0_3_small.jpg"
        badge='[{"label": "new", "backgroundClass": "bg-moxi-green-dark", "color": "white"}]'>
          Im a Card
      </vp-card>`
    );
    const rootElem = document.querySelector('.v-card');
    expect(rootElem.querySelector('.badge').innerHTML).to.equal('new');
  });
  it('Should have a sub-section', async () => {
    const el = await fixture(
      `<vp-card type="level-1"
        imageheadertext="<h3>Foo</h3>"
        headerimage="https://moxi1.ssl.hwcdn.net/img-pr-000955/psm/e1362c566a86d15cac4f8e93d55b25db9a20dde3/0_3_small.jpg"
        subsection="Sub section text">
          Im a Card
      </vp-card>`
    );
    const rootElem = document.querySelector('.v-card');
    expect(rootElem.querySelector('.v-card-subsection')).to.exist;
  });
  it('Should have a level-1 shadow if no type is passed.', async () => {
    const el = await fixture('<vp-card>Im a Card</vp-card>');
    expect(document.querySelector('.level-1')).to.exist;
  });
});
