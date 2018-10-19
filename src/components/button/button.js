export const Button = {
  title: hybrids.property('foo'),
  render: ({ title }) => hybrids.html`
    <button class="btn btn-flat"><i class="icon-location-pin-filled"></i> ${title}</button>
  `,
};

hybrids.define('vp-button', Button);