/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Radiobox properties interface.
 */
export interface Properties {
  /**
   * Radiobox classes.
   */
  class?: string;
  /**
   * Radiobox slot.
   */
  slot?: string;
  /**
   * Radiobox name.
   */
  name?: string;
  /**
   * Radiobox group.
   */
  group?: string;
  /**
   * Radiobox value.
   */
  value?: any;
  /**
   * Determines whether the radiobox is checked or not.
   */
  checked?: boolean;
  /**
   * Determines whether the radiobox is required or not.
   */
  required?: boolean;
  /**
   * Determines whether the radiobox is read-only or not.
   */
  readOnly?: boolean;
  /**
   * Determines whether the radiobox is disabled or not.
   */
  disabled?: boolean;
  /**
   * Radiobox children.
   */
  children?: {};
}
