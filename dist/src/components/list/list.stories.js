import React from 'react';
import { storiesOf } from '@storybook/react';
import List from './list';
import { wInfo } from '../../../utils';
storiesOf('Components/List', module)
    .addWithJSX('basic List', wInfo("\n\n  ### Notes\n\n  This is a standard <List />\n\n  ### Usage\n  ~~~js\n  <List>\n    <List.Item>Item One</List.Item>\n    <List.Item>Item Two</List.Item>\n  </List>\n  ~~~")(function () { return (React.createElement(List, null,
    React.createElement(List.Item, null, "Item One"),
    React.createElement(List.Item, null, "Item Two"))); }))
    .addWithJSX('basic List with icons', wInfo("\n\n  ### Notes\n\n  This is a <List /> using icons\n\n  ### Usage\n  ~~~js\n  <List>\n    <List.Item>\n      <List.Icon name=\"fas fa-adjust\" />\n      <List.Content>Item One</List.Content>\n    </List.Item>\n  </List>\n  ~~~")(function () { return (React.createElement(List, null,
    React.createElement(List.Item, null,
        React.createElement(List.Icon, { name: "fas fa-adjust" }),
        React.createElement(List.Content, null, "Item One")))); }))
    .addWithJSX('basic List with headers', wInfo("\n\n  ### Notes\n\n  This is a <List /> using headers\n\n  ### Usage\n  ~~~js\n  <List>\n    <List.Item>\n      <List.Header />\n      <List.Content>Item One</List.Content>\n    </List.Item>\n  </List>\n  ~~~")(function () { return (React.createElement(List, null,
    React.createElement(List.Item, null,
        React.createElement(List.Header, null, "Heading for Item One"),
        "List Item One"),
    React.createElement(List.Item, null,
        React.createElement(List.Header, null, "Heading for Item Two"),
        "List Item Two"))); }))
    .addWithJSX('basic List with dividers', wInfo("\n\n  ### Notes\n\n  This is a divided <List />\n\n  ### Usage\n  ~~~js\n  <List divided>\n    <List.Item>List Item One</List.Item>\n    <List.Item>List Item Two</List.Item>\n  </List>\n  ~~~")(function () { return (React.createElement(List, { divided: true },
    React.createElement(List.Item, null, "List Item One"),
    React.createElement(List.Item, null, "List Item Two"))); }));
//# sourceMappingURL=list.stories.js.map