<template>
  <section id="form-elements">
    <h1>Form Elements</h1>
    <h3>Check Boxes</h3>
    <div>
      <vp-checkbox label="Basic Checkbox" name="check-box-name" checked="true"></vp-checkbox>
    </div>
    <div>
      <vp-checkbox label="Destrictive Checkbox" type="destructive" name="check-box-name"></vp-checkbox>
    </div>
    <div>
      <vp-checkbox label="Disabled Checkbox" type="disabled" name="check-box-name"></vp-checkbox>
    </div>
    <h3>Radio Buttons</h3>
    <div>
      <vp-radio label="Basic Radio" name="radio1"></vp-radio>
    </div>
    <div>
      <vp-radio label="Destructive Radio" type="destructive" name="radio1" checked="true"></vp-radio>
    </div>
    <div>
      <vp-radio label="Disabled Radio" type="disabled" name="radio1"></vp-radio>
    </div>
  </section>
</template>

<script>
import '../components/form-elements/checkbox';
import '../components/form-elements/radio';

export default {
  data() {
    return {};
  },
};
</script>

<style>

</style>
