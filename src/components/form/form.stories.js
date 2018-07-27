import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';

import Field from './field';
import Input from '../input';
import { wInfo } from '../../../utils';

storiesOf('Components/Form', module).addWithJSX(
  'basic Field',
  wInfo(`

  ### Notes

  This is a standard <Field />

  ### Usage
  ~~~js
  <Field />
  ~~~`)(() => (
    <Field>
      <label>Email</label>
      <Input placeholder="john@email.com" />
    </Field>
  ))
);
