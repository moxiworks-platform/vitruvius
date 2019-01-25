<template>
  <section>
    <div v-on:click="showToast">Hello</div>
    <vp-button type="primary" v-on:click="showToast">Show Toast</vp-button>
  </section>
</template>

<script>
import '../components/button/button';
import Toast from '../components/toasts/toast';

export default {
  data() {
    return {};
  },
  methods: {
    showToast() {
      console.log(0)
      Toast.show()
    },
  },
};
</script>

<style>

</style>
