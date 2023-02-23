/**
 * Type of default index, used by {@link senselogic.sitevision.api.search.index.IndexUtil}.
 *
 *  <p>
 *     Example of how to get the {@link #USER_IDENTITY} type:
 *  </p>
 *  <ul>
 *     <li>
 *        Using <strong>Velocity:</strong><pre><code>
 *        #set ($instanceCreatorUtil = $sitevisionUtils.instanceCreatorUtil)
 *        #set ($enumClassName = 'senselogic.sitevision.api.search.index.IndexUtil$IndexType') <em>## Note the '$' separator...</em>
 *        #set ($userIdentityEnum = $instanceCreatorUtil.getEnumInstance($enumClassName, 'USER_IDENTITY'))</code></pre>
 *     </li>
 *     <li>
 *        Using server-side <strong>JavaScript:</strong><pre><code>
 *        var userIdentityEnum = require('IndexUtil.IndexType.USER_IDENTITY');</code></pre>
 *     </li>
 *  </ul>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */
declare enum IndexType {
  NODE,
  USER_IDENTITY,
  USER,
  UGC,
}

export default IndexType;
