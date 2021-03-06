// import { configure } from '@storybook/react';

// // automatically import all files ending in *.stories.js
// const req = require.context('../stories', true, /.stories.js$/);
// function loadStories() {
//   req.keys().forEach(filename => req(filename));
// }

// configure(loadStories, module);

import { configure } from '@storybook/react';
import { setAddon, addDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, select } from '@storybook/addon-knobs/react';
addDecorator(withKnobs);
setAddon(JSXAddon);

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  require('../stories/index.stories.js');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
