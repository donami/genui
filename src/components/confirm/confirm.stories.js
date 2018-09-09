import React from 'react';
import { storiesOf } from '@storybook/react';

import Confirm from './confirm';
import { wInfo } from '../../../utils';

storiesOf('Components/Confirm', module).addWithJSX(
  'basic Confirm',
  wInfo(`

  ### Notes

  This is a standard <Confirm />

  ### Usage
  ~~~js
  <Confirm
    header="Confirm Action"
    trigger={<div>Trigger</div>}
    content={<div>Are you sure?</div>}
    onActionClick={(e, actionProps) => {
      if (actionProps.positive) {
        // Do something
      }
      console.log('ActionProps', actionProps);
    }}
  />
  ~~~`)(() => (
    <Confirm
      header="Confirm Action"
      trigger={<div>Trigger</div>}
      content={<div>Are you sure?</div>}
      onActionClick={(e, actionProps) => {
        if (actionProps.positive) {
          // Do something
        }
        console.log('ActionProps', actionProps);
      }}
    />
  ))
);
