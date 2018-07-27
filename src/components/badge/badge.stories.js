import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';

import Badge from './badge';
import { wInfo } from '../../../utils';

storiesOf('Components/Badge', module).addWithJSX(
  'basic Badge',
  wInfo(`

  ### Notes

  This is a standard <Badge>

  ### Usage
  ~~~js
  <Badge>Badge</Badge>
  ~~~`)(() => <Badge color="blue">Badge</Badge>)
);
