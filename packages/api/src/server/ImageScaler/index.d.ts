import Node from '../../builtins/Node';

export interface ImageScaler {
  /**
  * Returns max height in pixels for images scaled with instances of this interface.
  * @returns {number} max height for scaled images 
  */
  getMaxHeight(): number;

  /**
  * Returns max width in pixels for images scaled with instances of this interface.
  * @returns {number} max width for scaled images 
  */
  getMaxWidth(): number;

  /**
  * Creates a scaled image using the width and height of this scaler.
  * @param {Node} aImageNode - a image node
  * @returns {Node} a scaled variant of aImageNode, or null if aImageNode isn't a sv:image or can't be scaled. 
  */
  getScaledImage(aImageNode: Node): Node;
}


