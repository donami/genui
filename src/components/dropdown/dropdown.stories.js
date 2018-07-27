import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';

import Dropdown from './dropdown';
import { wInfo } from '../../../utils';

const items = [
  {
    title: 'A menu item',
  },
  {
    title: 'Another item',
  },
];

storiesOf('Components/Dropdown', module).addWithJSX(
  'basic Dropdown',
  wInfo(`

  ### Notes

  This is a standard <Dropdown />

  ### Usage
  ~~~js

  const items = [
    {
      title: 'A menu item',
    },
    {
      title: 'Another item',
    },
  ];

  <Dropdown
    items={items}
    renderItem={item => <React.Fragment>{item.title}</React.Fragment>}
  > 
    John Doe
  </Dropdown>

  ~~~`)(() => (
    <Dropdown
      items={items}
      renderItem={item => (
        <React.Fragment>
          <a href="#">{item.title}</a>
        </React.Fragment>
      )}
    >
      John Doe
    </Dropdown>
  ))
);
