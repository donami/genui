import * as React from 'react';
export declare type Props = {};
export declare type State = {
    dirty: boolean;
};
declare class Input extends React.Component<Props, State> {
    state: State;
    render(): JSX.Element;
}
export declare const StyledInput: import("../../../node_modules/styled-components/typings/styled-components").StyledComponentClass<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, import("../../styled/theme").default, React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>;
export default Input;
