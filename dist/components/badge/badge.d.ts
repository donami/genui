export declare type Props = {
    color?: keyof typeof colors;
    size?: keyof typeof sizes;
    circular?: boolean;
    as?: string;
    to?: string;
};
export declare const sizes: {
    mini: number;
    tiny: number;
    small: number;
    medium: number;
    large: number;
    big: number;
    huge: number;
    massive: number;
};
export declare const colors: {
    red: string;
    orange: string;
    yellow: string;
    olive: string;
    green: string;
    teal: string;
    blue: string;
    violet: string;
    purple: string;
    pink: string;
    brown: string;
    grey: string;
    black: string;
};
export declare const StyledBadge: import("../../../node_modules/styled-components/typings/styled-components").StyledComponentClass<Props, import("../../styled/theme").default, Pick<Props, "color" | "size" | "to" | "circular" | "as"> & {
    theme?: import("../../styled/theme").default | undefined;
} & Props>;
export default StyledBadge;
