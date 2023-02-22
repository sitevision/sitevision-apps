import type { Row } from "../Row";
import type { RangeIterator } from "../../RangeIterator";

/**
 * Allows easy iteration through a list of <code>Row</code>s with
 * <code>nextRow</code> as well as a <code>skip</code> method inherited from
 * <code>RangeIterator</code>.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
  
    */
export type RowIterator = RangeIterator & {
  /**
   * Returns the next <code>Row</code> in the iteration.
   * @return the next <code>Row</code> in the iteration.
   * @throws java.util.NoSuchElementException&#xA; if iteration has no more&#xA; <code>Row</code>s.
   */
  nextRow(): Row;
};
