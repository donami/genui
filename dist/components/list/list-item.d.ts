declare type Props = {
    className?: string;
    divided: boolean;
};
declare const StyledListItem: import("../../../node_modules/styled-components/typings/styled-components").StyledComponentClass<Props, import("../../styled/theme").default, Pick<Props, "className" | "divided"> & {
    theme?: import("../../styled/theme").default | undefined;
} & Props>;
export default StyledListItem;
