/**
 * <p>
 *     A permission check component that defines permission checking behaviour for a {@link senselogic.sitevision.api.search.searcher.Searcher}.
 *  </p>
 *
 *  <p>
 *     <strong>Note! This component is only applicable when querying a Node index (<code>sv:nodeIndex</code>)!</strong>
 *  </p>
 *
 *  <p>
 *     The actual behaviour is specified when it is constructed using the
 *     {@link senselogic.sitevision.api.search.searcher.builder.PermissionCheckBuilder}.
 *     The component is applied to the <code>Searcher</code> via
 *     {@link senselogic.sitevision.api.search.searcher.builder.SearcherBuilder#setPermissionCheck(PermissionCheck)}
 *     when the <code>Searcher</code> is constructed.
 *  </p>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.search.searcher.builder.PermissionCheckBuilder#build()}.
 *     See {@link senselogic.sitevision.api.search.searcher.builder.PermissionCheckBuilder} for how to obtain an instance of the
 *     <code>PermissionCheck</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 2023.09.1
 */
export type PermissionCheck = {};
