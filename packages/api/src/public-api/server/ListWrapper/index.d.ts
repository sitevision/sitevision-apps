import type Wrapper from "../../types/senselogic/sitevision/api/base/Wrapper";

/**
 * An convenience <code>java.util.List</code> wrapper that delegates method calls to the wrapped list.
 *
 * <p>
 *    This is a convenience wrapper that bypasses potential problems with the <code>add</code> method of a <code>java.util.List</code>.
 *    The <code>List.add</code> method accepts <code>null</code> values and returns a <code>boolean</code>.
 *    When working with Velocity, this boolean gets part of the output if not suppressed via a <code>#set</code>, <code>#if</code>,
 *    <code>#elseif</code> or via {@link senselogic.sitevision.api.script.ScriptUtil#swallow(Object)})
 * </p>
 *
 * <p>
 *    An example with the add problem of a java.util.List:<br>This Velocity code:
 * </p>
 * <pre><code>
 *    #set ($myList = $instanceCreatorUtil.list)
 *    $myList.add("Magnus Lövgren") <em>## Returns true</em>
 *    $myList.add("Mikael Wikblom") <em>## Returns true</em>
 *
 *    $someObject.someMethod($myList)</code></pre>will result in the following Velocity output
 *    (the <code>add</code> method of <code>List</code> returns a <code>boolean</code>):<pre><code>
 *    true true</code></pre>
 * <p>
 *    If a non-void method is invoked and the return value isn't handled, it will be part of the Velocity output.
 *    Using an <code>ListWrapper</code> will prevent that:
 * </p>
 * <pre><code>
 *    #set ($myList = $instanceCreatorUtil.listWrapper)
 *    myList.add("Magnus Lövgren") <em>## Silent</em>
 *    myList.add("Mikael Wikblom") <em>## Silent</em>
 *
 *    $someObject.someMethod($myList.unwrap()) <em>## Get wrapped List</em>
 * </code></pre>
 *
 *  <p>
 *     <strong>Important Velocity #foreach note!</strong><br>
 *     Iterating a <code>ListWrapper</code> via the Velocity <code>#foreach</code> loop is not possible in all Velocity versions
 *     (proper <code>Iterable</code> support not present). To ensure proper <code>#foreach</code> iteration in all Velocity versions,
 *     you should use one of the following alternative ways:
 *  </p>
 *  <pre><code>
 *     #set ($myList = $instanceCreatorUtil.listWrapper)
 *     ...
 *
 *     <em>## ALTERNATIVE A - unwrap, i.e. do actual iteration on the wrapped list itself</em>
 *     #foreach ($item in $myList.<strong>unwrap()</strong>)
 *        ...
 *     #end
 *
 *     <em>## ALTERNATIVE B - explicitly hand over the Iterator</em>
 *     #foreach ($item in $myList.<strong>iterator()</strong>)
 *        ...
 *     #end
 *
 *     <em>## ALTERNATIVE C - extract as array</em>
 *     #foreach ($item in $myList.<strong>toArray()</strong>)
 *        ...
 *     #end</code></pre>
 * <p>
 *     For best performance, you should choose alternative A or B over C.
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via {@link InstanceCreatorUtil#getListWrapper()}.
 *    See {@link InstanceCreatorUtil} for how to obtain an instance of the <code>InstanceCreatorUtil</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.5
 */
export interface ListWrapper extends Wrapper {
  /**
   * Appends the specified element (if non-null) to the end of the wrapped list.
   *
   * <p>
   *    <strong>Important!</strong> Null values in lists are inherently bad. This method will <strong>not</strong>
   *    delegate any <code>null</code> to the wrapped list.
   *    If you <em>must</em> add a <code>null</code> value, you can explicitly do it to the wrapped list, i.e:
   * </p>
   * <pre><code>
   *    #set ($myList = $instanceCreatorUtil.listWrapper)
   *    ...
   *    $myList.add($anObject.aMethod())          <em>## Will only delegate non-nulls to the wrapped list</em>
   *    $myList.unwrap().add($anObject.aMethod()) <em>## Will add any value directly to the wrapped list</em>
   * </code></pre>
   * @param anObject the element to be appended to the wrapped list, <code>null</code> will be ignored.
   */
  add(anObject: unknown): void;

  /**
 * Removes all of the elements from the wrapped list.
  
    */
  clear(): void;

  /**
   * Checks if the wrapped list contains a specified object.
   * @param anObject an element to check for in the wrapped list.
   * @return <code>true</code> if the wrapped list contains the specified element
   */
  contains(anObject: unknown): boolean;

  /**
   * Returns the element at the specified position in the wrapped list.
   * @param anIndex index of the element in the wrapped list to return
   * @return the element at the specified position in the wrapped list
   * @throws IndexOutOfBoundsException if the index is out of range (<code>index &lt; 0 || index &gt;= size()</code>)
   */
  get(anIndex: number): unknown;

  /**
   * Whether or not the wrapped list is empty (contains no elements).
   * @return <code>true</code> if the wrapped list contains no elements
   */
  isEmpty(): boolean;

  /**
   * Returns an iterator for the wrapped list.
   * @return an Iterator.
   */
  iterator(): unknown;

  /**
   * The size (number of elements) of the wrapped list.
   * @return the number of elements in the wrapped list
   */
  size(): number;

  /**
   * Returns an array containing all of the elements in the wrapped list.
   * @return an array containing the elements of the wrapped list
   */
  toArray(): unknown;

  /**
   * Sorts the wrapped list.
   * @param aComparator the comparator to use when sorting
   * @since Sitevision 4.0
   */
  sort(aComparator: unknown): void;

  /**
   * Returns the wrapped List.
   * @return the List wrapped by this ListWrapper
   */
  unwrap(): unknown;
}

declare namespace ListWrapper {}

declare var listWrapper: ListWrapper;

export = listWrapper;
