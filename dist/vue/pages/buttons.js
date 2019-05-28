const Buttons = { 
  template: `
    <div class="inner-container">
      <h2>Buttons</h2>
      <h3>Basic Button Styles</h3>
      <div class="my-10">
        <vp-button type="flat">Flat</vp-button>
        <vp-button type="default">Default</vp-button>
        <vp-button type="primary">Primary</vp-button>
        <vp-button type="destructive">Destructive</vp-button>
      </div>
      <h3>Buttons with Icons</h3>
      <div class="my-10">
        <vp-button type="flat" icon="v-icon-location-pin-filled">Flat</vp-button>
        <vp-button type="default" icon="v-icon-location-pin-filled">Default</vp-button>
        <vp-button type="primary" icon="v-icon-location-pin-filled">Primary</vp-button>
        <vp-button type="destructive" icon="v-icon-location-pin-filled">Destructive</vp-button>
      </div>

      <h3>Dense Button Varient (smaller)</h3>
      <div class="my-10">
        <vp-button type="flat,dense">flat</vp-button>
        <vp-button type="default,dense">Default</vp-button>
        <vp-button type="primary,dense">Primary</vp-button>
        <vp-button type="destructive,dense">Destructive</vp-button>
      </div>

      <h3>Buttons with Icons Dense (smaller)</h3>
      <div class="my-10">
        <vp-button type="flat,dense" icon="v-icon-location-pin-filled">flat</vp-button>
        <vp-button type="default,dense" icon="v-icon-location-pin-filled">Default</vp-button>
        <vp-button type="primary,dense" icon="v-icon-location-pin-filled">Primary</vp-button>
        <vp-button type="destructive,dense" icon="v-icon-location-pin-filled">Destructive</vp-button>
      </div>

      <h3>Properties</h3>

      <div class="v-flex">
        <div class="v-flex-item w-1/5 bg-cn-20">
          title
        </div>
        <div class="v-flex-item w-4/5 bg-cn-10">
          Optional. Replacement for the inner html of the tag.
        </div>
      </div>

      <div class="v-flex">
        <div class="v-flex-item w-1/5 bg-cn-20">
          type
        </div>
        <div class="v-flex-item w-4/5 bg-cn-10">
          Comma delimited list of applicable CSS styles. (primary,dense).
        </div>
      </div>

      <div class="v-flex">
        <div class="v-flex-item w-1/5 bg-cn-20">
          icon
        </div>
        <div class="v-flex-item w-4/5 bg-cn-10">
          Optional. Accepts a icon class to display an icon with the button title.
        </div>
      </div>

      <div class="v-flex">
        <div class="v-flex-item w-1/5 bg-cn-20">
          href
        </div>
        <div class="v-flex-item w-4/5 bg-cn-10">
          Optional. If passed the component will be an anchor tag linking to the value.
        </div>
      </div>

      <div class="v-flex">
        <div class="v-flex-item w-1/5 bg-cn-20">
          target
        </div>
        <div class="v-flex-item w-4/5 bg-cn-10">
          Optional. String for any acceptable HTML target. For use with href property.
        </div>
      </div>
    </div>
  `
}