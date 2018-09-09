import React from 'react';
import { storiesOf } from '@storybook/react';
import Confirm from './confirm';
import { wInfo } from '../../../utils';
storiesOf('Components/Confirm', module).addWithJSX('basic Confirm', wInfo("\n\n  ### Notes\n\n  This is a standard <Confirm />\n\n  ### Usage\n  ~~~js\n  <Confirm\n    header=\"Confirm Action\"\n    trigger={<div>Trigger</div>}\n    content={<div>Are you sure?</div>}\n    onActionClick={(e, actionProps) => {\n      if (actionProps.positive) {\n        // Do something\n      }\n      console.log('ActionProps', actionProps);\n    }}\n  />\n  ~~~")(function () { return (React.createElement(Confirm, { header: "Confirm Action", trigger: React.createElement("div", null, "Trigger"), content: React.createElement("div", null, "Are you sure?"), onActionClick: function (e, actionProps) {
        if (actionProps.positive) {
            // Do something
        }
        console.log('ActionProps', actionProps);
    } })); }));
//# sourceMappingURL=confirm.stories.js.map