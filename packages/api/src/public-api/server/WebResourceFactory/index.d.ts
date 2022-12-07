import ArticleUtil from "../ArticleUtil";
import FileUtil from "../FileUtil";
import ImageUtil from "../ImageUtil";
import LinkPageUtil from "../LinkPageUtil";
import LinkTargetBuilder from "../LinkTargetBuilder";
import PageUtil from "../PageUtil";

/**
 * Gets an instance of an article utility class
 * @return an article utility class
 */
export function getArticleUtil(): ArticleUtil;

/**
 * Gets an instance of a file utility class
 * @return a file utility class
 */
export function getFileUtil(): FileUtil;

/**
 * Gets an instance of an image utility class
 * @return an image utility class
 */
export function getImageUtil(): ImageUtil;

/**
 * Gets an instance of a link page utility class.
 * @return an instance of a link page utility class
 */
export function getLinkPageUtil(): LinkPageUtil;

/**
 * Gets an instance of a link target builder class.
 * @return an instance of a link target builder class
 */
export function getLinkTargetBuilder(): LinkTargetBuilder;

/**
 * Gets an instance of a page utility class
 * @return a page utility class
 */
export function getPageUtil(): PageUtil;

/**
 * Factory for creating instances of web resource utilities.
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.Utils#getWebResourceFactory()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 4.2
 */
declare namespace webResourceFactory {
  export {
    getArticleUtil,
    getFileUtil,
    getImageUtil,
    getLinkPageUtil,
    getLinkTargetBuilder,
    getPageUtil,
  };
}

export default webResourceFactory;
