import VueScriptComponent from 'vue-script-component';

const Toasts = {
  template: `
    <div class="inner-container">
      <h2>Toasts</h2>
      <p>Here is how to implement toasts with Vitruvius.</p>

      <div>
        <VueScriptComponent script='<script src="https://gist.github.com/iamjpg/d6508d5fcf69c6cfd752bc29d86d99b0.js"></script>'/>
      <div>

      <vp-button type="primary" v-on:click="showToast">Show Toast Example</vp-button><br /><br />
      <vp-button type="primary" v-on:click="showToastNoHeader">Show Toast with no Header</vp-button><br /><br />
      <vp-button type="primary" v-on:click="showStackedToasts">Show Multiple Toasts with Type!</vp-button><br /><br />
      <vp-button type="primary" v-on:click="showCenteredToast">Show Centered Toast</vp-button>

      <h3>Properties</h3>

      <div class="v-flex">
        <div class="v-flex-item w-1/5 bg-cn-20">
          type
        </div>
        <div class="v-flex-item w-4/5 bg-cn-10">
          Optional. Default is success. ['success', 'info', 'error']
        </div>
      </div>
      <div class="v-flex">
        <div class="v-flex-item w-1/5 bg-cn-20">
          header
        </div>
        <div class="v-flex-item w-4/5 bg-cn-10">
          Optional. Header message. String.
        </div>
      </div>
      <div class="v-flex">
        <div class="v-flex-item w-1/5 bg-cn-20">
          message
        </div>
        <div class="v-flex-item w-4/5 bg-cn-10">
          Optional. Message for user. String.
        </div>
      </div>
      <div class="v-flex">
        <div class="v-flex-item w-1/5 bg-cn-20">
          removeIn
        </div>
        <div class="v-flex-item w-4/5 bg-cn-10">
          Optional. Removes the toast in x amount of milliseconds. Integer.
        </div>
    </div>
  `,
  mounted() {
    this.ToastMessage = new Toast();
  },
  components: {
    VueScriptComponent
  },
  methods: {
    showToast() {
      this.ToastMessage.show({
        type: 'success',
        header: 'This is a Header',
        message: 'This toast was created with the "removeIn" option meaning this toast will dissapear in 5 seconds.',
        removeIn: 5000,
      });
    },
    showToastNoHeader() {
      this.ToastMessage.show({
        type: 'success',
        message: 'Toast without a header - only message.',
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
        message: 'You need to know about this! This one will be removed in 5 seconds!',
        removeIn: 5000,
      },
      {
        type: 'error',
        header: 'Error',
        message: 'Uh, oh. Something went wrong. You\'re going to have to click to remove me!',
      }].forEach((o) => {
        this.ToastMessage.show(o);
      });
    },
    showCenteredToast() {
      this.ToastMessage.show({
        type: 'success',
        header: 'This is a Header',
        message: 'This toast was created with the "removeIn" option meaning this toast will dissapear in 5 seconds.',
        centered: true,
        removeIn: 5000,
      });
    }
  }
}