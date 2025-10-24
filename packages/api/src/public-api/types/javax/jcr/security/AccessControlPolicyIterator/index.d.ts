/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { AccessControlPolicy } from "../AccessControlPolicy";
import type { RangeIterator } from "../../RangeIterator";

/**
 * Allows easy iteration through a list of <code>AccessControlPolicy</code>s
 *  with <code>nextAccessControlPolicy</code> as well as a <code>skip</code>
 *  method inherited from <code>RangeIterator</code>.
 *
 *  <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since JCR 2.0
 */
export type AccessControlPolicyIterator = RangeIterator & {
  /**
   * Returns the next <code>AccessControlPolicy</code> in the iteration.
   * @return the next <code>AccessControlPolicy</code> in the iteration.
   * @throws java.util.NoSuchElementException&#xA; if iteration has no more&#xA; <code>AccessControlPolicy</code>s.
   */
  nextAccessControlPolicy(): AccessControlPolicy;
};
