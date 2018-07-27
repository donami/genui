import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';

import Input from './input';
import { wInfo } from '../../../utils';

storiesOf('Components/Input', module).addWithJSX(
  'basic Input',
  wInfo(`

  ### Notes

  This is a standard <Input />

  ### Usage
  ~~~js
  <Input />
  ~~~`)(() => <Input placeholder="hello" />)
);
