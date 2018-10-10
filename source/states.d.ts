/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Radiobox states interface.
 */
export interface States {
  /**
   * Radiobox name.
   */
  name: string;
  /**
   * Determines whether the radiobox must return status or value.
   */
  statusOnly: boolean;
}
