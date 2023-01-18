/**
 * Collaboration group state.
 *
 * <p>
 *    Example of how to get the {@link #ACTIVE} state:
 * </p>
 * <ul>
 *    <li>
 *       Using <strong>Velocity:</strong><pre><code>
 *       #set ($instanceCreatorUtil = $sitevisionUtils.instanceCreatorUtil)
 *       #set ($enumClassName = 'senselogic.sitevision.api.collaboration.CollaborationGroupState')
 *       #set ($activeEnum = $instanceCreatorUtil.getEnumInstance($enumClassName, 'ACTIVE'))</code></pre>
 *    </li>
 *    <li>
 *       Using server-side <strong>JavaScript:</strong><pre><code>
 *       var activeEnum = require('CollaborationGroupState.ACTIVE');</code></pre>
 *    </li>
 * </ul>
 * @author Magnus Lövgren
 * @since Sitevision 4.1
 */
declare enum CollaborationGroupState {
  ACTIVE,
  INACTIVE,
}

export default CollaborationGroupState;
