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
     * Enable or disable the specified property in this elements.
     * @param property Property name.
     * @param state Determines whether the property must be enabled or disabled.
     */
    protected setDataProperty(property: string, state: boolean): void;
    /**
     * Toggles this radio by the last toggled radio.
     * @param force Determines whether the same radio must be unchecked.
     * @returns Returns the last radio or undefined when there is no last radio.
     */
    private toggleRadio;
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
     * Radiobox groups.
     */
    private static groups;
    /**
     * Notify element changes.
     */
    private static notifyChanges;
}
