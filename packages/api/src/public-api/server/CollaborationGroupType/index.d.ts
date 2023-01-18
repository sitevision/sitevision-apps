/**
 * Type of Collaboration group.
 *
 * <p>
 *    Example of how to get the {@link #OPEN} type:
 * </p>
 * <ul>
 *    <li>
 *       Using <strong>Velocity:</strong><pre><code>
 *       #set ($instanceCreatorUtil = $sitevisionUtils.instanceCreatorUtil)
 *       #set ($enumClassName = 'senselogic.sitevision.api.collaboration.CollaborationGroupType')
 *       #set ($openEnum = $instanceCreatorUtil.getEnumInstance($enumClassName, 'OPEN'))</code></pre>
 *    </li>
 *    <li>
 *       Using server-side <strong>JavaScript:</strong><pre><code>
 *       var openEnum = require('CollaborationGroupType.OPEN');</code></pre>
 *    </li>
 * </ul>
 * @author Magnus Lövgren
 * @since Sitevision 4.1
 */
declare enum CollaborationGroupType {
  OPEN,
  MEMBER_MODERATED,
  CLOSED,
}

export default CollaborationGroupType;
