# Project Vitruvius

The goal of Project Vitruvius is to create a framework agnostic component library & CSS Framework adhering to the specifications provided by the design team at MoxiWorks. To accomplish this, we're using TailwindCSS and Lit-Element respectively.

## Development

1. Fork and clone repository locally.
2. Run `npm install` to install dependencies locally.
3. Run `npm run dev` to start the dev server.

Vitruvius will then be running `http://localhost:9000` out of the `dist` directory.

### Understanding the Relationship Between the Src and Dist directories

Vitruvius is only an icon library for MoxiWorks. The files of importance live inside the following directories:

1. Fonts: `src/styles/fonts/...`
2. Font CSS: `src/styles/vitruvius-icons.css`

The VueJS application wrapping a UI around the fonts is located in the `dist` directory.

When you run `npm run dev` the website running on port 9000 is located in the `dist` directory. On save of the above files, they are dynamically placed in the dist directory while you develop. Once satisfied, you can run the build and publish process below.

## Building and Publishing

Below is information on working on forked develop branch and building from the upstream repository then pushing to NPM.

### While still on the Develop Branch

1. Pull develop branch from upstream to assure you have the latest changes.
2. Make sure you're happy with your updates and that they are properly represented inside of the development web application.
3. Enter a pull request.

### After Pull Request Has Been Brought into the Upstream Develop Branch

Assuming you're working on the upstream repository, you can now do the following:

1. Merge pull request from develop branch.
2. Run `npm run dev` checking the site on port 9000 to assure everything looks right.
3. Shut down `npm run dev`.
4. Run `npm run build` ON DEVELOP BRANCH.
5. Push that to develop branch.
6. Run `git checkout master`.
7. Run `git merge develop`.
8. Run `git tag ${version from package.json}`.
9. Run `git push origin master`.
10. Run `git push --tags`.
11. As long as you have permissions (https://www.npmjs.com/settings/moxiworks/members) `npm publish --access public`
