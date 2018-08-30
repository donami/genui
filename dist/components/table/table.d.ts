import * as React from 'react';
export declare type TableItem = {
    [key: string]: any;
};
export interface TableProps {
    headings: string[];
    items: TableItem[];
}
declare class Table extends React.Component<TableProps> {
    render(): JSX.Element;
}
export default Table;
