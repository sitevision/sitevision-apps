/**
 * Basic render information about current buddy icon of a BuddyIconRenderer.
 *
 * <p>
 *    This data is typically used for custom rendering of a buddy icon.
 * </p>
 *
 * <p>
 *    <em>
 *       Server-side Javascript example
 *       (a function that provides custom rendering of a 48x48 buddy icon image for a given sv:userIdentity Node):
 *    </em>
 * </p><pre><code>  function getHtmlImage(userIdentity) {
 *     const buddyIconRenderer = require('BuddyIconRenderer');
 *     const LARGE_SIZE = require('BuddyIconRenderer.BuddyIconSize.LARGE');
 *
 *     // Load renderer and set proper size
 *     buddyIconRenderer.update(userIdentity);
 *     buddyIconRenderer.setBuddyIconSize(LARGE_SIZE);
 *
 *     // Get BuddyIconInfo data
 *     const info = buddyIconRenderer.getBuddyIconInfo();
 *
 *     // Do custom render...
 *     return '&lt;img src="' + info.getURI() + '"&gt;';
 *  }</code></pre>
 * @see BuddyIconRenderer#getBuddyIconInfo()
 * @author Magnus Lövgren
 * @since Sitevision 8.2
 */
type BuddyIconInfo = {
  /**
   * The URI of current buddy icon.
   * @return the URI of the buddy icon, might be null
   */
  getURI(): string;

  /**
   * The width of current buddy icon.
   * @return the width of the buddy icon, might be zero.
   */
  getWidth(): number;

  /**
   * The height of current buddy icon.
   * @return the height of the buddy icon, might be zero.
   */
  getHeight(): number;
};

export = BuddyIconInfo;
