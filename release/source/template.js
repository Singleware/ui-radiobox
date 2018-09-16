"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Template_1;
"use strict";
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const DOM = require("@singleware/jsx");
const Control = require("@singleware/ui-control");
/**
 * Radiobox template class.
 */
let Template = Template_1 = class Template extends Control.Component {
    /**
     * Default constructor.
     * @param properties Radiobox properties.
     * @param children Radiobox children.
     */
    constructor(properties, children) {
        super(properties, children);
        /**
         * Radiobox states.
         */
        this.states = {
            name: ''
        };
        /**
         * Input element.
         */
        this.input = DOM.create("input", { type: "radio" });
        /**
         * Mark element.
         */
        this.markSlot = DOM.create("slot", { name: "mark", class: "mark" });
        /**
         * Radiobox element.
         */
        this.radiobox = (DOM.create("label", { class: "radiobox" },
            this.input,
            this.markSlot));
        /**
         * Radiobox styles.
         */
        this.styles = (DOM.create("style", null, `:host {
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
}`));
        /**
         * Radiobox skeleton.
         */
        this.skeleton = (DOM.create("div", { slot: this.properties.slot, class: this.properties.class }, this.children));
        DOM.append(this.skeleton.attachShadow({ mode: 'closed' }), this.styles, this.radiobox);
        this.bindHandlers();
        this.bindProperties();
        this.assignProperties();
    }
    /**
     * Enable or disable the specified property in this elements.
     * @param property Property name.
     * @param state Determines whether the property must be enabled or disabled.
     */
    setDataProperty(property, state) {
        if (state) {
            this.skeleton.dataset[property] = 'on';
        }
        else {
            delete this.skeleton.dataset[property];
        }
    }
    /**
     * Click event handler.
     * @param event Event information.
     */
    clickHandler(event) {
        if (this.input.readOnly) {
            event.preventDefault();
        }
        else {
            const last = Template_1.groups[this.group];
            if (last !== this.skeleton) {
                if (last) {
                    last.checked = false;
                    Template_1.notifyChanges(last);
                }
                this.setDataProperty('checked', true);
                Template_1.groups[this.group] = this.skeleton;
                Template_1.notifyChanges(this.skeleton);
            }
        }
    }
    /**
     * Bind event handlers to update the custom element.
     */
    bindHandlers() {
        this.input.addEventListener('click', this.clickHandler.bind(this));
    }
    /**
     * Bind exposed properties to the custom element.
     */
    bindProperties() {
        Object.defineProperties(this.skeleton, {
            name: super.bindDescriptor(this, Template_1.prototype, 'name'),
            group: super.bindDescriptor(this, Template_1.prototype, 'group'),
            value: super.bindDescriptor(this, Template_1.prototype, 'value'),
            checked: super.bindDescriptor(this, Template_1.prototype, 'checked'),
            defaultValue: super.bindDescriptor(this, Template_1.prototype, 'defaultValue'),
            defaultChecked: super.bindDescriptor(this, Template_1.prototype, 'defaultChecked'),
            required: super.bindDescriptor(this, Template_1.prototype, 'required'),
            readOnly: super.bindDescriptor(this, Template_1.prototype, 'readOnly'),
            disabled: super.bindDescriptor(this, Template_1.prototype, 'disabled')
        });
    }
    /**
     * Assign all element properties.
     */
    assignProperties() {
        Control.assignProperties(this, this.properties, ['name', 'group', 'value', 'checked', 'required', 'readOnly', 'disabled']);
    }
    /**
     * Get radiobox name.
     */
    get name() {
        return this.states.name;
    }
    /**
     * Set radiobox name.
     */
    set name(name) {
        this.states.name = name;
    }
    /**
     * Get radiobox group.
     */
    get group() {
        return this.input.name;
    }
    /**
     * Set radiobox group.
     */
    set group(name) {
        this.input.name = name;
    }
    /**
     * Get radiobox value.
     */
    get value() {
        return this.checked ? this.input.value : void 0;
    }
    /**
     * Set radiobox value.
     */
    set value(value) {
        this.input.value = value;
    }
    /**
     * Get checked state.
     */
    get checked() {
        return this.input.checked;
    }
    /**
     * Set checked state.
     */
    set checked(state) {
        if (this.group) {
            const last = Template_1.groups[this.group];
            if (state) {
                if (last && last !== this.skeleton) {
                    last.checked = false;
                }
                Template_1.groups[this.group] = this.skeleton;
            }
            else if (last === this.skeleton) {
                Template_1.groups[this.group] = void 0;
            }
        }
        this.setDataProperty('checked', (this.input.checked = state));
    }
    /**
     * Get default radiobox value.
     */
    get defaultValue() {
        return this.properties.value || 'on';
    }
    /**
     * Get default checked state.
     */
    get defaultChecked() {
        return this.properties.checked || false;
    }
    /**
     * Get required state.
     */
    get required() {
        return this.input.required;
    }
    /**
     * Set required state.
     */
    set required(state) {
        this.setDataProperty('required', state);
        this.input.required = state;
    }
    /**
     * Get read-only state.
     */
    get readOnly() {
        return this.input.readOnly;
    }
    /**
     * Set read-only state.
     */
    set readOnly(state) {
        this.setDataProperty('readonly', state);
        this.input.readOnly = state;
    }
    /**
     * Get disabled state.
     */
    get disabled() {
        return this.input.disabled;
    }
    /**
     * Set disabled state.
     */
    set disabled(state) {
        this.setDataProperty('disabled', state);
        this.input.disabled = state;
    }
    /**
     * Radiobox element.
     */
    get element() {
        return this.skeleton;
    }
    /**
     * Reset the radiobox to its initial value and state.
     */
    reset() {
        this.value = this.defaultValue;
        this.checked = this.defaultChecked;
    }
    /**
     * Notify element changes.
     */
    static notifyChanges(element) {
        if (document.body.contains(element)) {
            element.dispatchEvent(new Event('change', { bubbles: true, cancelable: false }));
        }
    }
};
/**
 * Radiobox groups.
 */
