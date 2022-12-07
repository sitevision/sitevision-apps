/**
 * Extends <code>Iterator</code> with the <code>skip</code>,
 * <code>getSize</code> and <code>getPosition</code> methods. The base interface
 * of all type-specific iterators in the <code>javax.jcr</code> and its sub
 * packages.
  
    */
interface RangeIterator {
  /**
   * Skip a number of elements in the iterator.
   *
   * <p>
   *    <strong>Sitevision note:</strong> Unsupported operation
   * </p>
   * @param skipNum the non-negative number of elements to skip
   * @throws java.util.NoSuchElementException if skipped past the last element in the iterator.
   */
  skip(skipNum: number): void;

  /**
   * Returns the total number of of items available through this iterator. For
   * example, for some node <code>N</code>, <code>N.getNodes().getSize()</code>
   * returns the number of child nodes of <code>N</code> visible through the
   * current <code>Session</code>. In some implementations precise information
   * about the number of elements may not be available. In such cases this
   * method must return -1.
   *
   * <p>
   *    <strong>Sitevision note:</strong> Returns -1 as of Sitevision 3.6. Denoted as 'Unsupported operation'
   *    in prior releases (i.e. throws UnsupportedOperationException).
   * </p>
   * @return a long
   */
  getSize(): number;

  /**
   * Returns the current position within the iterator. The number returned is
   * the 0-based index of the next element in the iterator, i.e. the one that
   * will be returned on the subsequent <code>next</code> call.
   * <p>
   * Note that this method does not check if there is a next element, i.e. an
   * empty iterator will always return 0.
   *
   * <p>
   *    <strong>Sitevision note:</strong> Unsupported operation
   * </p>
   * @return a long
   */
  getPosition(): number;
}

export default RangeIterator;
