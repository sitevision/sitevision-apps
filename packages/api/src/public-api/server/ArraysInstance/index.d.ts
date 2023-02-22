/**
 * Instance wrapper for the <code>java.util.Arrays</code> class that delegates all method calls to the corresponding <code>Arrays</code> method.
 *
 * <p>
 *    <em>
 *       Note! Method documentations in this interface are only excerpts. For full documentation, see official <code>java.util.Arrays</code> Javadoc.
 *    </em>
 * </p>
 *
 * <p>
 *    <em>
 *       Tip! You would typically use {@link InstanceCreatorUtil} to create array instances.
 *    </em>
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via {@link InstanceCreatorUtil#getArraysInstance()}.
 *    See {@link InstanceCreatorUtil} for how to obtain an instance of the <code>InstanceCreatorUtil</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.1
 */
export interface ArraysInstance {
  /**
   * Sorts the specified array of longs into ascending numerical order.
   * @param anArray the array to be sorted
   */
  sort(anArray: number): void;

  /**
   * Sorts the specified range of the specified array of longs into
   * ascending numerical order.
   * @param anArray the array to be sorted
   * @param aFromIndex the index of the first element (inclusive) to be sorted
   * @param aToIndex the index of the last element (exclusive) to be sorted
   * @throws IllegalArgumentException if <tt>aFromIndex &gt; aToIndex</tt>
   * @throws ArrayIndexOutOfBoundsException if <tt>aFromIndex &lt; 0</tt> or <tt>aToIndex &gt; anArray.length</tt>
   */
  sort(anArray: number, aFromIndex: number, aToIndex: number): void;

  /**
   * Sorts the specified array of ints into ascending numerical order.
   * @param anArray the array to be sorted
   */
  sort(anArray: number): void;

  /**
   * Sorts the specified range of the specified array of ints into ascending numerical order.
   * @param anArray the array to be sorted
   * @param aFromIndex the index of the first element (inclusive) to be sorted
   * @param aToIndex the index of the last element (exclusive) to be sorted
   * @throws IllegalArgumentException if <tt>aFromIndex &gt; aToIndex</tt>
   * @throws ArrayIndexOutOfBoundsException if <tt>aFromIndex &lt; 0</tt> or <tt>aToIndex &gt; anArray.length</tt>
   */
  sort(anArray: number, aFromIndex: number, aToIndex: number): void;

  /**
   * Sorts the specified array of shorts into ascending numerical order.
   * @param anArray the array to be sorted
   */
  sort(anArray: number): void;

  /**
   * Sorts the specified range of the specified array of shorts into ascending numerical order.
   * @param anArray the array to be sorted
   * @param aFromIndex the index of the first element (inclusive) to be sorted
   * @param aToIndex the index of the last element (exclusive) to be sorted
   * @throws IllegalArgumentException if <tt>aFromIndex &gt; aToIndex</tt>
   * @throws ArrayIndexOutOfBoundsException if <tt>aFromIndex &lt; 0</tt> or <tt>aToIndex &gt; anArray.length</tt>
   */
  sort(anArray: number, aFromIndex: number, aToIndex: number): void;

  /**
   * Sorts the specified array of chars into ascending numerical order.
   * @param anArray the array to be sorted
   */
  sort(anArray: string): void;

  /**
   * Sorts the specified range of the specified array of chars into ascending numerical order.
   * @param anArray the array to be sorted
   * @param aFromIndex the index of the first element (inclusive) to be sorted
   * @param aToIndex the index of the last element (exclusive) to be sorted
   * @throws IllegalArgumentException if <tt>aFromIndex &gt; aToIndex</tt>
   * @throws ArrayIndexOutOfBoundsException if <tt>aFromIndex &lt; 0</tt> or <tt>aToIndex &gt; anArray.length</tt>
   */
  sort(anArray: string, aFromIndex: number, aToIndex: number): void;

  /**
   * Sorts the specified array of bytes into ascending numerical order.
   * @param anArray the array to be sorted
   */
  sort(anArray: unknown): void;

  /**
   * Sorts the specified range of the specified array of bytes into ascending numerical order.
   * @param anArray the array to be sorted
   * @param aFromIndex the index of the first element (inclusive) to be sorted
   * @param aToIndex the index of the last element (exclusive) to be sorted
   * @throws IllegalArgumentException if <tt>aFromIndex &gt; aToIndex</tt>
   * @throws ArrayIndexOutOfBoundsException if <tt>aFromIndex &lt; 0</tt> or <tt>aToIndex &gt; anArray.length</tt>
   */
  sort(anArray: unknown, aFromIndex: number, aToIndex: number): void;

  /**
   * Sorts the specified array of doubles into ascending numerical order.
   * @param anArray the array to be sorted
   */
  sort(anArray: number): void;

  /**
   * Sorts the specified range of the specified array of doubles into ascending numerical order.
   * @param anArray the array to be sorted
   * @param aFromIndex the index of the first element (inclusive) to be sorted
   * @param aToIndex the index of the last element (exclusive) to be sorted
   * @throws IllegalArgumentException if <tt>aFromIndex &gt; aToIndex</tt>
   * @throws ArrayIndexOutOfBoundsException if <tt>aFromIndex &lt; 0</tt> or <tt>aToIndex &gt; anArray.length</tt>
   */
  sort(anArray: number, aFromIndex: number, aToIndex: number): void;

  /**
   * Sorts the specified array of floats into ascending numerical order.
   * @param anArray the array to be sorted
   */
  sort(anArray: number): void;

  /**
   * Sorts the specified range of the specified array of floats into ascending numerical order.
   * @param anArray the array to be sorted
   * @param aFromIndex the index of the first element (inclusive) to be sorted
   * @param aToIndex the index of the last element (exclusive) to be sorted
   * @throws IllegalArgumentException if <tt>aFromIndex &gt; aToIndex</tt>
   * @throws ArrayIndexOutOfBoundsException if <tt>aFromIndex &lt; 0</tt> or <tt>aToIndex &gt; anArray.length</tt>
   */
  sort(anArray: number, aFromIndex: number, aToIndex: number): void;

  /**
   * Sorts the specified array of objects into ascending order, according to the <code>Comparable</code> natural ordering of its elements.
   * @param anArray the array to be sorted
   * @throws ClassCastException if the array contains elements that are not <i>mutually comparable</i> (for example, strings and integers).
   */
  sort(anArray: unknown): void;

  /**
   * Sorts the specified range of the specified array of objects into ascending order, according to the <code>Comparable</code>
   * natural ordering of its elements.
   * @param anArray the array to be sorted
   * @param aFromIndex the index of the first element (inclusive) to be sorted
   * @param aToIndex the index of the last element (exclusive) to be sorted
   * @throws IllegalArgumentException if <tt>aFromIndex &gt; aToIndex</tt>
   * @throws ArrayIndexOutOfBoundsException if <tt>aFromIndex &lt; 0</tt> or&#xA; <tt>aToIndex &gt; anArray.length</tt>
   * @throws ClassCastException if the array contains elements that are not <i>mutually comparable</i>&#xA; (for example, strings and integers).
   */
  sort(anArray: unknown, aFromIndex: number, aToIndex: number): void;

  /**
   * Sorts the specified array of objects according to the order induced by the specified comparator.
   * @param <T> the class of the objects to be sorted
   * @param anArray the array to be sorted
   * @param aComparator the comparator to determine the order of the array. A <tt>null</tt> value indicates that the elements'&#xA; Comparable natural ordering should be used.
   * @throws ClassCastException if the array contains elements that are not <i>mutually comparable</i> using the specified comparator.
   */
  sort(anArray: unknown, aComparator: unknown): void;

  /**
   * Sorts the specified range of the specified array of objects according to the order induced by the specified comparator.
   * @param <T> the class of the objects to be sorted
   * @param anArray the array to be sorted
   * @param aFromIndex the index of the first element (inclusive) to be sorted
   * @param aToIndex the index of the last element (exclusive) to be sorted
   * @param aComparator the comparator to determine the order of the array. A <tt>null</tt> value indicates that the elements'&#xA; Comparable natural ordering should be used.
   * @throws ClassCastException if the array contains elements that are not <i>mutually comparable</i> using the specified comparator.
   * @throws IllegalArgumentException if <tt>aFromIndex &gt; aToIndex</tt>
   * @throws ArrayIndexOutOfBoundsException if <tt>aFromIndex &lt; 0</tt> or <tt>aToIndex &gt; anArray.length</tt>
   */
  sort(
    anArray: unknown,
    aFromIndex: number,
    aToIndex: number,
    aComparator: unknown
  ): void;

  /**
   * Searches the specified array of longs for the specified value using the binary search algorithm.
   * @param anArray the array to be searched
   * @param aKey the value to be searched for
   * @return index of the search key, if it is contained in the array; otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>. The&#xA; <i>insertion point</i> is defined as the point at which the key would be inserted into the array: the index of the first&#xA; element greater than the key, or <tt>anArray.length</tt> if all elements in the array are less than the specified key. Note&#xA; that this guarantees that the return value will be &gt;= 0 if and only if the key is found.
   */
  binarySearch(anArray: number, aKey: number): number;

