<template>
  <section>
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
      Toast.show({
        type: 'error',
        header: 'From Component',
        message: 'This is the message I would like the user to see.'
      })
    },
  },
};
</script>

<style>

</style>
