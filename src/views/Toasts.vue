<template>
  <section>
    <vp-button type="primary" v-on:click="showToast()">Show Toast</vp-button>
    <vp-toast></vp-toast>
  </section>
</template>

<script>
import '../components/button/button';
import '../components/toasts/toast';

export default {
  data() {
    return {};
  },
  methods: {
    showToast() {
      alert(1);
      console.log(VpToast);
      VpToast.showToast();
    },
  },
};
</script>

<style>

</style>