  /**
   * Searches a range of the specified array of longs for the specified value using the binary search algorithm.
   * @param anArray the array to be searched
   * @param aFromIndex the index of the first element (inclusive) to be searched
   * @param aToIndex the index of the last element (exclusive) to be searched
   * @param aKey the value to be searched for
   * @return index of the search key, if it is contained in the array within the specified range;&#xA; otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>. The <i>insertion point</i> is defined as the point at which the&#xA; key would be inserted into the array: the index of the first element in the range greater than the key,&#xA; or <tt>aToIndex</tt> if all elements in the range are less than the specified key. Note&#xA; that this guarantees that the return value will be &gt;= 0 if and only if the key is found.
   * @throws IllegalArgumentException if {@code aFromIndex > aToIndex}
   * @throws ArrayIndexOutOfBoundsException if {@code aFromIndex < 0 or aToIndex > anArray.length}
   */
  binarySearch(
    anArray: number,
    aFromIndex: number,
    aToIndex: number,
    aKey: number
  ): number;

  /**
   * Searches the specified array of ints for the specified value using the binary search algorithm.
   * @param anArray the array to be searched
   * @param aKey the value to be searched for
   * @return index of the search key, if it is contained in the array; otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>. The&#xA; <i>insertion point</i> is defined as the point at which the key would be inserted into the array: the index of the first&#xA; element greater than the key, or <tt>anArray.length</tt> if all elements in the array are less than the specified key. Note&#xA; that this guarantees that the return value will be &gt;= 0 if and only if the key is found.
   */
  binarySearch(anArray: number, aKey: number): number;

  /**
   * Searches a range of the specified array of ints for the specified value using the binary search algorithm.
   * @param anArray the array to be searched
   * @param aFromIndex the index of the first element (inclusive) to be searched
   * @param aToIndex the index of the last element (exclusive) to be searched
   * @param aKey the value to be searched for
   * @return index of the search key, if it is contained in the array within the specified range;&#xA; otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>. The <i>insertion point</i> is defined as the point at which the&#xA; key would be inserted into the array: the index of the first element in the range greater than the key,&#xA; or <tt>aToIndex</tt> if all elements in the range are less than the specified key. Note&#xA; that this guarantees that the return value will be &gt;= 0 if and only if the key is found.
   * @throws IllegalArgumentException if {@code aFromIndex > aToIndex}
   * @throws ArrayIndexOutOfBoundsException if {@code aFromIndex < 0 or aToIndex > anArray.length}
   */
  binarySearch(
    anArray: number,
    aFromIndex: number,
    aToIndex: number,
    aKey: number
  ): number;

  /**
   * Searches the specified array of shorts for the specified value using the binary search algorithm.
   * @param anArray the array to be searched
   * @param aKey the value to be searched for
   * @return index of the search key, if it is contained in the array; otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>. The&#xA; <i>insertion point</i> is defined as the point at which the key would be inserted into the array: the index of the first&#xA; element greater than the key, or <tt>anArray.length</tt> if all elements in the array are less than the specified key. Note&#xA; that this guarantees that the return value will be &gt;= 0 if and only if the key is found.
   */
  binarySearch(anArray: number, aKey: number): number;

  /**
   * Searches a range of the specified array of shorts for the specified value using the binary search algorithm.
   * @param anArray the array to be searched
   * @param aFromIndex the index of the first element (inclusive) to be searched
   * @param aToIndex the index of the last element (exclusive) to be searched
   * @param aKey the value to be searched for
   * @return index of the search key, if it is contained in the array within the specified range;&#xA; otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>. The <i>insertion point</i> is defined as the point at which the&#xA; key would be inserted into the array: the index of the first element in the range greater than the key,&#xA; or <tt>aToIndex</tt> if all elements in the range are less than the specified key. Note&#xA; that this guarantees that the return value will be &gt;= 0 if and only if the key is found.
   * @throws IllegalArgumentException if {@code aFromIndex > aToIndex}
   * @throws ArrayIndexOutOfBoundsException if {@code aFromIndex < 0 or aToIndex > anArray.length}
   */
  binarySearch(
    anArray: number,
    aFromIndex: number,
    aToIndex: number,
    aKey: number
  ): number;

  /**
   * Searches the specified array of chars for the specified value using the binary search algorithm.
   * @param anArray the array to be searched
   * @param aKey the value to be searched for
   * @return index of the search key, if it is contained in the array; otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>. The&#xA; <i>insertion point</i> is defined as the point at which the key would be inserted into the array: the index of the first&#xA; element greater than the key, or <tt>anArray.length</tt> if all elements in the array are less than the specified key. Note&#xA; that this guarantees that the return value will be &gt;= 0 if and only if the key is found.
   */
  binarySearch(anArray: string, aKey: string): number;

  /**
   * Searches a range of the specified array of chars for the specified value using the binary search algorithm.
   * @param anArray the array to be searched
   * @param aFromIndex the index of the first element (inclusive) to be searched
   * @param aToIndex the index of the last element (exclusive) to be searched
   * @param aKey the value to be searched for
   * @return index of the search key, if it is contained in the array within the specified range;&#xA; otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>. The <i>insertion point</i> is defined as the point at which the&#xA; key would be inserted into the array: the index of the first element in the range greater than the key,&#xA; or <tt>aToIndex</tt> if all elements in the range are less than the specified key. Note&#xA; that this guarantees that the return value will be &gt;= 0 if and only if the key is found.
   * @throws IllegalArgumentException if {@code aFromIndex > aToIndex}
   * @throws ArrayIndexOutOfBoundsException if {@code aFromIndex < 0 or aToIndex > anArray.length}
   */
  binarySearch(
    anArray: string,
    aFromIndex: number,
    aToIndex: number,
    aKey: string
  ): number;

  /**
   * Searches the specified array of bytes for the specified value using the binary search algorithm.
   * @param anArray the array to be searched
   * @param aKey the value to be searched for
   * @return index of the search key, if it is contained in the array; otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>. The&#xA; <i>insertion point</i> is defined as the point at which the key would be inserted into the array: the index of the first&#xA; element greater than the key, or <tt>anArray.length</tt> if all elements in the array are less than the specified key. Note&#xA; that this guarantees that the return value will be &gt;= 0 if and only if the key is found.
   */
  binarySearch(anArray: unknown, aKey: unknown): number;

  /**
   * Searches a range of the specified array of bytes for the specified value using the binary search algorithm.
   * @param anArray the array to be searched
   * @param aFromIndex the index of the first element (inclusive) to be searched
   * @param aToIndex the index of the last element (exclusive) to be searched
   * @param aKey the value to be searched for
   * @return index of the search key, if it is contained in the array within the specified range;&#xA; otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>. The <i>insertion point</i> is defined as the point at which the&#xA; key would be inserted into the array: the index of the first element in the range greater than the key,&#xA; or <tt>aToIndex</tt> if all elements in the range are less than the specified key. Note&#xA; that this guarantees that the return value will be &gt;= 0 if and only if the key is found.
   * @throws IllegalArgumentException if {@code aFromIndex > aToIndex}
   * @throws ArrayIndexOutOfBoundsException if {@code aFromIndex < 0 or aToIndex > anArray.length}
   */
  binarySearch(
    anArray: unknown,
    aFromIndex: number,
    aToIndex: number,
    aKey: unknown
  ): number;

  /**
   * Searches the specified array of doubles for the specified value using the binary search algorithm.
   * @param anArray the array to be searched
   * @param aKey the value to be searched for
   * @return index of the search key, if it is contained in the array; otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>. The&#xA; <i>insertion point</i> is defined as the point at which the key would be inserted into the array: the index of the first&#xA; element greater than the key, or <tt>anArray.length</tt> if all elements in the array are less than the specified key. Note&#xA; that this guarantees that the return value will be &gt;= 0 if and only if the key is found.
   */
  binarySearch(anArray: number, aKey: number): number;

  /**
   * Searches a range of the specified array of doubles for the specified value using the binary search algorithm.
   * @param anArray the array to be searched
   * @param aFromIndex the index of the first element (inclusive) to be searched
   * @param aToIndex the index of the last element (exclusive) to be searched
   * @param aKey the value to be searched for
   * @return index of the search key, if it is contained in the array within the specified range;&#xA; otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>. The <i>insertion point</i> is defined as the point at which the&#xA; key would be inserted into the array: the index of the first element in the range greater than the key,&#xA; or <tt>aToIndex</tt> if all elements in the range are less than the specified key. Note&#xA; that this guarantees that the return value will be &gt;= 0 if and only if the key is found.
   * @throws IllegalArgumentException if {@code aFromIndex > aToIndex}
   * @throws ArrayIndexOutOfBoundsException if {@code aFromIndex < 0 or aToIndex > anArray.length}
   */
  binarySearch(
    anArray: number,
    aFromIndex: number,
    aToIndex: number,
    aKey: number
  ): number;

  /**
   * Searches the specified array of floats for the specified value using the binary search algorithm.
   * @param anArray the array to be searched
   * @param aKey the value to be searched for
   * @return index of the search key, if it is contained in the array; otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>. The&#xA; <i>insertion point</i> is defined as the point at which the key would be inserted into the array: the index of the first&#xA; element greater than the key, or <tt>anArray.length</tt> if all elements in the array are less than the specified key. Note&#xA; that this guarantees that the return value will be &gt;= 0 if and only if the key is found.
   */
  binarySearch(anArray: number, aKey: number): number;

