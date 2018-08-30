import React from 'react';

import { storiesOf } from '@storybook/react';
import TableList from './table-list';
import { wInfo } from '../../../utils';
import { text, boolean } from '@storybook/addon-knobs/react';

storiesOf('Components/TableList', module).addWithJSX(
  'basic Table List',
  wInfo(`

  ### Notes

  This is a table

  ### Usage
  ~~~js
  const timesheets = [
    {
      id: <a href="/">82131</a>,
      periodEnd: '30-Jun-2018',
      status: 'saved',
    },
  ];

  <TableList
    headings={['ID', 'Period End', 'Status']} 
    items={timesheets}
  />
  ~~~`)(() => {
    const timesheets = [
      {
        id: <a href="/">82131</a>,
        periodEnd: '30-Jun-2018',
        status: 'saved',
      },
    ];

    return (
      <TableList headings={['ID', 'Period End', 'Status']} items={timesheets} />
    );
  })
);
