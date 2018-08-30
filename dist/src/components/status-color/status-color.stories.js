import React from 'react';
import { storiesOf } from '@storybook/react';
import StatusColor from './status-color';
import { wInfo } from '../../../utils';
storiesOf('Components/StatusColor', module)
    .addWithJSX('basic StatusColor', wInfo("\n\n  ### Notes\n\n  This is a standard <StatusColor />\n\n  ### Usage\n  ~~~js\n  <StatusColor />\n  ~~~")(function () { return React.createElement(StatusColor, null); }))
    .addWithJSX('info StatusColor', wInfo("\n\n  ### Notes\n\n  This is a info <StatusColor />\n\n  ### Usage\n  ~~~js\n  <StatusColor info />\n  ~~~")(function () { return React.createElement(StatusColor, { info: true }); }))
    .addWithJSX('positive StatusColor', wInfo("\n\n  ### Notes\n\n  This is a positive <StatusColor />\n\n  ### Usage\n  ~~~js\n  <StatusColor positive />\n  ~~~")(function () { return React.createElement(StatusColor, { positive: true }); }))
    .addWithJSX('negative StatusColor', wInfo("\n\n  ### Notes\n\n  This is a negative <StatusColor />\n\n  ### Usage\n  ~~~js\n  <StatusColor negative />\n  ~~~")(function () { return React.createElement(StatusColor, { negative: true }); }));
//# sourceMappingURL=status-color.stories.js.map