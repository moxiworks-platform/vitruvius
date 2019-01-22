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
    <div class="v-flex">
      <div class="v-flex-item w-1/5">Option 1</div>
      <div class="v-flex-item w-1/5"><vp-switch></vp-switch></div>
    </div>
    <div class="v-flex">
      <div class="v-flex-item w-1/5">Option 2 (rounded)</div>
      <div class="v-flex-item w-1/5"><vp-switch type="round"></vp-switch></div>
    </div>
  </section>
</template>

<script>
import '../components/form-elements/checkbox';
import '../components/form-elements/radio';
import '../components/form-elements/switch';

export default {
  data() {
    return {};
  },
};
</script>

<style>

</style>
