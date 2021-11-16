import List from '../../builtins/List';
import Node from '../../builtins/Node';

/**
 * Returns a list of <code>Node</code> objects for all bookmarks belonging to
 * the current user regardless of category. This method only returns valid bookmarks
 * (existing, published objects)
 *
 * @return {List<Node>} a list of bookmark nodes. Is never <code>null</code>
 */
export function getBookmarks(): List<Node>;

/**
 * Returns a list of <code>Node</code> objects corresponding to the bookmarks for
 * the current user and the provided categories. This method only returns valid bookmarks
 * (existing, published objects)
 *
 * @param {string} category a comma separated list of categories or <code>null</code> for no category
 * @return {List<Node>} a list of bookmark nodes. Is never <code>null</code>
 */
export function getBookmarks(category: string): List<Node>;

/**
 * Adds a bookmark for the current user. This operation is synchronized
 *
 * @param {Node} bookmark   the node to be bookmarked must be a <code>sv:page</code>,
 *                   <code>sv:sitePage</code> or an <code>sv:article</code>
 * @param {string} categories a comma separated list of categories to where this bookmark belongs
 * @throws IllegalArgumentException if <code>bookmark</code> is node of wrong type
 * @throws NullPointerException     if <code>bookmark</code> is <code>null</code>
 * @deprecated Use {@link #add(javax.jcr.Node)}, categories will be resolved from metadata.
 */
export function add(bookmark: Node, categories: string): void;

/**
 * Adds a bookmark for the current user. This operation is synchronized
 *
 * @param {Node} bookmark the node to be bookmarked must be a <code>sv:page</code>,
 *                 <code>sv:sitePage</code> or an <code>sv:article</code>
 * @throws IllegalArgumentException if bookmark is node of wrong type
 * @throws NullPointerException     if <code>bookmark</code> is <code>null</code>
 */
export function add(bookmark: Node): void;

/**
 * Removes a bookmark for the current user. This operation is synchronized
 *
 * @param {Node} bookmark the bookmark
 * @throws NullPointerException if <code>bookmark</code> is <code>null</code>
 */
export function remove(bookmark: Node): void;

/**
 * Checks if the current user has the provided bookmark
 *
 * @param {Node} bookmark the bookmark
 * @return if the user has provided bookmark
 * @throws NullPointerException if <code>bookmark</code> is <code>null</code>
 */
export function contains(bookmark: Node): boolean;

/**
 * Accesses a <code>boolean</code> indicating if the current site has a limited number of bookmarks.
 *
 * To get the max number of bookmarks, use {@link #getMaxNofBookmarks()}.
 *
 * @return {boolean} a <code>boolean</code> indicating if the current site has a limited number of bookmarks
 * @throws NullPointerException if current site is indeterminable
 * @see #getMaxNofBookmarks()
 * @since Sitevision 2.6.1_01
 */
export function getLimitNofBookmarks(): boolean;

/**
 * Accessor to max number of bookmarks for the current site.
 *
 * @return {number} max number of bookmarks for the current site
 * @throws NullPointerException if current site is indeterminable
 * @see #getLimitNofBookmarks()
 * @since Sitevision 2.6.1_01
 */
export function getMaxNofBookmarks(): number;

declare namespace bookmarkUtil {
  export {
    getBookmarks,
    add,
    remove,
    contains,
    getLimitNofBookmarks,
    getMaxNofBookmarks,
  };
}

export default bookmarkUtil;
