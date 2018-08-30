declare type Props = {
    dividing?: boolean;
    floated?: string;
    as: string;
};
declare const Heading: import("../../../node_modules/styled-components/typings/styled-components").StyledComponentClass<Props, import("../../styled/theme").default, Pick<Props, "dividing" | "floated" | "as"> & {
    theme?: import("../../styled/theme").default | undefined;
} & Props>;
export default Heading;
