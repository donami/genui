import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './heading';
import { wInfo } from '../../../utils';
storiesOf('Components/Heading', module).addWithJSX('basic Heading', wInfo("\n\n  ### Notes\n\n  This is a standard <Heading />\n\n  ### Usage\n  ~~~js\n  <Heading as=\"h1\">Page Heading</Heading>\n  ~~~")(function () { return React.createElement(Heading, { as: "h1" }, "Page Heading"); }));
//# sourceMappingURL=heading.stories.js.map