export interface Props {
    color?: string;
    size?: string;
    icon?: string;
    disabled?: boolean;
    circular?: boolean;
    onClick?: () => void;
    children: any;
    to?: string;
}
export declare const StyledButton: import("../../../node_modules/styled-components/typings/styled-components").StyledComponentClass<Props, any, Pick<Props, "disabled" | "color" | "size" | "icon" | "children" | "onClick" | "to" | "circular"> & {
    theme?: any;
}>;
export default StyledButton;
