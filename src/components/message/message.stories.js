import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';

import Message from './message';
import { wInfo } from '../../../utils';

storiesOf('Components/Message', module).addWithJSX(
  'basic Message',
  wInfo(`

  ### Notes

  This is a standard <Message />

  ### Usage
  ~~~js
  <Message>
    <Message.Header>Message Header</Message.Header>
    <p>Message content</p>
  </Message>
  ~~~`)(() => (
    <Message>
      <Message.Header>Message Header</Message.Header>
      <p>Message content</p>
    </Message>
  ))
);