  /**
   * Searches a range of the specified array of floats for the specified value using the binary search algorithm.
   * @param anArray the array to be searched
   * @param aFromIndex the index of the first element (inclusive) to be searched
   * @param aToIndex the index of the last element (exclusive) to be searched
   * @param aKey the value to be searched for
   * @return index of the search key, if it is contained in the array within the specified range;&#xA; otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>. The <i>insertion point</i> is defined as the point at which the&#xA; key would be inserted into the array: the index of the first element in the range greater than the key,&#xA; or <tt>aToIndex</tt> if all elements in the range are less than the specified key. Note&#xA; that this guarantees that the return value will be &gt;= 0 if and only if the key is found.
   * @throws IllegalArgumentException if {@code aFromIndex > aToIndex}
   * @throws ArrayIndexOutOfBoundsException if {@code aFromIndex < 0 or aToIndex > anArray.length}
   */
  binarySearch(
    anArray: number,
    aFromIndex: number,
    aToIndex: number,
    aKey: number
  ): number;

  /**
   * Searches the specified array for the specified object using the binary search algorithm.
   * @param anArray the array to be searched
   * @param aKey the value to be searched for
   * @return index of the search key, if it is contained in the array; otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>. The&#xA; <i>insertion point</i> is defined as the point at which the key would be inserted into the array: the index of the first&#xA; element greater than the key, or <tt>anArray.length</tt> if all elements in the array are less than the specified key. Note&#xA; that this guarantees that the return value will be &gt;= 0 if and only if the key is found.
   * @throws ClassCastException if the search key is not comparable to the elements of the array.
   */
  binarySearch(anArray: unknown, aKey: unknown): number;

  /**
   * Searches a range of the specified array for the specified object using the binary search algorithm.
   * @param anArray the array to be searched
   * @param aFromIndex the index of the first element (inclusive) to be searched
   * @param aToIndex the index of the last element (exclusive) to be searched
   * @param aKey the value to be searched for
   * @return index of the search key, if it is contained in the array within the specified range;&#xA; otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>. The <i>insertion point</i> is defined as the point at which the&#xA; key would be inserted into the array: the index of the first element in the range greater than the key,&#xA; or <tt>aToIndex</tt> if all elements in the range are less than the specified key. Note&#xA; that this guarantees that the return value will be &gt;= 0 if and only if the key is found.
   * @throws ClassCastException if the search key is not comparable to the elements of the array within the specified range.
   * @throws IllegalArgumentException if {@code aFromIndex > aToIndex}
   * @throws ArrayIndexOutOfBoundsException if {@code aFromIndex < 0 or aToIndex > anArray.length}
   */
  binarySearch(
    anArray: unknown,
    aFromIndex: number,
    aToIndex: number,
    aKey: unknown
  ): number;

  /**
   * Searches the specified array for the specified object using the binary search algorithm.
   * @param <T> the class of the objects to be searched
   * @param anArray the array to be searched
   * @param aKey the value to be searched for
   * @param aComparator the comparator by which the array is ordered. A <tt>null</tt> value indicates that the elements'&#xA; Comparable natural ordering should be used.
   * @return index of the search key, if it is contained in the array; otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>. The&#xA; <i>insertion point</i> is defined as the point at which the key would be inserted into the array: the index of the first&#xA; element greater than the key, or <tt>anArray.length</tt> if all elements in the array are less than the specified key. Note&#xA; that this guarantees that the return value will be &gt;= 0 if and only if the key is found.
   * @throws ClassCastException if the array contains elements that are not <i>mutually comparable</i> using the specified comparator,&#xA; or the search key is not comparable to the elements of the array using this comparator.
   */
  binarySearch(anArray: unknown, aKey: unknown, aComparator: unknown): number;

  /**
   * Searches a range of the specified array for the specified object using the binary search algorithm.
   * @param <T> the class of the objects to be searched
   * @param anArray the array to be searched
   * @param aFromIndex the index of the first element (inclusive) to be searched
   * @param aToIndex the index of the last element (exclusive) to be searched
   * @param aKey the value to be searched for
   * @param aComparator the comparator by which the array is ordered. A <tt>null</tt> value indicates that the elements'&#xA; Comparable natural ordering should be used.
   * @return index of the search key, if it is contained in the array within the specified range;&#xA; otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>. The <i>insertion point</i> is defined as the point at which the&#xA; key would be inserted into the array: the index of the first element in the range greater than the key,&#xA; or <tt>aToIndex</tt> if all elements in the range are less than the specified key. Note&#xA; that this guarantees that the return value will be &gt;= 0 if and only if the key is found.
   * @throws ClassCastException if the range contains elements that are not <i>mutually comparable</i> using the specified comparator,&#xA; or the search key is not comparable to the elements in the range using this comparator.
   * @throws IllegalArgumentException if {@code aFromIndex > aToIndex}
   * @throws ArrayIndexOutOfBoundsException if {@code aFromIndex < 0 or aToIndex > anArray.length}
   */
  binarySearch(
    anArray: unknown,
    aFromIndex: number,
    aToIndex: number,
    aKey: unknown,
    aComparator: unknown
  ): number;

  /**
   * Returns <tt>true</tt> if the two specified arrays of longs are <i>equal</i> to one another.
   * @param anArray one array to be tested for equality
   * @param anAnotherArray the other array to be tested for equality
   * @return <tt>true</tt> if the two arrays are equal
   */
  equals(anArray: number, anAnotherArray: number): boolean;

  /**
   * Returns <tt>true</tt> if the two specified arrays of ints are <i>equal</i> to one another.
   * @param anArray one array to be tested for equality
   * @param anAnotherArray the other array to be tested for equality
   * @return <tt>true</tt> if the two arrays are equal
   */
  equals(anArray: number, anAnotherArray: number): boolean;

  /**
   * Returns <tt>true</tt> if the two specified arrays of shorts are <i>equal</i> to one another.
   * @param anArray one array to be tested for equality
   * @param anAnotherArray the other array to be tested for equality
   * @return <tt>true</tt> if the two arrays are equal
   */
  equals(anArray: number, anAnotherArray: number): boolean;

  /**
   * Returns <tt>true</tt> if the two specified arrays of chars are <i>equal</i> to one another.
   * @param anArray one array to be tested for equality
   * @param anAnotherArray the other array to be tested for equality
   * @return <tt>true</tt> if the two arrays are equal
   */
  equals(anArray: string, anAnotherArray: string): boolean;

  /**
   * Returns <tt>true</tt> if the two specified arrays of bytes are <i>equal</i> to one another.
   * @param anArray one array to be tested for equality
   * @param anAnotherArray the other array to be tested for equality
   * @return <tt>true</tt> if the two arrays are equal
   */
  equals(anArray: unknown, anAnotherArray: unknown): boolean;

  /**
   * Returns <tt>true</tt> if the two specified arrays of booleans are <i>equal</i> to one another.
   * @param anArray one array to be tested for equality
   * @param anAnotherArray the other array to be tested for equality
   * @return <tt>true</tt> if the two arrays are equal
   */
  equals(anArray: boolean, anAnotherArray: boolean): boolean;

  /**
   * Returns <tt>true</tt> if the two specified arrays of doubles are <i>equal</i> to one another.
   * @param anArray one array to be tested for equality
   * @param anAnotherArray the other array to be tested for equality
   * @return <tt>true</tt> if the two arrays are equal
   */
  equals(anArray: number, anAnotherArray: number): boolean;

  /**
   * Returns <tt>true</tt> if the two specified arrays of floats are <i>equal</i> to one another.
   * @param anArray one array to be tested for equality
   * @param anAnotherArray the other array to be tested for equality
   * @return <tt>true</tt> if the two arrays are equal
   */
  equals(anArray: number, anAnotherArray: number): boolean;

  /**
   * Returns <tt>true</tt> if the two specified arrays of Objects are <i>equal</i> to one another.
   * @param anArray one array to be tested for equality
   * @param anAnotherArray the other array to be tested for equality
   * @return <tt>true</tt> if the two arrays are equal
   */
  equals(anArray: unknown, anAnotherArray: unknown): boolean;

  /**
   * Assigns the specified long value to each element of the specified array of longs.
   * @param anArray the array to be filled
   * @param aValue the value to be stored in all elements of the array
   */
  fill(anArray: number, aValue: number): void;

  /**
   * Assigns the specified long value to each element of the specified range of the specified array of longs.
   * @param anArray the array to be filled
   * @param aFromIndex the index of the first element (inclusive) to be filled with the specified value
   * @param aToIndex the index of the last element (exclusive) to be filled with the specified value
   * @param aValue the value to be stored in all elements of the array
   * @throws IllegalArgumentException if <tt>aFromIndex &gt; aToIndex</tt>
   * @throws ArrayIndexOutOfBoundsException if <tt>aFromIndex &lt; 0</tt> or <tt>aToIndex &gt; anArray.length</tt>
   */
  fill(
    anArray: number,
    aFromIndex: number,
    aToIndex: number,
    aValue: number
  ): void;

  /**
   * Assigns the specified int value to each element of the specified array of ints.
   * @param anArray the array to be filled
   * @param aValue the value to be stored in all elements of the array
   */
  fill(anArray: number, aValue: number): void;

