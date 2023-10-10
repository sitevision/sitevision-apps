import type { PermissionStrategy } from "../../types/senselogic/sitevision/api/search/searcher/component/PermissionStrategy";
import type { PermissionCheck } from "../../types/senselogic/sitevision/api/search/searcher/component/PermissionCheck";
import type { Builder } from "../../types/senselogic/sitevision/api/base/Builder";

/**
 * <p>
 *     Builder for creating a {@link senselogic.sitevision.api.search.searcher.component.PermissionCheck} component.
 *  </p>
 *
 *  <p>
 *     PermissionCheck has one <em>optional</em> attribute:
 *  </p>
 *  <ul>
 *     <li>
 *        <em>permission strategy</em> - the permission checking strategy.
 *        Default is {@link senselogic.sitevision.api.search.searcher.component.PermissionStrategy#EARLY_CHECK}.
 *     </li>
 *  </ul>
 *
 *  <p>
 *     <strong>Tip!</strong> The {@link senselogic.sitevision.api.base.Builder Builder interface documentation} contains
 *     more information about Builders and how to work with them!
 *  </p>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.search.SearchFactory#getPermissionCheckBuilder()}.
 *     See {@link senselogic.sitevision.api.search.SearchFactory} for how to obtain an instance of the <code>SearchFactory</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 2023.09.1
 */
export interface PermissionCheckBuilder extends Builder {
  /**
   * Sets the permission strategy.
   * @param aPermissionStrategy the permission strategy
   * @return this builder
   */
  setPermissionStrategy(
    aPermissionStrategy: PermissionStrategy
  ): PermissionCheckBuilder;

  /**
   * Creates a PermissionCheck component instance using currently specified state/behaviour.
   *
   *  <p>
   *     Default strategy {@link senselogic.sitevision.api.search.searcher.component.PermissionStrategy#EARLY_CHECK} will be used
   *     if the component has no state (i.e. no {@link PermissionStrategy} explicitly set) when built.
   *  </p>
   * @return a permission check component
   */
  build(): PermissionCheck;
}

declare namespace PermissionCheckBuilder {}

declare var permissionCheckBuilder: PermissionCheckBuilder;

export default permissionCheckBuilder;
