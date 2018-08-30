"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 *
 * The proposal of this example is to show how to use the basic radiobox element.
 */
const Radiobox = require("../source");
const DOM = require("@singleware/jsx");
const field = (DOM.create(Radiobox.Template, { group: "example" },
    DOM.create("div", { slot: "mark" })));
// Change disabled property of the element.
field.disabled = true;
// Change read-only property of the element.
field.readOnly = true;
// Change required property of the element.
field.required = true;
// Change name property of the element.
field.name = 'new-name';
// Change group property of the element.
field.group = 'new-group';
// Change value property of the element.
field.value = '1';
