import React from 'react';
export declare type Props = {
    negative?: boolean;
    positive?: boolean;
    warning?: boolean;
    info?: boolean;
};
declare class Message extends React.Component<Props> {
    static Header: React.StatelessComponent<{}>;
    render(): JSX.Element;
}
export default Message;
