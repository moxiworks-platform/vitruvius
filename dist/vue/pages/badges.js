const Badges = {
  template: /*html*/`
    <div class="inner-container">
      <h2>Badges</h2>
      <p>Badges can notify you that there are new or unread messages or notifications.</p>

      <h3>Examples</h3>
      <p>Example of a right oriented tag with our "destructive" class.</p>
      <div class="mb-16">
        <div class="v-container bg-cn-05">
          Notifications <span class="badge badge-right destructive">12</span>
        </div>
        <pre><code class="language-html">&lt;div class="v-container bg-cn-05"&gt;
  Notifications &lt;span class="badge badge-right destructive"&gt;12&lt;/span&gt;
&lt;/div&gt;</code></pre>
      </div>

      <p>Example of an inline badge with default "moxi blue".</p>
      <div class="mb-16">
        <div class="v-container bg-cn-05">
          Something something <span class="badge blue">New</span>
        </div>
        <pre><code class="language-html">&lt;div class="v-container bg-cn-05"&gt;
  Something something &lt;span class="badge blue"&gt;New&lt;/span&gt;
&lt;/div&gt;</code></pre>
      </div>

      <p>Example of an inline badge with default "moxi green".</p>
      <div class="mb-16">
        <div class="v-container bg-cn-05">
          Something something <span class="badge green">New</span>
        </div>
        <pre><code class="language-html">&lt;div class="v-container bg-cn-05"&gt;
  Something something &lt;span class="badge green"&gt;New&lt;/span&gt;
&lt;/div&gt;</code></pre>
      </div>

      <h3>Alternative Examples</h3>

      <p>The three options above are default options but using Vitruvius's functional style you can mark up your badge with a more custom style.</p>

      <p>Example of an inline badge with an alternative dark background and light text color.</p>
      <div class="mb-16">
        <div class="v-container bg-cn-05">
          Something something <span class="badge badge-right bg-cn-100 text-white">Check Me Out</span>
        </div>
        <pre><code class="language-html">&lt;div class="v-container bg-cn-05"&gt;
  Something something &lt;span class="badge badge-right bg-cn-100 text-white"&gt;Check Me Out&lt;/span&gt;
&lt;/div&gt;</code></pre>
      </div>

    </div>
  `
}
