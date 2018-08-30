import React from 'react';
import { storiesOf } from '@storybook/react';
import TableList from './table-list';
import { wInfo } from '../../../utils';
storiesOf('Components/TableList', module).addWithJSX('basic Table List', wInfo("\n\n  ### Notes\n\n  This is a table\n\n  ### Usage\n  ~~~js\n  const timesheets = [\n    {\n      id: <a href=\"/\">82131</a>,\n      periodEnd: '30-Jun-2018',\n      status: 'saved',\n    },\n  ];\n\n  <TableList\n    headings={['ID', 'Period End', 'Status']} \n    items={timesheets}\n  />\n  ~~~")(function () {
    var timesheets = [
        {
            id: React.createElement("a", { href: "/" }, "82131"),
            periodEnd: '30-Jun-2018',
            status: 'saved',
        },
    ];
    return (React.createElement(TableList, { headings: ['ID', 'Period End', 'Status'], items: timesheets }));
}));
//# sourceMappingURL=table-list.stories.js.map