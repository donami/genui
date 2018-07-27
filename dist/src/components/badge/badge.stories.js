import React from 'react';
import { storiesOf } from '@storybook/react';
import Badge from './badge';
import { wInfo } from '../../../utils';
storiesOf('Components/Badge', module).addWithJSX('basic Badge', wInfo("\n\n  ### Notes\n\n  This is a standard <Badge>\n\n  ### Usage\n  ~~~js\n  <Badge>Badge</Badge>\n  ~~~")(function () { return React.createElement(Badge, { color: "blue" }, "Badge"); }));
//# sourceMappingURL=badge.stories.js.map