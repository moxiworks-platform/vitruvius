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
        <vp-card type="level-1 showhover" v-on:click="handleOnClick('item 1')">
          <div class="flex flex-wrap"><i class="v-icon-heart-filled"></i>Item 1.</div>
        </vp-card>
        <vp-card type="level-1 showhover" v-on:click="handleOnClick('item 2')">
          <div class="flex flex-wrap"><i class="v-icon-heart-filled"></i>Item 2.</div>
        </vp-card>
        <vp-card type="level-1 showhover" v-on:click="handleOnClick('item 3')">
          <div class="flex flex-wrap"><i class="v-icon-heart-filled"></i>Item 3.</div>
        </vp-card>
      </div>

      <h3>Card With Rounded Images</h3>

      <div class="mb-16">
        <vp-card type="level-1">
          <div class="flex flex-wrap">
            <div class="rounded-image" style="background-image: url(https://moxi3.ssl.hwcdn.net/img-pr/a/a8bcb974-2170-4698-946d-aeae23ed8d2b/0_3_full.jpg)"></div>
            <div>Example of a card with an image.</div>
          </div>
        </vp-card>
      </div>

      <h3>Cards With Header Image</h3>

      <div class="v-flex-wrap">
        <div class="v-flex-item w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
          <vp-card type="level-1"
            headerimage="https://moxi1.ssl.hwcdn.net/img-pr-000955/psm/e1362c566a86d15cac4f8e93d55b25db9a20dde3/0_3_small.jpg"
            headerimageheight="200px"
            imageheadertext="<h3>This is a Title</h3>"
          >
            Image with title.
          </vp-card>
        </div>
        <div class="v-flex-item w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
          <vp-card type="level-1"
            headerimage="https://moxi1.ssl.hwcdn.net/img-pr-000955/psm/e1362c566a86d15cac4f8e93d55b25db9a20dde3/0_3_small.jpg"
            headerimageheight="200px"
            imageheadertext="Line one and<br>line 2."
          >
            <h2>Title</h2>
            Image with title.
          </vp-card>
        </div>
        <div class="v-flex-item w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
          <vp-card type="level-1"
            headerimage="https://moxi1.ssl.hwcdn.net/img-pr-000955/psm/e1362c566a86d15cac4f8e93d55b25db9a20dde3/0_3_small.jpg"
            headerimageheight="200px"
            imageheadertext="Hello, You!"
            subsection="Sub section text..."
          >
            <h2>Title</h2>
            Image with title.
          </vp-card>
        </div>
        <div class="v-flex-item w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
          <vp-card type="level-1"
            headerimage="https://moxi1.ssl.hwcdn.net/img-pr-000955/psm/e1362c566a86d15cac4f8e93d55b25db9a20dde3/0_3_small.jpg"
            headerimageheight="200px"
            subsection="Sub section text..."
            badge='[{"label": "new", "backgroundClass": "bg-moxi-green-dark", "color": "white"}, {"label": "hot", "backgroundClass": "bg-moxi-destructive", "color": "white"}]'
          >
            <h2>Look, I Have a Badge</h2>
            Badges are so hot right now.
          </vp-card>
        </div>
      </div>

        <h3>Example Card Code</h3>

      <div>
        <pre><code class="language-html">&lt;vp-card type="level-1"
  headerimage="https://moxi1.ssl.hwcdn.net/img-pr-000955/psm/e1362c566a86d15cac4f8e93d55b25db9a20dde3/0_3_small.jpg"
  headerimageheight="200px"
  subsection="Sub section text..."
  badge='[{"label": "new", "backgroundClass": "bg-ca-flamenco", "color": "white"}]'&gt;
    &lt;h2&gt;Look, I Have a Badge&lt;/h2&gt;
    Badges are so hot right now.
&lt;/vp-card&gt;</code></pre>
      </div>

      <h3>Properties</h3>

      <div class="v-flex">
        <div class="v-flex-item w-1/5 bg-cn-20">
          type
        </div>
        <div class="v-flex-item w-4/5 bg-cn-10">
          Optional. Accepts shadow class: [level-1, level-2, level-3]
        </div>
      </div>
      <div class="v-flex">
        <div class="v-flex-item w-1/5 bg-cn-20">
          headerimage
        </div>
        <div class="v-flex-item w-4/5 bg-cn-10">
          Optional. Accepts URL string.
        </div>
      </div>
      <div class="v-flex">
        <div class="v-flex-item w-1/5 bg-cn-20">
          headerimageheight
        </div>
        <div class="v-flex-item w-4/5 bg-cn-10">
          Optional. Sets height of image. Value in px.
        </div>
      </div>
      <div class="v-flex">
        <div class="v-flex-item w-1/5 bg-cn-20">
          imageheadertext
        </div>
        <div class="v-flex-item w-4/5 bg-cn-10">
          Optional. Accepts HTML or plain string.
        </div>
      </div>
      <div class="v-flex">
        <div class="v-flex-item w-1/5 bg-cn-20">
          subsection
        </div>
        <div class="v-flex-item w-4/5 bg-cn-10">
          Optional. Accepts HTML or plain string.
        </div>
      </div>
      <div class="v-flex">
        <div class="v-flex-item w-1/5 bg-cn-20">
          badge
        </div>
        <div class="v-flex-item w-4/5 bg-cn-10">
          Optional. Array of objects. Must be valid JSON. Example showing object options:<br />
          [{"label": "new", "backgroundClass": "bg-ca-flamenco", "color": "white"}]
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
