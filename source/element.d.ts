/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Radiobox element interface.
 */
export interface Element extends HTMLDivElement {
  /**
   * Radiobox name.
   */
  name: string;
  /**
   * Radiobox group.
   */
  group: string;
  /**
   * Radiobox value.
   */
  value: any;
  /**
   * Radiobox state.
   */
  checked: boolean;
  /**
   * Default radiobox value.
   */
  readonly defaultValue: any;
  /**
   * Default checked state.
   */
  readonly defaultChecked: boolean;
  /**
   * Required state.
   */
  required: boolean;
  /**
   * Read-only state.
   */
  readOnly: boolean;
  /**
   * Disabled state.
   */
  disabled: boolean;
  /**
   * Status-only state.
   */
  statusOnly?: boolean;
}
