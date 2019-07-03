const Cards = {
  template: /*html*/`
    <div class="inner-container">
      <h2>Cards / Surfaces</h2>
      <p>There be dragons....</p>

      <h3>Basic Cards</h3>

      <div class="mb-16">
        <vp-card>This is a base card</vp-card>
      </div>

      <div class="mb-16">
        <vp-card type="level-1">This is a level 1 card.</vp-card>
      </div>

      <div class="mb-16">
        <vp-card type="level-2">This is a level 2 card.</vp-card>
      </div>

      <div class="mb-16">
        <vp-card type="level-3">This is a level 3 card.</vp-card>
      </div>

      <h3>Cards as Clickable Lists</h3>

      <p>You can stack cards to create clickable lists. Here is an example with icons.</p>

      <div class="bg-cn-05 p-20">
        <vp-card type="level-1 showhover" icon="v-icon-heart-filled" v-on:click="handleOnClick('item 1')">Item 1.</vp-card>
        <vp-card type="level-1 showhover" icon="v-icon-heart-filled" v-on:click="handleOnClick('item 2')">Item 2.</vp-card>
        <vp-card type="level-1 showhover" icon="v-icon-heart-filled" v-on:click="handleOnClick('item 3')">Item 3.</vp-card>
      </div>

    </div>
  `,
  methods: {
    handleOnClick(str) {
      alert(`You clicked ${str}`);
    }
  }
}
