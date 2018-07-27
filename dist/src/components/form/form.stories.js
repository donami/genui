import React from 'react';
import { storiesOf } from '@storybook/react';
import Field from './field';
import Input from '../input';
import { wInfo } from '../../../utils';
storiesOf('Components/Form', module).addWithJSX('basic Field', wInfo("\n\n  ### Notes\n\n  This is a standard <Field />\n\n  ### Usage\n  ~~~js\n  <Field />\n  ~~~")(function () { return (React.createElement(Field, null,
    React.createElement("label", null, "Email"),
    React.createElement(Input, { placeholder: "john@email.com" }))); }));
//# sourceMappingURL=form.stories.js.map