Template.groups = {};
__decorate([
    Class.Private()
], Template.prototype, "states", void 0);
__decorate([
    Class.Private()
], Template.prototype, "input", void 0);
__decorate([
    Class.Private()
], Template.prototype, "markSlot", void 0);
__decorate([
    Class.Private()
], Template.prototype, "radiobox", void 0);
__decorate([
    Class.Private()
], Template.prototype, "styles", void 0);
__decorate([
    Class.Private()
], Template.prototype, "skeleton", void 0);
__decorate([
    Class.Protected()
], Template.prototype, "setDataProperty", null);
__decorate([
    Class.Private()
], Template.prototype, "clickHandler", null);
__decorate([
    Class.Private()
], Template.prototype, "bindHandlers", null);
__decorate([
    Class.Private()
], Template.prototype, "bindProperties", null);
__decorate([
    Class.Private()
], Template.prototype, "assignProperties", null);
__decorate([
    Class.Public()
], Template.prototype, "name", null);
__decorate([
    Class.Public()
], Template.prototype, "group", null);
__decorate([
    Class.Public()
], Template.prototype, "value", null);
__decorate([
    Class.Public()
], Template.prototype, "checked", null);
__decorate([
    Class.Public()
], Template.prototype, "defaultValue", null);
__decorate([
    Class.Public()
], Template.prototype, "defaultChecked", null);
__decorate([
    Class.Public()
], Template.prototype, "required", null);
__decorate([
    Class.Public()
], Template.prototype, "readOnly", null);
__decorate([
    Class.Public()
], Template.prototype, "disabled", null);
__decorate([
    Class.Public()
], Template.prototype, "element", null);
__decorate([
    Class.Public()
], Template.prototype, "reset", null);
__decorate([
    Class.Private()
], Template, "groups", void 0);
__decorate([
    Class.Private()
], Template, "notifyChanges", null);
Template = Template_1 = __decorate([
    Class.Describe()
], Template);
exports.Template = Template;
