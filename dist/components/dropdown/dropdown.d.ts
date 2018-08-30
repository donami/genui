import * as React from 'react';
export declare type Props = {
    renderItem: (item: any) => any;
    items: any[];
    className?: string;
};
export declare type State = {
    active: boolean;
};
declare class Dropdown extends React.Component<Props, State> {
    state: State;
    node: HTMLElement | null;
    componentWillMount(): void;
    componentWillUnmount(): void;
    handleClick: (e: any) => void;
    handleToggle: () => void;
    renderItems: () => any[];
    render(): JSX.Element;
}
export default Dropdown;
