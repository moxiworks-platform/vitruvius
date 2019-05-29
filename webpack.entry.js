/*************************************************************************************
* webpack.entry.js
* This file dynamically creates the entry object for webpack.config.js
* We do this so items added to the components directory get dynamically distributed
* to the dist directory. Once you add a file, you only need to rerun `npm run dev`.
************************************************************************************/

const glob = require('glob');
const entryArray = glob.sync('./src/components/**.js');

const entryObject = entryArray.reduce((acc, item) => {
  const name = item.replace('./src/components/', '').replace('.js', '');
  acc[name] = item;
  return acc;
}, {});

module.exports = entryObject;