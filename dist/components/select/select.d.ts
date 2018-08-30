import * as React from 'react';
export interface SelectItem {
    value: string;
    label: string;
}
export interface SelectProps {
    items: SelectItem[];
    name?: string;
    defaultSelected?: SelectItem[];
    placeholder?: string;
    onChange?: (selected: SelectItem[]) => any;
}
export interface SelectState {
    selected: SelectItem[];
    expanded: boolean;
    dirty: boolean;
    filter: string;
    active: boolean;
}
declare class Select extends React.Component<SelectProps, SelectState> {
    state: SelectState;
    private inputElem;
    componentWillMount(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: any): void;
    clickListener: (event: any) => void;
    handleSelect: (item: SelectItem) => void;
    handleExpand(show: boolean): void;
    handleInputChange: () => void;
    searchFilter: (item: SelectItem) => boolean;
    render(): JSX.Element;
}
export default Select;
