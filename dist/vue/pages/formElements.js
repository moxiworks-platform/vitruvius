const FormElements = {
  template: /*html*/`
    <div class="inner-container">
      <h2>Form Elements</h2>

      <h3>Check Box Examples</h3>

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

      <h3>Radio Examples</h3>

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
    </div>
  `
}