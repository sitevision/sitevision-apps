import Node from "../../../../../javax/jcr/Node";

/**
 * The ImageScaler interface describes in which way images should be rescaled by an <code>ImageRenderer</code>.
 *
 * <p>
 * An immutable instance of the Sitevision class implementing this interface can be obtained via
 * {@link senselogic.sitevision.api.Utils#getImageScaler(int, int)}.
 * See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 2.6.1_08
 */
interface ImageScaler {
  /**
   * Returns max width in pixels for images scaled with instances of this interface.
   * @return max width for scaled images
   */
  getMaxWidth(): number;

  /**
   * Returns max height in pixels for images scaled with instances of this interface.
   * @return max height for scaled images
   */
  getMaxHeight(): number;

  /**
   * Creates a scaled image using the width and height of this scaler.
   *
   * <p>
   *    <em>Note! SVG images can't be scaled, i.e. calling this method with a sv:image of svg type will always return null.</em>
   * </p>
   *
   * <p>
   *    <strong>Important Note!</strong> The scaled image is a very short-lived and volatile kind of node.
   *    Its parent/child relationship can never be relied upon. Hence the JCR Path (and tree-related operations)
   *    of the returned scaled image node should never be used
   *    <em>(i.e. only use the returned node to get the properties you are interested in)</em>.
   * </p>
   * @param aImageNode a image node
   * @return a scaled variant of aImageNode, or null if aImageNode isn't a sv:image or can't be scaled.
   * @since Sitevision 4.3
   */
  getScaledImage(aImageNode: Node): Node;
}

export default ImageScaler;
