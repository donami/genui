import React from 'react';
import { storiesOf } from '@storybook/react';
import Dropdown from './dropdown';
import { wInfo } from '../../../utils';
var items = [
    {
        title: 'A menu item',
    },
    {
        title: 'Another item',
    },
];
storiesOf('Components/Dropdown', module).addWithJSX('basic Dropdown', wInfo("\n\n  ### Notes\n\n  This is a standard <Dropdown />\n\n  ### Usage\n  ~~~js\n\n  const items = [\n    {\n      title: 'A menu item',\n    },\n    {\n      title: 'Another item',\n    },\n  ];\n\n  <Dropdown\n    items={items}\n    renderItem={item => <React.Fragment>{item.title}</React.Fragment>}\n  > \n    John Doe\n  </Dropdown>\n\n  ~~~")(function () { return (React.createElement(Dropdown, { items: items, renderItem: function (item) { return (React.createElement(React.Fragment, null,
        React.createElement("a", { href: "#" }, item.title))); } }, "John Doe")); }));
//# sourceMappingURL=dropdown.stories.js.map