  /**
   * Assigns the specified int value to each element of the specified range of the specified array of ints.
   * @param anArray the array to be filled
   * @param aFromIndex the index of the first element (inclusive) to be filled with the specified value
   * @param aToIndex the index of the last element (exclusive) to be filled with the specified value
   * @param aValue the value to be stored in all elements of the array
   * @throws IllegalArgumentException if <tt>aFromIndex &gt; aToIndex</tt>
   * @throws ArrayIndexOutOfBoundsException if <tt>aFromIndex &lt; 0</tt> or <tt>aToIndex &gt; anArray.length</tt>
   */
  fill(
    anArray: number,
    aFromIndex: number,
    aToIndex: number,
    aValue: number
  ): void;

  /**
   * Assigns the specified short value to each element of the specified array of shorts.
   * @param anArray the array to be filled
   * @param aValue the value to be stored in all elements of the array
   */
  fill(anArray: number, aValue: number): void;

  /**
   * Assigns the specified short value to each element of the specified range of the specified array of shorts.
   * @param anArray the array to be filled
   * @param aFromIndex the index of the first element (inclusive) to be filled with the specified value
   * @param aToIndex the index of the last element (exclusive) to be filled with the specified value
   * @param aValue the value to be stored in all elements of the array
   * @throws IllegalArgumentException if <tt>aFromIndex &gt; aToIndex</tt>
   * @throws ArrayIndexOutOfBoundsException if <tt>aFromIndex &lt; 0</tt> or <tt>aToIndex &gt; anArray.length</tt>
   */
  fill(
    anArray: number,
    aFromIndex: number,
    aToIndex: number,
    aValue: number
  ): void;

  /**
   * Assigns the specified char value to each element of the specified array of chars.
   * @param anArray the array to be filled
   * @param aValue the value to be stored in all elements of the array
   */
  fill(anArray: string, aValue: string): void;

  /**
   * Assigns the specified char value to each element of the specified range of the specified array of chars.
   * @param anArray the array to be filled
   * @param aFromIndex the index of the first element (inclusive) to be filled with the specified value
   * @param aToIndex the index of the last element (exclusive) to be filled with the specified value
   * @param aValue the value to be stored in all elements of the array
   * @throws IllegalArgumentException if <tt>aFromIndex &gt; aToIndex</tt>
   * @throws ArrayIndexOutOfBoundsException if <tt>aFromIndex &lt; 0</tt> or <tt>aToIndex &gt; anArray.length</tt>
   */
  fill(
    anArray: string,
    aFromIndex: number,
    aToIndex: number,
    aValue: string
  ): void;

  /**
   * Assigns the specified byte value to each element of the specified array of bytes.
   * @param anArray the array to be filled
   * @param aValue the value to be stored in all elements of the array
   */
  fill(anArray: unknown, aValue: unknown): void;

  /**
   * Assigns the specified byte value to each element of the specified range of the specified array of bytes.
   * @param anArray the array to be filled
   * @param aFromIndex the index of the first element (inclusive) to be filled with the specified value
   * @param aToIndex the index of the last element (exclusive) to be filled with the specified value
   * @param aValue the value to be stored in all elements of the array
   * @throws IllegalArgumentException if <tt>aFromIndex &gt; aToIndex</tt>
   * @throws ArrayIndexOutOfBoundsException if <tt>aFromIndex &lt; 0</tt> or <tt>aToIndex &gt; anArray.length</tt>
   */
  fill(
    anArray: unknown,
    aFromIndex: number,
    aToIndex: number,
    aValue: unknown
  ): void;

  /**
   * Assigns the specified boolean value to each element of the specified array of booleans.
   * @param anArray the array to be filled
   * @param aValue the value to be stored in all elements of the array
   */
  fill(anArray: boolean, aValue: boolean): void;

  /**
   * Assigns the specified boolean value to each element of the specified
   * range of the specified array of booleans.
   * @param anArray the array to be filled
   * @param aFromIndex the index of the first element (inclusive) to be filled with the specified value
   * @param aToIndex the index of the last element (exclusive) to be filled with the specified value
   * @param aValue the value to be stored in all elements of the array
   * @throws IllegalArgumentException if <tt>aFromIndex &gt; aToIndex</tt>
   * @throws ArrayIndexOutOfBoundsException if <tt>aFromIndex &lt; 0</tt> or <tt>aToIndex &gt; anArray.length</tt>
   */
  fill(
    anArray: boolean,
    aFromIndex: number,
    aToIndex: number,
    aValue: boolean
  ): void;

  /**
   * Assigns the specified double value to each element of the specified array of doubles.
   * @param anArray the array to be filled
   * @param aValue the value to be stored in all elements of the array
   */
  fill(anArray: number, aValue: number): void;

  /**
   * Assigns the specified double value to each element of the specified range of the specified array of doubles.
   * @param anArray the array to be filled
   * @param aFromIndex the index of the first element (inclusive) to be filled with the specified value
   * @param aToIndex the index of the last element (exclusive) to be filled with the specified value
   * @param aValue the value to be stored in all elements of the array
   * @throws IllegalArgumentException if <tt>aFromIndex &gt; aToIndex</tt>
   * @throws ArrayIndexOutOfBoundsException if <tt>aFromIndex &lt; 0</tt> or <tt>aToIndex &gt; anArray.length</tt>
   */
  fill(
    anArray: number,
    aFromIndex: number,
    aToIndex: number,
    aValue: number
  ): void;

  /**
   * Assigns the specified float value to each element of the specified array of floats.
   * @param anArray the array to be filled
   * @param aValue the value to be stored in all elements of the array
   */
  fill(anArray: number, aValue: number): void;

  /**
   * Assigns the specified float value to each element of the specified range of the specified array of floats.
   * @param anArray the array to be filled
   * @param aFromIndex the index of the first element (inclusive) to be filled with the specified value
   * @param aToIndex the index of the last element (exclusive) to be filled with the specified value
   * @param aValue the value to be stored in all elements of the array
   * @throws IllegalArgumentException if <tt>aFromIndex &gt; aToIndex</tt>
   * @throws ArrayIndexOutOfBoundsException if <tt>aFromIndex &lt; 0</tt> or <tt>aToIndex &gt; anArray.length</tt>
   */
  fill(
    anArray: number,
    aFromIndex: number,
    aToIndex: number,
    aValue: number
  ): void;

  /**
   * Assigns the specified Object reference to each element of the specified array of Objects.
   * @param anArray the array to be filled
   * @param aValue the value to be stored in all elements of the array
   * @throws ArrayStoreException if the specified value is not of a&#xA; runtime type that can be stored in the specified array
   */
  fill(anArray: unknown, aValue: unknown): void;

  /**
   * Assigns the specified Object reference to each element of the specified range of the specified array of Objects.
   * @param anArray the array to be filled
   * @param aFromIndex the index of the first element (inclusive) to be filled with the specified value
   * @param aToIndex the index of the last element (exclusive) to be filled with the specified value
   * @param aValue the value to be stored in all elements of the array
   * @throws IllegalArgumentException if <tt>aFromIndex &gt; aToIndex</tt>
   * @throws ArrayIndexOutOfBoundsException if <tt>aFromIndex &lt; 0</tt> or <tt>aToIndex &gt; anArray.length</tt>
   * @throws ArrayStoreException if the specified value is not of a runtime type that can be stored in the specified array
   */
  fill(
    anArray: unknown,
    aFromIndex: number,
    aToIndex: number,
    aValue: unknown
  ): void;

  /**
   * Copies the specified array, truncating or padding with nulls (if necessary) so the copy has the specified length.
   * @param <T> the class of the objects in the array
   * @param anArray the array to be copied
   * @param aNewLength the length of the copy to be returned
   * @return a copy of the original array, truncated or padded with nulls to obtain the specified length
   * @throws NegativeArraySizeException if <tt>aNewLength</tt> is negative
   * @throws NullPointerException if <tt>anArray</tt> is null
   */
  copyOf(anArray: unknown, aNewLength: number): unknown;

  /**
   * Copies the specified array, truncating or padding with nulls (if necessary)
   * so the copy has the specified length.
   * @param <U> the class of the objects in the original array
   * @param <T> the class of the objects in the returned array
   * @param anArray the array to be copied
   * @param aNewLength the length of the copy to be returned
   * @param aNewType the class of the copy to be returned
   * @return a copy of the original array, truncated or padded with nulls to obtain the specified length
   * @throws NegativeArraySizeException if <tt>aNewLength</tt> is negative
   * @throws NullPointerException if <tt>anArray</tt> is null
   * @throws ArrayStoreException if an element copied from <tt>anArray</tt> is not of a runtime type that can be stored&#xA; in an array of class <tt>aNewType</tt>
   */
  copyOf(anArray: unknown, aNewLength: number, aNewType: unknown): unknown;

  /**
   * Copies the specified array, truncating or padding with zeros (if necessary)
   * so the copy has the specified length.
   * @param anArray the array to be copied
   * @param aNewLength the length of the copy to be returned
   * @return a copy of the original array, truncated or padded with zeros to obtain the specified length
   * @throws NegativeArraySizeException if <tt>aNewLength</tt> is negative
   * @throws NullPointerException if <tt>anArray</tt> is null
   */
  copyOf(anArray: unknown, aNewLength: number): unknown;

