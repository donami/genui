import * as React from 'react';
export interface BoxProps {
    title: string;
}
declare class Box extends React.Component<BoxProps> {
    render(): JSX.Element;
}
export default Box;
