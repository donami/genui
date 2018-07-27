import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';

import Heading from './heading';
import { wInfo } from '../../../utils';

storiesOf('Components/Heading', module).addWithJSX(
  'basic Heading',
  wInfo(`

  ### Notes

  This is a standard <Heading />

  ### Usage
  ~~~js
  <Heading as="h1">Page Heading</Heading>
  ~~~`)(() => <Heading as="h1">Page Heading</Heading>)
);
