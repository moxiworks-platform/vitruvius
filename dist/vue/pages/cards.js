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

      <h3>Card With Rounded Images</h3>

      <div class="mb-16">
        <vp-card type="level-1" image="https://moxi3.ssl.hwcdn.net/img-pr/a/a8bcb974-2170-4698-946d-aeae23ed8d2b/0_3_full.jpg">Example of a card with an image.</vp-card>
      </div>

      <h3>Cards With Header Image</h3>

      <div class="v-flex">
        <div class="v-flex-item w-1/2">
          <vp-card type="level-1"
            headerimage="https://moxi1.ssl.hwcdn.net/img-pr-000955/psm/e1362c566a86d15cac4f8e93d55b25db9a20dde3/0_3_small.jpg"
            headerimageheight="200px"
            headertext="<h1>This is a Title</h1>"
          >
            Hello
          </vp-card>
        </div>
        <div class="v-flex-item w-1/2">

        </div>
      </div>
    </div>
  `,
  methods: {
    handleOnClick(str) {
      alert(`You clicked ${str}`);
    }
  }
}
