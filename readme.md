# Project Vitruvius

The goal of Project Vitruvius is to create a framework agnostic component library & CSS Framework adhering to the specifications provided by the design team at MoxiWorks. To accomplish this, we're using TailwindCSS and Lit-Element respectively.

## Development

1. Fork and clone repository locally.
2. Run `npm install` to install dependencies locally.
3. Run `npm run dev` to start the dev server.

Vitruvius will then be running `http://localhost:9000` out of the `dist` directory.

### Understanding the Relationship Between the Src and Dist directories

All of the Javascript components and CSS is developed in the `src` directory. On save, those files are updated in the dist directory. Webpack will keep the component file hidden, but they're there.

Whenever you add a component `js` file to the components directory it will by dynamically added to the `dist` directory. You will need to add the src of your new component to the index.html file. If you're getting a 404 after sourcing the file, please restart your dev server (`npm run dev`).

Vitruvius' dist directory is a VueJS application intended for development and documentation (more on this in the documentation section).

Everything after that is a standard VueJS 2.0 application. Add an appropriate route to the application and follow convention from there.

### Understanding TailwindCSS

TailwindCSS has a configuration file in `src/styles/tailwind.js`. The CSS for the components is written in `src/styles/vitruvius.css`. Please read more about [TailwindCSS here](https://tailwindcss.com/). Also, review the files to begin understanding convention.

## Testing

100% code coverage is a goal of this project. Tests are located in the `test` directory. To run tests type `npm run test` in your terminal.

After the unit tests are done running there is a web output created in the `coverage` directory. Viewing this output allows you to click on a file and see what code tree's are still untested.
