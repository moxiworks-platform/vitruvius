const FormElements = {
  template: /*html*/`
    <div class="inner-flex">
      <div class="v-flex">
        <div class="v-flex-item w-4/5">
          <h2>Form Elements</h2>

          <h3 ref="checkboxes">Check Box Examples</h3>

          <pre><code class="language-html">&lt;vp-checkbox label="Basic Checkbox" name="check-box-name" value="foo" checked="true"&gt;&lt;/vp-checkbox&gt;
&lt;vp-checkbox label="Destrictive Checkbox" type="destructive" value="bar" name="check-box-name"&gt;&lt;/vp-checkbox&gt;
&lt;vp-checkbox label="Disabled Checkbox" type="disabled" value="baz" name="check-box-name"&gt;&lt;/vp-checkbox&gt;</code></pre>

          <div>
            <vp-checkbox label="Basic Checkbox" name="check-box-name" value="foo" checked="true"></vp-checkbox>
          </div>
          <div>
            <vp-checkbox label="Destrictive Checkbox" type="destructive" value="bar" name="check-box-name"></vp-checkbox>
          </div>
          <div>
            <vp-checkbox label="Disabled Checkbox" type="disabled" value="baz" name="check-box-name"></vp-checkbox>
          </div>

          <h3 ref="radios">Radio Examples</h3>

          <pre><code class="language-html">&lt;vp-radio label="Basic Radio" name="radio-box-name" value="foo" checked="true"&gt;&lt;/vp-checkbox&gt;
&lt;vp-radio label="Destrictive Radio" type="destructive" value="bar" name="radio-box-name"&gt;&lt;/vp-checkbox&gt;
&lt;vp-radio label="Disabled Radio" type="disabled" value="baz" name="radio-box-name"&gt;&lt;/vp-checkbox&gt;</code></pre>

          <div>
            <vp-radio label="Basic Radio" name="radio1" value="foo"></vp-radio>
          </div>
          <div>
            <vp-radio label="Destructive Radio" type="destructive" name="radio1" value="bar" checked="true"></vp-radio>
          </div>
          <div>
            <vp-radio label="Disabled Radio" type="disabled" name="radio1" value="baz"></vp-radio>
          </div>

          <h3 ref="switches">Switches</h3>

          <pre><code class="language-html">&lt;vp-switch name="doctor" value="dre" checked="true"&gt;&lt;/vp-switch&gt;
&lt;vp-switch name="tribe" value="called quest" type="round"&gt;&lt;/vp-switch&gt;
&lt;vp-switch name="snoop" value="dogg" type="destructive"&gt;&lt;/vp-switch&gt;</code></pre>

          <div class="v-flex">
            <div class="v-flex-item w-1/5">Basic</div>
            <div class="v-flex-item w-1/5"><vp-switch name="doctor" value="dre" checked="true"></vp-switch></div>
          </div>
          <div class="v-flex">
            <div class="v-flex-item w-1/5">Rounded</div>
            <div class="v-flex-item w-1/5"><vp-switch name="tribe" value="called quest" type="round"></vp-switch></div>
          </div>
          <div class="v-flex">
            <div class="v-flex-item w-1/5">Destructive</div>
            <div class="v-flex-item w-1/5"><vp-switch name="snoop" value="dogg" type="destructive"></vp-switch></div>
          </div>

          <h3 ref="inputs">Text Inputs and Textarea</h3>

          <div class="short">
            <vp-input type="text" label="Plain Input Text Field" name="foo" id="bar"></vp-input>
          </div>
          <br />
          <div class="short">
            <vp-input type="tel" label="Icon Left With label" name="foo" iconleft="v-icon-chat"></vp-input>
          </div>
          <br />
          <div class="short">
            <vp-input type="tel" label="Input with clear button" name="foo" iconclose="true" pattern="[0-9]*" value="test"></vp-input>
          </div>
          <br />
          <div class="short">
            <vp-input type="tel" format="true" label="Phone Number Formatting" name="foo" value="5555555555"></vp-input>
          </div>
          <br />
          <div class="short">
            <vp-input type="textarea" label="Text Area Example" name="foo" id="plop" rows="20"></vp-input>
          </div>
        </div>
        <div class="v-flex-item w-1/5">
          <div class="fixed sub-nav bg-cn-80 p-20 text-white rounded">
            <h4 class="mt-0">Jump To</h4>
            <ul>
              <li><a class="text-white underline" href="javascript:void(0);" @click="scrollMeTo('checkboxes')">Checkboxes</a></li>
              <li><a class="text-white underline" href="javascript:void(0);" @click="scrollMeTo('radios')">Radios</a></li>
              <li><a class="text-white underline" href="javascript:void(0);" @click="scrollMeTo('switches')">Switches</a></li>
              <li><a class="text-white underline" href="javascript:void(0);" @click="scrollMeTo('inputs')">Inputs</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
  mounted: function() {

  },
  methods: {
    scrollMeTo(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    }
  }
}