  /**
   * Copies the specified array, truncating or padding with zeros (if necessary) so the copy has the specified length.
   * @param anArray the array to be copied
   * @param aNewLength the length of the copy to be returned
   * @return a copy of the original array, truncated or padded with zeros to obtain the specified length
   * @throws NegativeArraySizeException if <tt>aNewLength</tt> is negative
   * @throws NullPointerException if <tt>anArray</tt> is null
   */
  copyOf(anArray: number, aNewLength: number): number;

  /**
   * Copies the specified array, truncating or padding with zeros (if necessary) so the copy has the specified length.
   * @param anArray the array to be copied
   * @param aNewLength the length of the copy to be returned
   * @return a copy of the original array, truncated or padded with zeros to obtain the specified length
   * @throws NegativeArraySizeException if <tt>aNewLength</tt> is negative
   * @throws NullPointerException if <tt>anArray</tt> is null
   */
  copyOf(anArray: number, aNewLength: number): number;

  /**
   * Copies the specified array, truncating or padding with zeros (if necessary) so the copy has the specified length.
   * @param anArray the array to be copied
   * @param aNewLength the length of the copy to be returned
   * @return a copy of the original array, truncated or padded with zeros to obtain the specified length
   * @throws NegativeArraySizeException if <tt>aNewLength</tt> is negative
   * @throws NullPointerException if <tt>anArray</tt> is null
   */
  copyOf(anArray: number, aNewLength: number): number;

  /**
   * Copies the specified array, truncating or padding with null characters (if necessary) so the copy has the specified length.
   * @param anArray the array to be copied
   * @param aNewLength the length of the copy to be returned
   * @return a copy of the original array, truncated or padded with null characters to obtain the specified length
   * @throws NegativeArraySizeException if <tt>aNewLength</tt> is negative
   * @throws NullPointerException if <tt>anArray</tt> is null
   */
  copyOf(anArray: string, aNewLength: number): string;

  /**
   * Copies the specified array, truncating or padding with zeros (if necessary) so the copy has the specified length.
   * @param anArray the array to be copied
   * @param aNewLength the length of the copy to be returned
   * @return a copy of the original array, truncated or padded with zeros to obtain the specified length
   * @throws NegativeArraySizeException if <tt>aNewLength</tt> is negative
   * @throws NullPointerException if <tt>anArray</tt> is null
   */
  copyOf(anArray: number, aNewLength: number): number;

  /**
   * Copies the specified array, truncating or padding with zeros (if necessary) so the copy has the specified length.
   * @param anArray the array to be copied
   * @param aNewLength the length of the copy to be returned
   * @return a copy of the original array, truncated or padded with zeros to obtain the specified length
   * @throws NegativeArraySizeException if <tt>aNewLength</tt> is negative
   * @throws NullPointerException if <tt>anArray</tt> is null
   */
  copyOf(anArray: number, aNewLength: number): number;

  /**
   * Copies the specified array, truncating or padding with <tt>false</tt> (if necessary) so the copy has the specified length.
   * @param anArray the array to be copied
   * @param aNewLength the length of the copy to be returned
   * @return a copy of the original array, truncated or padded with false elements to obtain the specified length
   * @throws NegativeArraySizeException if <tt>aNewLength</tt> is negative
   * @throws NullPointerException if <tt>anArray</tt> is null
   */
  copyOf(anArray: boolean, aNewLength: number): boolean;

  /**
   * Copies the specified range of the specified array into a new array.
   * @param <T> the class of the objects in the array
   * @param anArray the array from which a range is to be copied
   * @param aFromIndex the initial index of the range to be copied, inclusive
   * @param aToIndex the final index of the range to be copied, exclusive. (This index may lie outside the array.)
   * @return a new array containing the specified range from the original array, truncated or padded with nulls to obtain the required length
   * @throws ArrayIndexOutOfBoundsException if <tt>aFromIndex &lt; 0</tt> or <tt>aFromIndex &gt; anArray.length()</tt>
   * @throws IllegalArgumentException if <tt>aFromIndex &gt; aToIndex</tt>
   * @throws NullPointerException if <tt>anArray</tt> is null
   */
  copyOfRange(anArray: unknown, aFromIndex: number, aToIndex: number): unknown;

  /**
   * Copies the specified range of the specified array into a new array.
   * @param <U> the class of the objects in the original array
   * @param <T> the class of the objects in the returned array
   * @param anArray the array from which a range is to be copied
   * @param aFromIndex the initial index of the range to be copied, inclusive
   * @param aToIndex the final index of the range to be copied, exclusive. (This index may lie outside the array.)
   * @param aNewType the class of the copy to be returned
   * @return a new array containing the specified range from the original array, truncated or padded with nulls to obtain the required length
   * @throws ArrayIndexOutOfBoundsException if <tt>aFromIndex &lt; 0</tt> or <tt>aFromIndex &gt; anArray.length()</tt>
   * @throws IllegalArgumentException if <tt>aFromIndex &gt; aToIndex</tt>
   * @throws NullPointerException if <tt>anArray</tt> is null
   * @throws ArrayStoreException if an element copied from <tt>anArray</tt> is not of a runtime type that can be stored in&#xA; an array of class <tt>aNewType</tt>.
   */
  copyOfRange(
    anArray: unknown,
    aFromIndex: number,
    aToIndex: number,
    aNewType: unknown
  ): unknown;

  /**
   * Copies the specified range of the specified array into a new array.
   * @param anArray the array from which a range is to be copied
   * @param aFromIndex the initial index of the range to be copied, inclusive
   * @param aToIndex the final index of the range to be copied, exclusive. (This index may lie outside the array.)
   * @return a new array containing the specified range from the original array, truncated or padded with zeros to obtain the required length
   * @throws ArrayIndexOutOfBoundsException if <tt>aFromIndex &lt; 0</tt> or <tt>aFromIndex &gt; anArray.length()</tt>
   * @throws IllegalArgumentException if <tt>aFromIndex &gt; aToIndex</tt>
   * @throws NullPointerException if <tt>anArray</tt> is null
   */
  copyOfRange(anArray: unknown, aFromIndex: number, aToIndex: number): unknown;

  /**
   * Copies the specified range of the specified array into a new array.
   * @param anArray the array from which a range is to be copied
   * @param aFromIndex the initial index of the range to be copied, inclusive
   * @param aToIndex the final index of the range to be copied, exclusive. (This index may lie outside the array.)
   * @return a new array containing the specified range from the original array, truncated or padded with zeros to obtain the required length
   * @throws ArrayIndexOutOfBoundsException if <tt>aFromIndex &lt; 0</tt> or <tt>aFromIndex &gt; anArray.length()</tt>
   * @throws IllegalArgumentException if <tt>aFromIndex &gt; aToIndex</tt>
   * @throws NullPointerException if <tt>anArray</tt> is null
   */
  copyOfRange(anArray: number, aFromIndex: number, aToIndex: number): number;

  /**
   * Copies the specified range of the specified array into a new array.
   * @param anArray the array from which a range is to be copied
   * @param aFromIndex the initial index of the range to be copied, inclusive
   * @param aToIndex the final index of the range to be copied, exclusive. (This index may lie outside the array.)
   * @return a new array containing the specified range from the original array, truncated or padded with zeros to obtain the required length
   * @throws ArrayIndexOutOfBoundsException if <tt>aFromIndex &lt; 0</tt> or <tt>aFromIndex &gt; anArray.length()</tt>
   * @throws IllegalArgumentException if <tt>aFromIndex &gt; aToIndex</tt>
   * @throws NullPointerException if <tt>anArray</tt> is null
   */
  copyOfRange(anArray: number, aFromIndex: number, aToIndex: number): number;

  /**
   * Copies the specified range of the specified array into a new array.
   * @param anArray the array from which a range is to be copied
   * @param aFromIndex the initial index of the range to be copied, inclusive
   * @param aToIndex the final index of the range to be copied, exclusive. (This index may lie outside the array.)
   * @return a new array containing the specified range from the original array, truncated or padded with zeros to obtain the required length
   * @throws ArrayIndexOutOfBoundsException if <tt>aFromIndex &lt; 0</tt> or <tt>aFromIndex &gt; anArray.length()</tt>
   * @throws IllegalArgumentException if <tt>aFromIndex &gt; aToIndex</tt>
   * @throws NullPointerException if <tt>anArray</tt> is null
   */
  copyOfRange(anArray: number, aFromIndex: number, aToIndex: number): number;

  /**
   * Copies the specified range of the specified array into a new array.
   * @param anArray the array from which a range is to be copied
   * @param aFromIndex the initial index of the range to be copied, inclusive
   * @param aToIndex the final index of the range to be copied, exclusive. (This index may lie outside the array.)
   * @return a new array containing the specified range from the original array, truncated or padded with null characters to obtain&#xA; the required length
   * @throws ArrayIndexOutOfBoundsException if <tt>aFromIndex &lt; 0</tt> or <tt>aFromIndex &gt; anArray.length()</tt>
   * @throws IllegalArgumentException if <tt>aFromIndex &gt; aToIndex</tt>
   * @throws NullPointerException if <tt>anArray</tt> is null
   */
  copyOfRange(anArray: string, aFromIndex: number, aToIndex: number): string;

