/**
 * The size of the icons rendered by the BuddyIconRenderer.
 *
 *  <p>
 *     Example of how to get the {@link #LARGE} type:
 *  </p>
 *  <ul>
 *     <li>
 *        Using <strong>Velocity:</strong><pre><code>
 *        #set ($instanceCreatorUtil = $sitevisionUtils.instanceCreatorUtil)
 *        #set ($enumClassName = 'senselogic.sitevision.api.render.BuddyIconRenderer$BuddyIconSize') <em>## Note the '$' separator...</em>
 *        #set ($largeSize = $instanceCreatorUtil.getEnumInstance($enumClassName, 'LARGE'))</code></pre>
 *     </li>
 *     <li>
 *        Using server-side <strong>JavaScript:</strong><pre><code>
 *        var largeSize = require('BuddyIconRenderer.BuddyIconSize.LARGE');</code></pre>
 *     </li>
 *  </ul>
 * @author Magnus Lövgren
 * @since Sitevision 3.5.3
 */
declare enum BuddyIconSize {
  SMALL,
  LARGE,
  X_LARGE,
  WIDTH_160,
  WIDTH_320,
  WIDTH_480,
  WIDTH_640,
  WIDTH_800,
  WIDTH_960,
  WIDTH_1120,
  WIDTH_1280,
  WIDTH_1440,
  WIDTH_1600,
  WIDTH_1760,
  WIDTH_1920,
  WIDTH_2080,
}

export default BuddyIconSize;
