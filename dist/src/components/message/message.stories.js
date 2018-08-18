import React from 'react';
import { storiesOf } from '@storybook/react';
import Message from './message';
import { wInfo } from '../../../utils';
storiesOf('Components/Message', module).addWithJSX('basic Message', wInfo("\n\n  ### Notes\n\n  This is a standard <Message />\n\n  ### Usage\n  ~~~js\n  <Message>\n    <Message.Header>Message Header</Message.Header>\n    <p>Message content</p>\n  </Message>\n  ~~~")(function () { return (React.createElement(Message, null,
    React.createElement(Message.Header, null, "Message Header"),
    React.createElement("p", null, "Message content"))); }));
//# sourceMappingURL=message.stories.js.map