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
      document.querySelector('.vp-toast').classList.add('show');
    },
  },
};
</script>

<style>

</style>
