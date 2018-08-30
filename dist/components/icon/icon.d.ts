import * as React from 'react';
export interface IconProps {
    name: string;
    size?: string;
    color?: string;
    className?: string;
    fixedWidth?: boolean;
}
declare const Icon: React.SFC<IconProps>;
export default Icon;
