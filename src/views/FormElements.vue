<template>
  <section id="form-elements">
    <h1>Form Elements</h1>
    <h3>Check Boxes</h3>
    <pre class="prettyprint linenums lang-html">
    &lt;!-- Check Box Component --&gt;
    &lt;vp-checkbox label="Basic Checkbox" name="check-box-name" value="foo" checked="true"&gt;&lt;/vp-checkbox&gt;
    &lt;vp-checkbox label="Destrictive Checkbox" type="destructive" value="bar" name="check-box-name"&gt;&lt;/vp-checkbox&gt;
    &lt;vp-checkbox label="Disabled Checkbox" type="disabled" value="baz" name="check-box-name"&gt;&lt;/vp-checkbox&gt;</pre>
    <div>
      <vp-checkbox label="Basic Checkbox" name="check-box-name" value="foo" checked="true"></vp-checkbox>
    </div>
    <div>
      <vp-checkbox label="Destrictive Checkbox" type="destructive" value="bar" name="check-box-name"></vp-checkbox>
    </div>
    <div>
      <vp-checkbox label="Disabled Checkbox" type="disabled" value="baz" name="check-box-name"></vp-checkbox>
    </div>
    <h3>Radio Buttons</h3>
    <pre class="prettyprint linenums lang-html">
    &lt;!-- Radio Component --&gt;
    &lt;vp-radio label="Basic Checkbox" name="check-box-name" value="foo" checked="true"&gt;&lt;/vp-radio&gt;
    &lt;vp-radio label="Destrictive Checkbox" type="destructive" value="bar" name="check-box-name"&gt;&lt;/vp-radio&gt;
    &lt;vp-radio label="Disabled Checkbox" type="disabled" value="baz" name="check-box-name"&gt;&lt;/vp-radio&gt;</pre>
    <div>
      <vp-radio label="Basic Radio" name="radio1" value="foo"></vp-radio>
    </div>
    <div>
      <vp-radio label="Destructive Radio" type="destructive" name="radio1" value="bar" checked="true"></vp-radio>
    </div>
    <div>
      <vp-radio label="Disabled Radio" type="disabled" name="radio1" value="baz"></vp-radio>
    </div>
    <h3>Switches</h3>
    <pre class="prettyprint linenums lang-html">
    &lt;div class="v-flex"&gt;
      &lt;div class="v-flex-item w-1/5"&gt;Option 1&lt;/div&gt;
      &lt;div class="v-flex-item w-1/5"&gt;&lt;vp-switch name="doctor" value="dre" checked="true"&gt;&lt;/vp-switch&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="v-flex"&gt;
      &lt;div class="v-flex-item w-1/5"&gt;Option 2 (rounded)&lt;/div&gt;
      &lt;div class="v-flex-item w-1/5"&gt;&lt;vp-switch name="tribe" value="called quest" type="round"&gt;&lt;/vp-switch&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="v-flex"&gt;
      &lt;div class="v-flex-item w-1/5"&gt;Option 3 (destructive)&lt;/div&gt;
      &lt;div class="v-flex-item w-1/5"&gt;&lt;vp-switch name="snoop" value="dogg" type="destructive"&gt;&lt;/vp-switch&gt;&lt;/div&gt;
    &lt;/div&gt;</pre>
    <div class="v-flex">
      <div class="v-flex-item w-1/5">Option 1</div>
      <div class="v-flex-item w-1/5"><vp-switch name="doctor" value="dre" checked="true"></vp-switch></div>
    </div>
    <div class="v-flex">
      <div class="v-flex-item w-1/5">Option 2 (rounded)</div>
      <div class="v-flex-item w-1/5"><vp-switch name="tribe" value="called quest" type="round"></vp-switch></div>
    </div>
    <div class="v-flex">
      <div class="v-flex-item w-1/5">Option 3 (destructive)</div>
      <div class="v-flex-item w-1/5"><vp-switch name="snoop" value="dogg" type="destructive"></vp-switch></div>
    </div>
    <h3>Input Text Fields</h3>
    <pre class="prettyprint linenums lang-html">
      &lt;div class="short"&gt;
        &lt;vp-input type="text" placeholder="Plain Input Text Field" name="foo"&gt;&lt;/vp-input&gt;
      &lt;/div&gt;
      &lt;br /&gt;
      &lt;div class="short"&gt;
        &lt;vp-input label="Some Label" type="tel" placeholder="Icon Left With label" name="foo" iconleft="icon-chat"&gt;&lt;/vp-input&gt;
      &lt;/div&gt;
      &lt;br /&gt;
      &lt;div class="short"&gt;
        &lt;vp-input label="Type inside to show clear" type="tel" placeholder="Input with clear button" name="foo" iconclose="true"&gt;&lt;/vp-input&gt;
      &lt;/div&gt;</pre>
    <div class="short">
      <vp-input type="text" placeholder="Plain Input Text Field" name="foo"></vp-input>
    </div>
    <br />
    <div class="short">
      <vp-input label="Some Label" type="tel" placeholder="Icon Left With label" name="foo" iconleft="icon-chat"></vp-input>
    </div>
    <br />
    <div class="short">
      <vp-input label="Type inside to show clear" type="tel" placeholder="Input with clear button" name="foo" iconclose="true"></vp-input>
    </div>
  </section>
</template>

<script>
import '../components/form-elements/checkbox';
import '../components/form-elements/radio';
import '../components/form-elements/switch';
import '../components/form-elements/input';

export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
  .short {
    width: 380px;
  }
</style>
