import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';

import Modal from './modal';
import { wInfo } from '../../../utils';

storiesOf('Components/Modal', module).addWithJSX(
  'basic Modal',
  wInfo(`

  ### Notes

  This is a standard <Modal />

  ### Usage
  ~~~js
  <Modal
    header="Modal Header"
    trigger={<div>Trigger</div>}
    content={<div>Content</div>}
  />
  ~~~`)(() => (
    <Modal
      header="Modal Header"
      trigger={<div>Trigger</div>}
      content={<div>Content</div>}
    />
  ))
);