  /**
   * Copies the specified range of the specified array into a new array.
   * @param anArray the array from which a range is to be copied
   * @param aFromIndex the initial index of the range to be copied, inclusive
   * @param aToIndex the final index of the range to be copied, exclusive. (This index may lie outside the array.)
   * @return a new array containing the specified range from the original array, truncated or padded with zeros to obtain the required length
   * @throws ArrayIndexOutOfBoundsException if <tt>aFromIndex &lt; 0</tt> or <tt>aFromIndex &gt; anArray.length()</tt>
   * @throws IllegalArgumentException if <tt>aFromIndex &gt; aToIndex</tt>
   * @throws NullPointerException if <tt>anArray</tt> is null
   */
  copyOfRange(anArray: number, aFromIndex: number, aToIndex: number): number;

  /**
   * Copies the specified range of the specified array into a new array.
   * @param anArray the array from which a range is to be copied
   * @param aFromIndex the initial index of the range to be copied, inclusive
   * @param aToIndex the final index of the range to be copied, exclusive. (This index may lie outside the array.)
   * @return a new array containing the specified range from the original array, truncated or padded with zeros to obtain the required length
   * @throws ArrayIndexOutOfBoundsException if <tt>aFromIndex &lt; 0</tt> or <tt>aFromIndex &gt; anArray.length()</tt>
   * @throws IllegalArgumentException if <tt>aFromIndex &gt; aToIndex</tt>
   * @throws NullPointerException if <tt>anArray</tt> is null
   */
  copyOfRange(anArray: number, aFromIndex: number, aToIndex: number): number;

  /**
   * Copies the specified range of the specified array into a new array.
   * @param anArray the array from which a range is to be copied
   * @param aFromIndex the initial index of the range to be copied, inclusive
   * @param aToIndex the final index of the range to be copied, exclusive. (This index may lie outside the array.)
   * @return a new array containing the specified range from the original array, truncated or padded with false elements to obtain&#xA; the required length
   * @throws ArrayIndexOutOfBoundsException if <tt>aFromIndex &lt; 0</tt> or <tt>aFromIndex &gt; anArray.length()</tt>
   * @throws IllegalArgumentException if <tt>aFromIndex &gt; aToIndex</tt>
   * @throws NullPointerException if <tt>anArray</tt> is null
   */
  copyOfRange(anArray: boolean, aFromIndex: number, aToIndex: number): boolean;

  /**
   * Returns a fixed-size list backed by the specified array.
   * @param <T> the class of the objects in the array
   * @param anArray the array by which the list will be backed
   * @return a list view of the specified array
   */
  asList(anArray: unknown): unknown;

  /**
   * Returns a hash code based on the contents of the specified array.
   * @param anArray the array whose hash value to compute
   * @return a content-based hash code for <tt>anArray</tt>
   */
  hashCode(anArray: number): number;

  /**
   * Returns a hash code based on the contents of the specified array.
   * @param anArray the array whose hash value to compute
   * @return a content-based hash code for <tt>anArray</tt>
   */
  hashCode(anArray: number): number;

  /**
   * Returns a hash code based on the contents of the specified array.
   * @param anArray the array whose hash value to compute
   * @return a content-based hash code for <tt>anArray</tt>
   */
  hashCode(anArray: number): number;

  /**
   * Returns a hash code based on the contents of the specified array.
   * @param anArray the array whose hash value to compute
   * @return a content-based hash code for <tt>anArray</tt>
   */
  hashCode(anArray: string): number;

  /**
   * Returns a hash code based on the contents of the specified array.
   * @param anArray the array whose hash value to compute
   * @return a content-based hash code for <tt>anArray</tt>
   */
  hashCode(anArray: unknown): number;

  /**
   * Returns a hash code based on the contents of the specified array.
   * @param anArray the array whose hash value to compute
   * @return a content-based hash code for <tt>anArray</tt>
   */
  hashCode(anArray: boolean): number;

  /**
   * Returns a hash code based on the contents of the specified array.
   * @param anArray the array whose hash value to compute
   * @return a content-based hash code for <tt>anArray</tt>
   */
  hashCode(anArray: number): number;

  /**
   * Returns a hash code based on the contents of the specified array.
   * @param anArray the array whose hash value to compute
   * @return a content-based hash code for <tt>anArray</tt>
   */
  hashCode(anArray: number): number;

  /**
   * Returns a hash code based on the contents of the specified array.
   * @param anArray the array whose content-based hash code to compute
   * @return a content-based hash code for <tt>anArray</tt>
   */
  hashCode(anArray: unknown): number;

  /**
   * Returns a hash code based on the "deep contents" of the specified array.
   * @param anArray the array whose deep-content-based hash code to compute
   * @return a deep-content-based hash code for <tt>anArray</tt>
   */
  deepHashCode(anArray: unknown): number;

  /**
   * Returns <tt>true</tt> if the two specified arrays are <i>deeply equal</i> to one another.
   * @param anArray one array to be tested for equality
   * @param anAnotherArray the other array to be tested for equality
   * @return <tt>true</tt> if the two arrays are equal
   */
  deepEquals(anArray: unknown, anAnotherArray: unknown): boolean;

  /**
   * Returns a string representation of the contents of the specified array.
   * @param anArray the array whose string representation to return
   * @return a string representation of <tt>anArray</tt>
   */
  toString(anArray: number): string;

  /**
   * Returns a string representation of the contents of the specified array.
   * @param anArray the array whose string representation to return
   * @return a string representation of <tt>anArray</tt>
   */
  toString(anArray: number): string;

  /**
   * Returns a string representation of the contents of the specified array.
   * @param anArray the array whose string representation to return
   * @return a string representation of <tt>anArray</tt>
   */
  toString(anArray: number): string;

  /**
   * Returns a string representation of the contents of the specified array.
   * @param anArray the array whose string representation to return
   * @return a string representation of <tt>anArray</tt>
   */
  toString(anArray: string): string;

  /**
   * Returns a string representation of the contents of the specified array.
   * @param anArray the array whose string representation to return
   * @return a string representation of <tt>anArray</tt>
   */
  toString(anArray: unknown): string;

  /**
   * Returns a string representation of the contents of the specified array.
   * @param anArray the array whose string representation to return
   * @return a string representation of <tt>anArray</tt>
   */
  toString(anArray: boolean): string;

  /**
   * Returns a string representation of the contents of the specified array.
   * @param anArray the array whose string representation to return
   * @return a string representation of <tt>anArray</tt>
   */
  toString(anArray: number): string;

  /**
   * Returns a string representation of the contents of the specified array.
   * @param anArray the array whose string representation to return
   * @return a string representation of <tt>anArray</tt>
   */
  toString(anArray: number): string;

  /**
   * Returns a string representation of the contents of the specified array.
   * @param anArray the array whose string representation to return
   * @return a string representation of <tt>anArray</tt>
   */
  toString(anArray: unknown): string;

  /**
   * Returns a string representation of the "deep contents" of the specified array.
   * @param anArray the array whose string representation to return
   * @return a string representation of <tt>anArray</tt>
   */
  deepToString(anArray: unknown): string;

