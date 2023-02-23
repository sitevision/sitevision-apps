/**
 * Defines doctypes rendered by Sitevision.
 *
 *  <p>
 *     Example of how to get the {@link #HTML5} type:
 *  </p>
 *  <ul>
 *     <li>
 *        Using <strong>Velocity:</strong><pre><code>
 *        #set ($instanceCreatorUtil = $sitevisionUtils.instanceCreatorUtil)
 *        #set ($enumClassName = 'senselogic.sitevision.api.webresource.doctype.DocType')
 *        #set ($html5Enum = $instanceCreatorUtil.getEnumInstance($enumClassName, 'HTML5'))</code></pre>
 *     </li>
 *     <li>
 *        Using server-side <strong>JavaScript:</strong><pre><code>
 *        var html5Enum = require('DocType.HTML5');</code></pre>
 *     </li>
 *  </ul>
 * @author Magnus Lövgren
 * @since Sitevision 3.0
 */
declare enum DocType {
  NO_DOCTYPE,
  HTML4_TRANSITIONAL,
  XHTML1_TRANSITIONAL,
  XHTML1_STRICT,
  HTML5,
}

export default DocType;
