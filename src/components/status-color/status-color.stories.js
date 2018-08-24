import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';

import StatusColor from './status-color';
import { wInfo } from '../../../utils';

storiesOf('Components/StatusColor', module)
  .addWithJSX(
    'basic StatusColor',
    wInfo(`

  ### Notes

  This is a standard <StatusColor />

  ### Usage
  ~~~js
  <StatusColor />
  ~~~`)(() => <StatusColor />)
  )
  .addWithJSX(
    'info StatusColor',
    wInfo(`

  ### Notes

  This is a info <StatusColor />

  ### Usage
  ~~~js
  <StatusColor info />
  ~~~`)(() => <StatusColor info />)
  )
  .addWithJSX(
    'positive StatusColor',
    wInfo(`

  ### Notes

  This is a positive <StatusColor />

  ### Usage
  ~~~js
  <StatusColor positive />
  ~~~`)(() => <StatusColor positive />)
  )
  .addWithJSX(
    'negative StatusColor',
    wInfo(`

  ### Notes

  This is a negative <StatusColor />

  ### Usage
  ~~~js
  <StatusColor negative />
  ~~~`)(() => <StatusColor negative />)
  );
