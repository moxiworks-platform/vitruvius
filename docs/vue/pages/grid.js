const Grid = {
  template: /*html*/`
    <div class="inner-flex">
      <div class="v-flex">
        <div class="v-flex-item w-4/5">

            <h2>Grids</h2>

            <p>Below you will find examples of static and responsive grid layouts. For more information on grids you can consult the TailwindCSS documentation <a href="https://tailwindcss.com/components/grids/#app" target="_blank">here</a>.</p>

            <h3 ref="staticgrid">Static Grid</h3>

            <pre><code class="language-html">&lt;!-- Full width column --&gt;
&lt;div class="v-flex"&gt;
&lt;div class="v-flex-item w-full bg-moxi-green text-center"&gt;1&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Two columns --&gt;
&lt;div class="v-flex"&gt;
&lt;div class="v-flex-item w-1/2 bg-moxi-green text-center"&gt;1&lt;/div&gt;
&lt;div class="v-flex-item w-1/2 bg-moxi-green-light text-center"&gt;2&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Three columns --&gt;
&lt;div class="v-flex"&gt;
&lt;div class="v-flex-item w-1/3 bg-moxi-green text-center"&gt;1&lt;/div&gt;
&lt;div class="v-flex-item w-1/3 bg-moxi-green-light text-center"&gt;2&lt;/div&gt;
&lt;div class="v-flex-item w-1/3 bg-moxi-green text-center"&gt;3&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Four columns --&gt;
&lt;div class="v-flex"&gt;
&lt;div class="v-flex-item w-1/4 bg-moxi-green text-center"&gt;1&lt;/div&gt;
&lt;div class="v-flex-item w-1/4 bg-moxi-green-light text-center"&gt;2&lt;/div&gt;
&lt;div class="v-flex-item w-1/4 bg-moxi-green text-center"&gt;3&lt;/div&gt;
&lt;div class="v-flex-item w-1/4 bg-moxi-green-light text-center"&gt;4&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Five columns --&gt;
&lt;div class="v-flex"&gt;
&lt;div class="v-flex-item w-1/5 bg-moxi-green text-center"&gt;1&lt;/div&gt;
&lt;div class="v-flex-item w-1/5 bg-moxi-green-light text-center"&gt;2&lt;/div&gt;
&lt;div class="v-flex-item w-1/5 bg-moxi-green text-center"&gt;3&lt;/div&gt;
&lt;div class="v-flex-item w-1/5 bg-moxi-green-light text-center"&gt;4&lt;/div&gt;
&lt;div class="v-flex-item w-1/5 bg-moxi-green text-center"&gt;5&lt;/div&gt;
&lt;/div&gt;</code></pre>

            <!-- Full width column -->
              <div class="v-flex">
              <div class="v-flex-item w-full bg-moxi-green text-center">1</div>
            </div>

            <!-- Two columns -->
            <div class="v-flex">
              <div class="v-flex-item w-1/2 bg-moxi-green text-center">1</div>
              <div class="v-flex-item w-1/2 bg-moxi-green-light text-center">2</div>
            </div>

            <!-- Three columns -->
            <div class="v-flex">
              <div class="v-flex-item w-1/3 bg-moxi-green text-center">1</div>
              <div class="v-flex-item w-1/3 bg-moxi-green-light text-center">2</div>
              <div class="v-flex-item w-1/3 bg-moxi-green text-center">3</div>
            </div>

            <!-- Four columns -->
            <div class="v-flex">
              <div class="v-flex-item w-1/4 bg-moxi-green text-center">1</div>
              <div class="v-flex-item w-1/4 bg-moxi-green-light text-center">2</div>
              <div class="v-flex-item w-1/4 bg-moxi-green text-center">3</div>
              <div class="v-flex-item w-1/4 bg-moxi-green-light text-center">4</div>
            </div>

            <!-- Five columns -->
            <div class="v-flex">
              <div class="v-flex-item w-1/5 bg-moxi-green text-center">1</div>
              <div class="v-flex-item w-1/5 bg-moxi-green-light text-center">2</div>
              <div class="v-flex-item w-1/5 bg-moxi-green text-center">3</div>
              <div class="v-flex-item w-1/5 bg-moxi-green-light text-center">4</div>
              <div class="v-flex-item w-1/5 bg-moxi-green text-center">5</div>
            </div>

            <h3 ref="responsivegrid">Responsive Grid</h3>

            <pre><code class="language-html">&lt;!-- Six columns --&gt;
&lt;div class="v-flex-wrap"&gt;
&lt;div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green text-center"&gt;1&lt;/div&gt;
&lt;div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green-light text-center"&gt;2&lt;/div&gt;
&lt;div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green text-center"&gt;3&lt;/div&gt;
&lt;div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green-light text-center"&gt;4&lt;/div&gt;
&lt;div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 bg-moxi-green text-center"&gt;5&lt;/div&gt;
&lt;div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 bg-moxi-green-light text-center"&gt;6&lt;/div&gt;
&lt;/div&gt;

&lt;div class="v-flex-wrap"&gt;
&lt;div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green text-center"&gt;7&lt;/div&gt;
&lt;div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green-light text-center"&gt;8&lt;/div&gt;
&lt;div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green text-center"&gt;9&lt;/div&gt;
&lt;div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green-light text-center"&gt;10&lt;/div&gt;
&lt;div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 bg-moxi-green text-center"&gt;11&lt;/div&gt;
&lt;div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 bg-moxi-green-light text-center"&gt;12&lt;/div&gt;
&lt;/div&gt;</code></pre>

            <!-- Six columns -->
            <div class="v-flex-wrap">
              <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green text-center">1</div>
              <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green-light text-center">2</div>
              <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green text-center">3</div>
              <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green-light text-center">4</div>
              <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 bg-moxi-green text-center">5</div>
              <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 bg-moxi-green-light text-center">6</div>
            </div>

            <div class="v-flex-wrap">
              <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green text-center">7</div>
              <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green-light text-center">8</div>
              <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green text-center">9</div>
              <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green-light text-center">10</div>
              <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 bg-moxi-green text-center">11</div>
              <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 bg-moxi-green-light text-center">12</div>
            </div>


        </div>
        <div class="v-flex-item w-1/5">
          <div class="fixed sub-nav bg-cn-80 p-20 text-white rounded">
            <h4 class="mt-0">Jump To</h4>
            <ul>
              <li><a class="text-white underline" href="javascript:void(0);" @click="scrollMeTo('staticgrid')">Static Grid</a></li>
              <li><a class="text-white underline" href="javascript:void(0);" @click="scrollMeTo('responsivegrid')">Responsive Grid</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
  methods: {
    scrollMeTo(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    }
  }
}
