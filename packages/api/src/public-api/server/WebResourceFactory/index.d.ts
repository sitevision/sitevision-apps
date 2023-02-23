import type { ArticleUtil } from "../ArticleUtil";
import type { FileUtil } from "../FileUtil";
import type { ImageUtil } from "../ImageUtil";
import type { LinkPageUtil } from "../LinkPageUtil";
import type { LinkTargetBuilder } from "../LinkTargetBuilder";
import type { PageUtil } from "../PageUtil";

/**
 * Factory for creating instances of web resource utilities.
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.Utils#getWebResourceFactory()}.
 *     See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 4.2
 */
export interface WebResourceFactory {
  /**
   * Gets an instance of an article utility class
   * @return an article utility class
   */
  getArticleUtil(): ArticleUtil;

  /**
   * Gets an instance of a file utility class
   * @return a file utility class
   */
  getFileUtil(): FileUtil;

  /**
   * Gets an instance of an image utility class
   * @return an image utility class
   */
  getImageUtil(): ImageUtil;

  /**
   * Gets an instance of a link page utility class.
   * @return an instance of a link page utility class
   */
  getLinkPageUtil(): LinkPageUtil;

  /**
   * Gets an instance of a link target builder class.
   * @return an instance of a link target builder class
   */
  getLinkTargetBuilder(): LinkTargetBuilder;

  /**
   * Gets an instance of a page utility class
   * @return a page utility class
   */
  getPageUtil(): PageUtil;
}

declare namespace WebResourceFactory {}

declare var webResourceFactory: WebResourceFactory;

export default webResourceFactory;
