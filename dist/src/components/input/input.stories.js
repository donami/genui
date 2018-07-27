import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './input';
import { wInfo } from '../../../utils';
storiesOf('Components/Input', module).addWithJSX('basic Input', wInfo("\n\n  ### Notes\n\n  This is a standard <Input />\n\n  ### Usage\n  ~~~js\n  <Input />\n  ~~~")(function () { return React.createElement(Input, { placeholder: "hello" }); }));
//# sourceMappingURL=input.stories.js.map