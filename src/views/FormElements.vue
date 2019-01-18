<template>
  <section id="form-elements">
    <div>
      <vp-checkbox label="Basic Checkbox" name="check-box-name" checked="true"></vp-checkbox>
    </div>
    <div>
      <vp-checkbox label="Destrictive Checkbox" type="destructive" name="check-box-name"></vp-checkbox>
    </div>
    <div>
      <vp-checkbox label="Disabled Checkbox" type="disabled" name="check-box-name"></vp-checkbox>
    </div>
  </section>
</template>

<script>
import '../components/checkbox/checkbox';

export default {
  data() {
    return {}
  }
}
</script>

<style>

</style>
