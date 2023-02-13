import type IndexType from "../IndexUtil.IndexType";
import type { Node } from "../../types/javax/jcr/Node";

/**
 * Index utility interface.
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.search.SearchFactory#getIndexUtil()}.
 *    See {@link senselogic.sitevision.api.search.SearchFactory} for how to obtain an instance of the <code>SearchFactory</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */
export interface IndexUtil {
  /**
   * Gets the default index for a specified index type.
   *
   * <p>
   *    <strong>Note!</strong>The default user identity index is only handled if a <em>Social Collaboration</em> license is in use.
   *    The default user-generated content (UGC) index is only handled if a <em>Social Collaboration</em> license is in use.
   * </p>
   * @param aIndexType type of index
   * @return the default index for <code>aIndexType</code>, or <code>null</code> if not available
   */
  getDefaultIndex(aIndexType: IndexType): Node;

  /**
   * Gets an index by name.
   *
   * <p>
   *    Lookup order:
   * </p>
   * <ol>
   *    <li>Custom <em>site</em> index</li>
   *    <li>Custom <em>server</em> index</li>
   *    <li><em>Default</em> index(-es), types specified by {@link senselogic.sitevision.api.search.index.IndexUtil.IndexType}</li>
   * </ol>
   * <p>
   *    <strong>Note!</strong> Custom index is only handled if a <em>Search Package 2</em> license is in use.
   *    The default user identity index is only handled if a <em>Social Collaboration</em> license is in use.
   *    The default user-generated content (UGC) index is only handled if a <em>Social Collaboration</em> license is in use.
   * </p>
   * @param aIndexName the name of the index
   * @return the index or <code>null</code> if no index matches <code>aIndexName</code>
   */
  getIndexByName(aIndexName: string): Node;
}

declare namespace IndexUtil {}

declare var indexUtil: IndexUtil;

export default indexUtil;
