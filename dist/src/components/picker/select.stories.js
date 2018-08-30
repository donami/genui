import React from 'react';
import { storiesOf } from '@storybook/react';
import Picker from './picker';
import { wInfo } from '../../../utils';
var items = [
    {
        value: 'angular',
        label: 'Angular',
    },
    {
        value: 'css',
        label: 'CSS',
    },
    {
        value: 'react',
        label: 'React',
    },
    {
        value: 'design',
        label: 'Design',
    },
];
storiesOf('Components/Picker', module).addWithJSX('basic Picker', wInfo("\n\n  ### Notes\n\n  This is a standard <Picker />\n\n  ### Usage\n  ~~~js\n  <Picker items={items} />\n  ~~~")(function () { return React.createElement(Picker, { items: items }); }));
//# sourceMappingURL=select.stories.js.map