  /**
   * Sorts the specified array into ascending numerical order.
   * @param a the array to be sorted
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  parallelSort(a: unknown): void;

  /**
   * Sorts the specified range of the array into ascending numerical order.
   * @param a the array to be sorted
   * @param fromIndex the index of the first element, inclusive, to be sorted
   * @param toIndex the index of the last element, exclusive, to be sorted
   * @throws IllegalArgumentException if {@code fromIndex > toIndex}
   * @throws ArrayIndexOutOfBoundsException if {@code fromIndex < 0} or {@code toIndex > a.length}
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  parallelSort(a: unknown, fromIndex: number, toIndex: number): void;

  /**
   * Sorts the specified array into ascending numerical order.
   * @param a the array to be sorted
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  parallelSort(a: string): void;

  /**
   * Sorts the specified range of the array into ascending numerical order.
   * @param a the array to be sorted
   * @param fromIndex the index of the first element, inclusive, to be sorted
   * @param toIndex the index of the last element, exclusive, to be sorted
   * @throws IllegalArgumentException if {@code fromIndex > toIndex}
   * @throws ArrayIndexOutOfBoundsException if {@code fromIndex < 0} or {@code toIndex > a.length}
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  parallelSort(a: string, fromIndex: number, toIndex: number): void;

  /**
   * Sorts the specified array into ascending numerical order.
   * @param a the array to be sorted
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  parallelSort(a: number): void;

  /**
   * Sorts the specified range of the array into ascending numerical order.
   * @param a the array to be sorted
   * @param fromIndex the index of the first element, inclusive, to be sorted
   * @param toIndex the index of the last element, exclusive, to be sorted
   * @throws IllegalArgumentException if {@code fromIndex > toIndex}
   * @throws ArrayIndexOutOfBoundsException if {@code fromIndex < 0} or {@code toIndex > a.length}
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  parallelSort(a: number, fromIndex: number, toIndex: number): void;

  /**
   * Sorts the specified array into ascending numerical order.
   * @param a the array to be sorted
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  parallelSort(a: number): void;

  /**
   * Sorts the specified range of the array into ascending numerical order.
   * @param a the array to be sorted
   * @param fromIndex the index of the first element, inclusive, to be sorted
   * @param toIndex the index of the last element, exclusive, to be sorted
   * @throws IllegalArgumentException if {@code fromIndex > toIndex}
   * @throws ArrayIndexOutOfBoundsException if {@code fromIndex < 0} or {@code toIndex > a.length}
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  parallelSort(a: number, fromIndex: number, toIndex: number): void;

  /**
   * Sorts the specified array into ascending numerical order.
   * @param a the array to be sorted
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  parallelSort(a: number): void;

  /**
   * Sorts the specified range of the array into ascending numerical order.
   * @param a the array to be sorted
   * @param fromIndex the index of the first element, inclusive, to be sorted
   * @param toIndex the index of the last element, exclusive, to be sorted
   * @throws IllegalArgumentException if {@code fromIndex > toIndex}
   * @throws ArrayIndexOutOfBoundsException if {@code fromIndex < 0} or {@code toIndex > a.length}
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  parallelSort(a: number, fromIndex: number, toIndex: number): void;

  /**
   * Sorts the specified array into ascending numerical order.
   * @param a the array to be sorted
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  parallelSort(a: number): void;

  /**
   * Sorts the specified range of the array into ascending numerical order.
   * @param a the array to be sorted
   * @param fromIndex the index of the first element, inclusive, to be sorted
   * @param toIndex the index of the last element, exclusive, to be sorted
   * @throws IllegalArgumentException if {@code fromIndex > toIndex}
   * @throws ArrayIndexOutOfBoundsException if {@code fromIndex < 0} or {@code toIndex > a.length}
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  parallelSort(a: number, fromIndex: number, toIndex: number): void;

  /**
   * Sorts the specified array into ascending numerical order.
   * @param a the array to be sorted
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  parallelSort(a: number): void;

  /**
   * Sorts the specified range of the array into ascending numerical order.
   * @param a the array to be sorted
   * @param fromIndex the index of the first element, inclusive, to be sorted
   * @param toIndex the index of the last element, exclusive, to be sorted
   * @throws IllegalArgumentException if {@code fromIndex > toIndex}
   * @throws ArrayIndexOutOfBoundsException if {@code fromIndex < 0} or {@code toIndex > a.length}
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  parallelSort(a: number, fromIndex: number, toIndex: number): void;

  /**
   * Sorts the specified array of objects into ascending order, according
   * to the {@linkplain Comparable natural ordering} of its elements.
   * @param <T> the class of the objects to be sorted
   * @param a the array to be sorted
   * @throws ClassCastException if the array contains elements that are not&#xA; <i>mutually comparable</i> (for example, strings and integers)
   * @throws IllegalArgumentException (optional) if the natural&#xA; ordering of the array elements is found to violate the&#xA; {@link Comparable} contract
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  parallelSort(a: unknown): void;

  /**
   * Sorts the specified range of the specified array of objects into
   * ascending order, according to the
   * {@linkplain Comparable natural ordering} of its elements.
   * @param <T> the class of the objects to be sorted
   * @param a the array to be sorted
   * @param fromIndex the index of the first element (inclusive) to be sorted
   * @param toIndex the index of the last element (exclusive) to be sorted
   * @throws IllegalArgumentException if {@code fromIndex > toIndex} or&#xA; (optional) if the natural ordering of the array elements is&#xA; found to violate the {@link Comparable} contract
   * @throws ArrayIndexOutOfBoundsException if {@code fromIndex < 0} or&#xA; {@code toIndex > a.length}
   * @throws ClassCastException if the array contains elements that are&#xA; not <i>mutually comparable</i> (for example, strings and&#xA; integers).
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  parallelSort(a: unknown, fromIndex: number, toIndex: number): void;

  /**
   * Sorts the specified array of objects according to the order induced by
   * the specified comparator.
   * @param <T> the class of the objects to be sorted
   * @param a the array to be sorted
   * @param cmp the comparator to determine the order of the array. A&#xA; {@code null} value indicates that the elements'&#xA; {@linkplain Comparable natural ordering} should be used.
   * @throws ClassCastException if the array contains elements that are&#xA; not <i>mutually comparable</i> using the specified comparator
   * @throws IllegalArgumentException (optional) if the comparator is&#xA; found to violate the {@link java.util.Comparator} contract
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  parallelSort(a: unknown, cmp: unknown): void;

  /**
   * Sorts the specified range of the specified array of objects according
   * to the order induced by the specified comparator.
   * @param <T> the class of the objects to be sorted
   * @param a the array to be sorted
   * @param fromIndex the index of the first element (inclusive) to be&#xA; sorted
   * @param toIndex the index of the last element (exclusive) to be sorted
   * @param cmp the comparator to determine the order of the array. A&#xA; {@code null} value indicates that the elements'&#xA; {@linkplain Comparable natural ordering} should be used.
   * @throws IllegalArgumentException if {@code fromIndex > toIndex} or&#xA; (optional) if the natural ordering of the array elements is&#xA; found to violate the {@link Comparable} contract
   * @throws ArrayIndexOutOfBoundsException if {@code fromIndex < 0} or {@code toIndex > a.length}
   * @throws ClassCastException if the array contains elements that are&#xA; not <i>mutually comparable</i> (for example, strings and integers).
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  parallelSort(
    a: unknown,
    fromIndex: number,
    toIndex: number,
    cmp: unknown
  ): void;

  /**
   * Cumulates, in parallel, each element of the given array in place, using the supplied function.
   * @param <T> the class of the objects in the array
   * @param array the array, which is modified in-place by this method
   * @param op a side-effect-free, associative function to perform the cumulation
   * @throws NullPointerException if the specified array or function is null
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  parallelPrefix(array: unknown, op: unknown): void;

  /**
   * Performs {@link #parallelPrefix(Object[], BinaryOperator)} for the given subrange of the array.
   * @param <T> the class of the objects in the array
   * @param array the array
   * @param fromIndex the index of the first element, inclusive
   * @param toIndex the index of the last element, exclusive
   * @param op a side-effect-free, associative function to perform the&#xA; cumulation
   * @throws IllegalArgumentException if {@code fromIndex > toIndex}
   * @throws ArrayIndexOutOfBoundsException if {@code fromIndex < 0} or {@code toIndex > array.length}
   * @throws NullPointerException if the specified array or function is null
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  parallelPrefix(
    array: unknown,
    fromIndex: number,
    toIndex: number,
    op: unknown
  ): void;

  /**
   * Cumulates, in parallel, each element of the given array in place, using the supplied function.
   * @param array the array, which is modified in-place by this method
   * @param op a side-effect-free, associative function to perform the cumulation
   * @throws NullPointerException if the specified array or function is null
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  parallelPrefix(array: number, op: unknown): void;

  /**
   * Performs {@link #parallelPrefix(long[], LongBinaryOperator)} for the given subrange of the array.
   * @param array the array
   * @param fromIndex the index of the first element, inclusive
   * @param toIndex the index of the last element, exclusive
   * @param op a side-effect-free, associative function to perform the cumulation
   * @throws IllegalArgumentException if {@code fromIndex > toIndex}
   * @throws ArrayIndexOutOfBoundsException if {@code fromIndex < 0} or {@code toIndex > array.length}
   * @throws NullPointerException if the specified array or function is null
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  parallelPrefix(
    array: number,
    fromIndex: number,
    toIndex: number,
    op: unknown
  ): void;

  /**
   * Cumulates, in parallel, each element of the given array in place, using the supplied function.
   * @param array the array, which is modified in-place by this method
   * @param op a side-effect-free function to perform the cumulation
   * @throws NullPointerException if the specified array or function is null
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  parallelPrefix(array: number, op: unknown): void;

  /**
   * Performs {@link #parallelPrefix(double[], DoubleBinaryOperator)} for the given subrange of the array.
   * @param array the array
   * @param fromIndex the index of the first element, inclusive
   * @param toIndex the index of the last element, exclusive
   * @param op a side-effect-free, associative function to perform the cumulation
   * @throws IllegalArgumentException if {@code fromIndex > toIndex}
   * @throws ArrayIndexOutOfBoundsException if {@code fromIndex < 0} or {@code toIndex > array.length}
   * @throws NullPointerException if the specified array or function is null
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  parallelPrefix(
    array: number,
    fromIndex: number,
    toIndex: number,
    op: unknown
  ): void;

  /**
   * Cumulates, in parallel, each element of the given array in place, using the supplied function.
   * @param array the array, which is modified in-place by this method
   * @param op a side-effect-free, associative function to perform the cumulation
   * @throws NullPointerException if the specified array or function is null
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  parallelPrefix(array: number, op: unknown): void;

  /**
   * Performs {@link #parallelPrefix(int[], IntBinaryOperator)} for the given subrange of the array.
   * @param array the array
   * @param fromIndex the index of the first element, inclusive
   * @param toIndex the index of the last element, exclusive
   * @param op a side-effect-free, associative function to perform the cumulation
   * @throws IllegalArgumentException if {@code fromIndex > toIndex}
   * @throws ArrayIndexOutOfBoundsException if {@code fromIndex < 0} or {@code toIndex > array.length}
   * @throws NullPointerException if the specified array or function is null
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  parallelPrefix(
    array: number,
    fromIndex: number,
    toIndex: number,
    op: unknown
  ): void;

  /**
   * Set all elements of the specified array, using the provided generator function to compute each element.
   * @param <T> type of elements of the array
   * @param array array to be initialized
   * @param generator a function accepting an index and producing the desired value for that position
   * @throws NullPointerException if the generator is null
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  setAll(array: unknown, generator: unknown): void;

  /**
   * Set all elements of the specified array, in parallel, using the provided generator function to compute each element.
   * @param <T> type of elements of the array
   * @param array array to be initialized
   * @param generator a function accepting an index and producing the desired value for that position
   * @throws NullPointerException if the generator is null
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  parallelSetAll(array: unknown, generator: unknown): void;

  /**
   * Set all elements of the specified array, using the provided generator function to compute each element.
   * @param array array to be initialized
   * @param generator a function accepting an index and producing the desired value for that position
   * @throws NullPointerException if the generator is null
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  setAll(array: number, generator: unknown): void;

  /**
   * Set all elements of the specified array, in parallel, using the provided generator function to compute each element.
   * @param array array to be initialized
   * @param generator a function accepting an index and producing the desired value for that position
   * @throws NullPointerException if the generator is null
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  parallelSetAll(array: number, generator: unknown): void;

  /**
   * Set all elements of the specified array, using the provided generator function to compute each element.
   * @param array array to be initialized
   * @param generator a function accepting an index and producing the desired value for that position
   * @throws NullPointerException if the generator is null
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  setAll(array: number, generator: unknown): void;

  /**
   * Set all elements of the specified array, in parallel, using the provided generator function to compute each element.
   * @param array array to be initialized
   * @param generator a function accepting an index and producing the desired value for that position
   * @throws NullPointerException if the generator is null
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  parallelSetAll(array: number, generator: unknown): void;

  /**
   * Set all elements of the specified array, using the provided generator function to compute each element.
   * @param array array to be initialized
   * @param generator a function accepting an index and producing the desired value for that position
   * @throws NullPointerException if the generator is null
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  setAll(array: number, generator: unknown): void;

  /**
   * Set all elements of the specified array, in parallel, using the provided generator function to compute each element.
   * @param array array to be initialized
   * @param generator a function accepting an index and producing the desired value for that position
   * @throws NullPointerException if the generator is null
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  parallelSetAll(array: number, generator: unknown): void;

  /**
   * Returns a Spliterator covering all of the specified array.
   * @param <T> type of elements
   * @param array the array, assumed to be unmodified during use
   * @return a spliterator for the array elements
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  spliterator(array: unknown): unknown;

  /**
   * Returns a {@link Spliterator} covering the specified range of the specified array.
   * @param <T> type of elements
   * @param array the array, assumed to be unmodified during use
   * @param startInclusive the first index to cover, inclusive
   * @param endExclusive index immediately past the last index to cover
   * @return a spliterator for the array elements
   * @throws ArrayIndexOutOfBoundsException if {@code startInclusive} is&#xA; negative, {@code endExclusive} is less than&#xA; {@code startInclusive}, or {@code endExclusive} is greater than&#xA; the array size
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  spliterator(
    array: unknown,
    startInclusive: number,
    endExclusive: number
  ): unknown;

  /**
   * Returns a {@link Spliterator.OfInt} covering all of the specified array.
   * @param array the array, assumed to be unmodified during use
   * @return a spliterator for the array elements
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  spliterator(array: number): unknown;

  /**
   * Returns a {@link Spliterator.OfInt} covering the specified range of the specified array.
   * @param array the array, assumed to be unmodified during use
   * @param startInclusive the first index to cover, inclusive
   * @param endExclusive index immediately past the last index to cover
   * @return a spliterator for the array elements
   * @throws ArrayIndexOutOfBoundsException if {@code startInclusive} is&#xA; negative, {@code endExclusive} is less than&#xA; {@code startInclusive}, or {@code endExclusive} is greater than&#xA; the array size
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  spliterator(
    array: number,
    startInclusive: number,
    endExclusive: number
  ): unknown;

  /**
   * Returns a {@link Spliterator.OfLong} covering all of the specified array.
   *
   * <p>The spliterator reports {@link Spliterator#SIZED},
   * {@link Spliterator#SUBSIZED}, {@link Spliterator#ORDERED}, and
   * {@link Spliterator#IMMUTABLE}.
   * @param array the array, assumed to be unmodified during use
   * @return the spliterator for the array elements
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  spliterator(array: number): unknown;

  /**
   * Returns a {@link Spliterator.OfLong} covering the specified range of the specified array.
   * @param array the array, assumed to be unmodified during use
   * @param startInclusive the first index to cover, inclusive
   * @param endExclusive index immediately past the last index to cover
   * @return a spliterator for the array elements
   * @throws ArrayIndexOutOfBoundsException if {@code startInclusive} is&#xA; negative, {@code endExclusive} is less than&#xA; {@code startInclusive}, or {@code endExclusive} is greater than&#xA; the array size
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  spliterator(
    array: number,
    startInclusive: number,
    endExclusive: number
  ): unknown;

  /**
   * Returns a {@link Spliterator.OfDouble} covering all of the specified array.
   * @param array the array, assumed to be unmodified during use
   * @return a spliterator for the array elements
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  spliterator(array: number): unknown;

  /**
   * Returns a {@link Spliterator.OfDouble} covering the specified range of the specified array.
   * @param array the array, assumed to be unmodified during use
   * @param startInclusive the first index to cover, inclusive
   * @param endExclusive index immediately past the last index to cover
   * @return a spliterator for the array elements
   * @throws ArrayIndexOutOfBoundsException if {@code startInclusive} is&#xA; negative, {@code endExclusive} is less than&#xA; {@code startInclusive}, or {@code endExclusive} is greater than&#xA; the array size
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  spliterator(
    array: number,
    startInclusive: number,
    endExclusive: number
  ): unknown;

  /**
   * Returns a sequential {@link Stream} with the specified array as its source.
   * @param <T> The type of the array elements
   * @param array The array, assumed to be unmodified during use
   * @return a {@code Stream} for the array
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  stream(array: unknown): unknown;

  /**
   * Returns a sequential {@link Stream} with the specified range of the specified array as its source.
   * @param <T> the type of the array elements
   * @param array the array, assumed to be unmodified during use
   * @param startInclusive the first index to cover, inclusive
   * @param endExclusive index immediately past the last index to cover
   * @return a {@code Stream} for the array range
   * @throws ArrayIndexOutOfBoundsException if {@code startInclusive} is&#xA; negative, {@code endExclusive} is less than&#xA; {@code startInclusive}, or {@code endExclusive} is greater than&#xA; the array size
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  stream(array: unknown, startInclusive: number, endExclusive: number): unknown;

  /**
   * Returns a sequential {@link IntStream} with the specified array as its source.
   * @param array the array, assumed to be unmodified during use
   * @return an {@code IntStream} for the array
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  stream(array: number): unknown;

  /**
   * Returns a sequential {@link IntStream} with the specified range of the specified array as its source.
   * @param array the array, assumed to be unmodified during use
   * @param startInclusive the first index to cover, inclusive
   * @param endExclusive index immediately past the last index to cover
   * @return an {@code IntStream} for the array range
   * @throws ArrayIndexOutOfBoundsException if {@code startInclusive} is&#xA; negative, {@code endExclusive} is less than&#xA; {@code startInclusive}, or {@code endExclusive} is greater than&#xA; the array size
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  stream(array: number, startInclusive: number, endExclusive: number): unknown;

  /**
   * Returns a sequential {@link LongStream} with the specified array as its source.
   * @param array the array, assumed to be unmodified during use
   * @return a {@code LongStream} for the array
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  stream(array: number): unknown;

  /**
   * Returns a sequential {@link LongStream} with the specified range of the specified array as its source.
   * @param array the array, assumed to be unmodified during use
   * @param startInclusive the first index to cover, inclusive
   * @param endExclusive index immediately past the last index to cover
   * @return a {@code LongStream} for the array range
   * @throws ArrayIndexOutOfBoundsException if {@code startInclusive} is&#xA; negative, {@code endExclusive} is less than&#xA; {@code startInclusive}, or {@code endExclusive} is greater than&#xA; the array size
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  stream(array: number, startInclusive: number, endExclusive: number): unknown;

  /**
   * Returns a sequential {@link DoubleStream} with the specified array as its source.
   * @param array the array, assumed to be unmodified during use
   * @return a {@code DoubleStream} for the array
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  stream(array: number): unknown;

  /**
   * Returns a sequential {@link DoubleStream} with the specified range of the specified array as its source.
   * @param array the array, assumed to be unmodified during use
   * @param startInclusive the first index to cover, inclusive
   * @param endExclusive index immediately past the last index to cover
   * @return a {@code DoubleStream} for the array range
   * @throws ArrayIndexOutOfBoundsException if {@code startInclusive} is&#xA; negative, {@code endExclusive} is less than&#xA; {@code startInclusive}, or {@code endExclusive} is greater than&#xA; the array size
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  stream(array: number, startInclusive: number, endExclusive: number): unknown;
}

declare namespace ArraysInstance {}

declare var arraysInstance: ArraysInstance;

export default arraysInstance;
