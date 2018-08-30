import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';

import Picker from './picker';
import { wInfo } from '../../../utils';

const items = [
  {
    value: 'angular',
    label: 'Angular',
  },
  {
    value: 'css',
    label: 'CSS',
  },
  {
    value: 'react',
    label: 'React',
  },
  {
    value: 'design',
    label: 'Design',
  },
];

storiesOf('Components/Picker', module).addWithJSX(
  'basic Picker',
  wInfo(`

  ### Notes

  This is a standard <Picker />

  ### Usage
  ~~~js
  <Picker items={items} />
  ~~~`)(() => <Picker items={items} />)
);
