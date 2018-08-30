/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as DOM from '@singleware/jsx';
import * as Control from '@singleware/ui-control';

import { Properties } from './properties';
import { Element } from './element';

/**
 * Radiobox template class.
 */
@Class.Describe()
export class Template extends Control.Component<Properties> {
  /**
   * Radiobox states.
   */
  @Class.Private()
  private states = {
    name: ''
  };

  /**
   * Input element.
   */
  @Class.Private()
  private input: HTMLInputElement = <input type="radio" /> as HTMLInputElement;

  /**
   * Mark element.
   */
  @Class.Private()
  private markSlot: HTMLSlotElement = <slot name="mark" class="mark" /> as HTMLSlotElement;

  /**
   * Radiobox element.
   */
  @Class.Private()
  private radiobox: HTMLLabelElement = (
    <label class="radiobox">
      {this.input}
      {this.markSlot}
    </label>
  ) as HTMLLabelElement;

  /**
   * Radiobox styles.
   */
  @Class.Private()
  private styles: HTMLStyleElement = (
    <style>
      {`:host {
  display: flex;
  flex-direction: row;
}
:host > .radiobox {
  flex-grow: 0;
  flex-shrink: 0;
  user-select: none;
}
:host > .radiobox > input {
  position: absolute;
  opacity: 0;
}
:host > .radiobox > .mark::slotted(*) {
  position: relative;
  border: 0.0625rem solid black;
  border-radius: 50%;
  height: 1.25rem;
  width: 1.25rem;
}
:host > .radiobox > .mark::slotted(*):after {
  display: block;
  position: relative;
  content: '';
  opacity: 0;
  left: 50%;
  top: 50%;
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 100%;
  background-color: black;
  transform: translate(-50%, -50%); 
  z-index: 1;
}
:host > .radiobox > input:checked ~ .mark::slotted(*):after {
  opacity: 1;
}`}
    </style>
  ) as HTMLStyleElement;

  /**
   * Radiobox skeleton.
   */
  @Class.Private()
  private skeleton: Element = (
    <div slot={this.properties.slot} class={this.properties.class}>
      {this.children}
    </div>
  ) as Element;

  /**
   * Radiobox elements.
   */
  @Class.Private()
  private elements: ShadowRoot = DOM.append(this.skeleton.attachShadow({ mode: 'closed' }), this.styles, this.radiobox) as ShadowRoot;

  /**
   * Enable or disable the specified property in this elements.
   * @param property Property name.
   * @param state Determines whether the property must be enabled or disabled.
   */
  @Class.Protected()
  protected setDataProperty(property: string, state: boolean): void {
    if (state) {
      this.skeleton.dataset[property] = 'on';
    } else {
      delete this.skeleton.dataset[property];
    }
  }

  /**
   * Toggles this radio by the last toggled radio.
   * @param force Determines whether the same radio must be unchecked.
   * @returns Returns the last radio or undefined when there is no last radio.
   */
  @Class.Private()
  private toggleRadio(force: boolean): Element | undefined {
    const last = Template.groups[this.group];
    if (last === this.skeleton) {
      if (force) {
        Template.groups[this.group] = void 0;
      }
    } else {
      if (last) {
        last.checked = false;
      }
      Template.groups[this.group] = this.skeleton;
    }
    return last;
  }

  /**
   * Click event handler.
   * @param event Event information.
   */
  @Class.Private()
  private clickHandler(event: Event): void {
    if (this.input.readOnly) {
      event.preventDefault();
    } else {
      const last = this.toggleRadio(false);
      if (last !== this.skeleton) {
        if (last) {
          Template.notifyChanges(last);
        }
        this.setDataProperty('checked', true);
        Template.notifyChanges(this.skeleton);
      }
    }
  }

  /**
   * Bind event handlers to update the custom element.
   */
  @Class.Private()
  private bindHandlers(): void {
    this.input.addEventListener('click', this.clickHandler.bind(this));
  }

  /**
   * Bind exposed properties to the custom element.
   */
  @Class.Private()
  private bindProperties(): void {
    Object.defineProperties(this.skeleton, {
      name: super.bindDescriptor(this, Template.prototype, 'name'),
      group: super.bindDescriptor(this, Template.prototype, 'group'),
      value: super.bindDescriptor(this, Template.prototype, 'value'),
      checked: super.bindDescriptor(this, Template.prototype, 'checked'),
      required: super.bindDescriptor(this, Template.prototype, 'required'),
      readOnly: super.bindDescriptor(this, Template.prototype, 'readOnly'),
      disabled: super.bindDescriptor(this, Template.prototype, 'disabled')
    });
  }

  /**
   * Assign all element properties.
   */
  @Class.Private()
  private assignProperties(): void {
    Control.assignProperties(this, this.properties, ['name', 'group', 'value', 'checked', 'required', 'readOnly', 'disabled']);
  }

  /**
   * Default constructor.
   * @param properties Radiobox properties.
   * @param children Radiobox children.
   */
  constructor(properties?: Properties, children?: any[]) {
    super(properties, children);
    this.bindHandlers();
    this.bindProperties();
    this.assignProperties();
  }

  /**
   * Get radiobox name.
   */
  @Class.Public()
  public get name(): string {
    return this.states.name;
  }

  /**
   * Set radiobox name.
   */
  public set name(name: string) {
    this.states.name = name;
  }

  /**
   * Get radiobox group.
   */
  @Class.Public()
  public get group(): string {
    return this.input.name;
  }

  /**
   * Set radiobox group.
   */
  public set group(name: string) {
    this.input.name = name;
  }

  /**
   * Get radiobox value.
   */
  @Class.Public()
  public get value(): any {
    return this.checked ? this.input.value : void 0;
  }

  /**
   * Set radiobox value.
   */
  public set value(value: any) {
    this.input.value = value;
  }

  /**
   * Get checked state.
   */
  @Class.Public()
  public get checked(): boolean {
    return this.input.checked;
  }

  /**
   * Set checked state.
   */
  public set checked(state: boolean) {
    this.setDataProperty('checked', state);
    this.input.checked = state;
    this.toggleRadio(!state);
  }

  /**
   * Get required state.
   */
  @Class.Public()
  public get required(): boolean {
    return this.input.required;
  }

  /**
   * Set required state.
   */
  public set required(state: boolean) {
    this.setDataProperty('required', state);
    this.input.required = state;
  }

  /**
   * Get read-only state.
   */
  @Class.Public()
  public get readOnly(): boolean {
    return this.input.readOnly;
  }

  /**
   * Set read-only state.
   */
  public set readOnly(state: boolean) {
    this.setDataProperty('readonly', state);
    this.input.readOnly = state;
  }

  /**
   * Get disabled state.
   */
  @Class.Public()
  public get disabled(): boolean {
    return this.input.disabled;
  }

  /**
   * Set disabled state.
   */
  public set disabled(state: boolean) {
    this.setDataProperty('disabled', state);
    this.input.disabled = state;
  }

  /**
   * Radiobox element.
   */
  @Class.Public()
  public get element(): Element {
    return this.skeleton;
  }

  /**
   * Radiobox groups.
   */
  @Class.Private()
  private static groups = {} as any;

  /**
   * Notify element changes.
   */
  @Class.Private()
  private static notifyChanges(element: Element): void {
    if (document.body.contains(element)) {
      element.dispatchEvent(new Event('change', { bubbles: true, cancelable: false }));
    }
  }
}
