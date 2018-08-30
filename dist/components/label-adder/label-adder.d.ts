import * as React from 'react';
export interface LabelAdderProps {
    onChange?: (labels: string[]) => any;
    labels: string[];
    placeholder?: string;
}
declare class LabelAdder extends React.Component<LabelAdderProps> {
    private inputElem;
    /**
     * Event handler for adding a label
     * Dispatches the onChange prop function with the updated label list
     */
    handleAdd: (e: any) => void;
    /**
     * Event handler for removing a label
     */
    handleRemove: (index: number) => void;
    render(): JSX.Element;
}
export default LabelAdder;
