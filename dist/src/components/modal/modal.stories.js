import React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from './modal';
import { wInfo } from '../../../utils';
storiesOf('Components/Modal', module).addWithJSX('basic Modal', wInfo("\n\n  ### Notes\n\n  This is a standard <Modal />\n\n  ### Usage\n  ~~~js\n  <Modal\n    header=\"Modal Header\"\n    trigger={<div>Trigger</div>}\n    content={<div>Content</div>}\n  />\n  ~~~")(function () { return (React.createElement(Modal, { header: "Modal Header", trigger: React.createElement("div", null, "Trigger"), content: React.createElement("div", null, "Content") })); }));
//# sourceMappingURL=modal.stories.js.map