/**
 * The named permission demarcation, used by {@link PermissionUtil}.
 *
 *  <p>
 *     Example of how to get the {@link #READ} type:
 *  </p>
 *  <ul>
 *     <li>
 *        Using <strong>Velocity:</strong><pre><code>
 *        #set ($instanceCreatorUtil = $sitevisionUtils.instanceCreatorUtil)
 *        #set ($enumClassName = 'senselogic.sitevision.api.security.PermissionUtil$Permission') <em>## Note the '$' separator...</em>
 *        #set ($readEnum = $instanceCreatorUtil.getEnumInstance($enumClassName, 'READ'))</code></pre>
 *     </li>
 *     <li>
 *        Using server-side <strong>JavaScript:</strong><pre><code>
 *        var readEnum = require('PermissionUtil.Permission.READ');</code></pre>
 *     </li>
 *  </ul>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */
declare enum Permission {
  READ,
  WRITE,
  MOVE_NODE,
  PUBLISH,
  REVIEW,
  DELETE,
  CREATE_ARCHIVE,
  CREATE_COLLABORATION_GROUP,
  CREATE_FOLDER,
  CREATE_LAYOUT,
  CREATE_PAGE,
  CREATE_LINK_PAGE,
  CREATE_CLOSED_COLLABORATION_GROUP,
  MANAGE_COLLABORATION_GROUP,
  MANAGE_SITE_PROPERTIES,
  MANAGE_SUBSCRIPTION,
  MANAGE_USER_IDENTITIES,
  MODIFY_SEARCH_PRIORITY,
  MANAGE_TRANSLATIONS,
  MANAGE_ADDONS,
  MANAGE_USERS,
  MANAGE_RIGHTS,
  DEVELOPER,
  USE_COLLABORATION_GROUP,
  MANAGE_TOPICS,
  MANAGE_PUBLISHING_PROJECT,
  MANAGE_DOWNLOAD_PROTECTION,
  MANAGE_CHANNELS,
  CREATE_PRIVATE_CHANNELS,
  MANAGE_PINNING,
  MANAGE_TYPES_IDENTIFIERS,
  MANAGE_CUSTOM_SEARCH_INDEX,
}

export default Permission;
