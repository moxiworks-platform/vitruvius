<template>
  <section>
    <h1 class="mb-30">Toasts</h1>

    <p>Here is how to implement toasts with Vitruvius.</p>

    <pre class="prettyprint linenums lang-js">
    import Toast from 'path_to_toasts_component';
    
    Toast.show({
      type: 'success',
      header: 'From Component',
      message: 'This is the message I would like the user to see.',
      removeIn: 5000,
    });</pre>

    <vp-button type="primary" v-on:click="showToast">Show Toast Example</vp-button>
    <vp-button type="primary" v-on:click="showStackedToasts">Show Multiple Toasts with Type!</vp-button>
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
        type: 'success',
        header: 'From Component',
        message: 'This toast was created with the "removeIn" option meaning this toast will dissapear in 5 seconds.',
        removeIn: 5000,
      });
    },
    showStackedToasts() {
      [{
        type: 'success',
        header: 'Success',
        message: 'You did a good thing! You\'re going to have to click to remove me!',
      },
      {
        type: 'info',
        header: 'Information',
        message: 'You need to know about this! You\'re going to have to click to remove me!',
      },
      {
        type: 'error',
        header: 'Error',
        message: 'Uh, oh. Something went wrong. You\'re going to have to click to remove me!',
      }].forEach((o) => {
        Toast.show(o);
      });
    },
  },
};
</script>

<style>

</style>
