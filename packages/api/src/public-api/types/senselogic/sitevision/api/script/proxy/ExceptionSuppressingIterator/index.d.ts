/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */

import type { ExceptionSuppressingProxy } from "../ExceptionSuppressingProxy";

import type { Iterator } from "../../../../../../java/util/Iterator";

/**
 * Deprecated interface that will be removed in a future version of Sitevision.
 * @author Magnus Lövgren
 * @since Sitevision 2.6.1_09
 * @deprecated this interface is deprecated and will be removed in a future version of Sitevision
 */
export type ExceptionSuppressingIterator = Iterator & {
  /**
   * Returns <code>true</code> if decorated iterator has more elements. (In other words, returns <code>true</code>
   *  if <code>next</code> would return an element rather than throwing an exception.)
   *
   *  <p>
   *     This method will never throw an exception
   *  </p>
   * @return <code>true</code> if the decorated iterator has more elements, <code>false</code> if not or if an exception is thrown&#xA; by the decorated iterator
   */
  hasNext(): boolean;

  /**
   * Returns a ExceptionSuppressingProxy for the next element of the decorated iterator.
   * @return the next element of the decorated iterator, or <code>null</code> if an exception is thrown.
   */
  next(): ExceptionSuppressingProxy;

  /**
 * Tries to remove from the decorated iterator.
 *  <p>
 *     This method will never throw an exception.
 *  </p>
  
    */
  remove(): void;
};
