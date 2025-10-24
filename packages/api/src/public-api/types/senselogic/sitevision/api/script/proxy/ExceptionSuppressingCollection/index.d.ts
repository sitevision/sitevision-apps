/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { Iterator } from "../../../../../../java/util/Iterator";
import type { Collection } from "../../../../../../java/util/Collection";

/**
 * Deprecated interface that will be removed in a future version of Sitevision.
 * @author Magnus Lövgren
 * @since Sitevision 2.6.1_09
 * @deprecated this interface is deprecated and will be removed in a future version of Sitevision
 */
export type ExceptionSuppressingCollection = Collection & {
  /**
   * Returns a ExceptionSuppressingProxy Iterator for the decorated collection.
   * @return a {@link ExceptionSuppressingIterator}
   */
  iterator(): Iterator;
};
