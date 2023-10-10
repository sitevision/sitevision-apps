/**
 * Permission strategy, determines how a {@link senselogic.sitevision.api.search.searcher.component.PermissionCheck}
 *  component will perform its checks.
 *
 *  <p>
 *     Example of how to get the {@link #EARLY_CHECK} state:
 *  </p>
 *  <ul>
 *     <li>
 *        In a bundled <strong>WebApp/RESTApp</strong>:<pre><code>
 *        import EARLY_CHECK from '@sitevision/api/server/PermissionStrategy.EARLY_CHECK';</code></pre>
 *     </li>
 *     <li>
 *        Using server-side <strong>JavaScript</strong> in a Script module:<pre><code>
 *        const earlyCheckEnum = require('PermissionStrategy.EARLY_CHECK');</code></pre>
 *     </li>
 *     <li>
 *        Using <strong>Velocity</strong>:<pre><code>
 *        #set ($instanceCreatorUtil = $sitevisionUtils.instanceCreatorUtil)
 *        #set ($enumClassName = 'senselogic.sitevision.api.search.searcher.component.PermissionStrategy')
 *        #set ($earlyCheckEnum = $instanceCreatorUtil.getEnumInstance($enumClassName, 'EARLY_CHECK'))</code></pre>
 *     </li>
 *  </ul>
 * @author Magnus Lövgren
 * @since Sitevision 2023.09.1
 * @see PermissionCheck
 */
export type PermissionStrategy = {
  EARLY_CHECK: "EARLY_CHECK";
  LATE_CHECK: "LATE_CHECK";
};
