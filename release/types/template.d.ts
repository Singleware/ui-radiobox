import * as Control from '@singleware/ui-control';
import { Properties } from './properties';
import { Element } from './element';
/**
 * Radiobox template class.
 */
export declare class Template extends Control.Component<Properties> {
    /**
     * Radiobox states.
     */
    private states;
    /**
     * Input element.
     */
    private input;
    /**
     * Mark element.
     */
    private markSlot;
    /**
     * Radiobox element.
     */
    private radiobox;
    /**
     * Radiobox styles.
     */
    private styles;
    /**
     * Radiobox skeleton.
     */
    private skeleton;
    /**
     * Radiobox elements.
     */
    private elements;
    /**
     * Enable or disable the specified property in the mark elements.
     * @param property Property name.
     * @param state Determines whether the property must be enabled or disabled.
     */
    private setMarkProperty;
    /**
     * Uncheck the last radiobox in the same group.
     */
    private uncheckLast;
    /**
     * Click event handler.
     * @param event Event information.
     */
    private clickHandler;
    /**
     * Bind event handlers to update the custom element.
     */
    private bindHandlers;
    /**
     * Bind exposed properties to the custom element.
     */
    private bindProperties;
    /**
     * Assign all element properties.
     */
    private assignProperties;
    /**
     * Default constructor.
     * @param properties Radiobox properties.
     * @param children Radiobox children.
     */
    constructor(properties?: Properties, children?: any[]);
    /**
     * Get radiobox name.
     */
    /**
    * Set radiobox name.
    */
    name: string;
    /**
     * Get radiobox group.
     */
    /**
    * Set radiobox group.
    */
    group: string;
    /**
     * Get radiobox value.
     */
    /**
    * Set radiobox value.
    */
    value: any;
    /**
     * Get checked state.
     */
    /**
    * Set checked state.
    */
    checked: boolean;
    /**
     * Get required state.
     */
    /**
    * Set required state.
    */
    required: boolean;
    /**
     * Get read-only state.
     */
    /**
    * Set read-only state.
    */
    readOnly: boolean;
    /**
     * Get disabled state.
     */
    /**
    * Set disabled state.
    */
    disabled: boolean;
    /**
     * Radiobox element.
     */
    readonly element: Element;
    /**
     * Radio button groups.
     */
    private static groups;
}
