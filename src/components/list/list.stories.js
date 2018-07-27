import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';

import List from './list';
import { wInfo } from '../../../utils';

storiesOf('Components/List', module)
  .addWithJSX(
    'basic List',
    wInfo(`

  ### Notes

  This is a standard <List />

  ### Usage
  ~~~js
  <List>
    <List.Item>Item One</List.Item>
    <List.Item>Item Two</List.Item>
  </List>
  ~~~`)(() => (
      <List>
        <List.Item>Item One</List.Item>
        <List.Item>Item Two</List.Item>
      </List>
    ))
  )
  .addWithJSX(
    'basic List with icons',
    wInfo(`

  ### Notes

  This is a <List /> using icons

  ### Usage
  ~~~js
  <List>
    <List.Item>
      <List.Icon name="fas fa-adjust" />
      <List.Content>Item One</List.Content>
    </List.Item>
  </List>
  ~~~`)(() => (
      <List>
        <List.Item>
          <List.Icon name="fas fa-adjust" />
          <List.Content>Item One</List.Content>
        </List.Item>
      </List>
    ))
  )
  .addWithJSX(
    'basic List with headers',
    wInfo(`

  ### Notes

  This is a <List /> using headers

  ### Usage
  ~~~js
  <List>
    <List.Item>
      <List.Header />
      <List.Content>Item One</List.Content>
    </List.Item>
  </List>
  ~~~`)(() => (
      <List>
        <List.Item>
          <List.Header>Heading for Item One</List.Header>
          List Item One
        </List.Item>
        <List.Item>
          <List.Header>Heading for Item Two</List.Header>
          List Item Two
        </List.Item>
      </List>
    ))
  )
  .addWithJSX(
    'basic List with dividers',
    wInfo(`

  ### Notes

  This is a divided <List />

  ### Usage
  ~~~js
  <List divided>
    <List.Item>List Item One</List.Item>
    <List.Item>List Item Two</List.Item>
  </List>
  ~~~`)(() => (
      <List divided>
        <List.Item>List Item One</List.Item>
        <List.Item>List Item Two</List.Item>
      </List>
    ))
  );
