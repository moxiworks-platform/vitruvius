const Typography = {
  template: /*html*/`
    <div class="inner-container">
      <h2>Typography</h2>
      <p>Vitruvius uses the standard base font size of 16px which allows us to calculate font size in REM values from that point. If you're curious about conversions, you can look at this experiment here: <a href="https://daniellamb.com/experiments/px-to-rem-calc/" target="_blank">https://daniellamb.com/experiments/px-to-rem-calc/</a></p>
      <p>We're opting for REM values as accessibility is a goal of this project. If our user has changed their base font setting then our font sizes should adjust accordingly.</p>
      <h3>Headline Examples</h3>
      <h1 class="hexept">h1. Headline Large - 2.5rem | 40px</h1>
      <h2 class="hexept">h2. Headline Medium - 1.5rem | 24px</h2>
      <h3 class="hexept">h3. Headline Regular - 1.125rem | 18px</h3>
      <h4 class="hexept">h4. Headline Small - 1rem | 16px</h4>
      <h5 class="hexept">h5. Headline "heading" - .875rem | 14px</h5>

      <h3>Class Examples</h3>
      <pre>.text-xs</pre>
      <p class="text-xs">This is an example of our extra small font size of 12px or .75rem.</p>

      <pre>.text-sm</pre>
      <p class="text-sm">This is an example of our small font size of 14px or .875rem.</p>

      <pre>.text-lg</pre>
      <p class="text-lg">This is an example of our large font size of 18px or 1.125rem.</p>

      <pre>.text-xl</pre>
      <p class="text-xl">This is an example of our XL font size of 20px or 1.25rem.</p>

      <pre>.text-2xl</pre>
      <p class="text-2xl">This is an example of our 2xl font size of 20px or 1.5rem.</p>

      <pre>.text-3xl</pre>
      <p class="text-3xl">This is an example of our 2xl font size of 30px or 1.875rem.</p>

      <pre>.text-4xl</pre>
      <p class="text-4xl">This is an example of our 4xl font size of 36px or 2.25rem.</p>

      <pre>.text-5xl</pre>
      <p class="text-5xl">This is an example of our 5xl font size of 40px or 2.5rem.</p>
    </div>
  `
}
