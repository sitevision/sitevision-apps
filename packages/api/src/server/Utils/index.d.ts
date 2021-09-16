import { ImageRenderer } from '../ImageRenderer';
import { ImageScaler } from '../ImageScaler';

/**
* Creates and returns a new instance of a stateful image renderer. Since the renderer is stateful, re-use of the same instance instead of getting a new is preferred for best performance. (i.e. Just call this method once in the rendering phase of your portlet)
* @returns {ImageRenderer} a stateful image renderer.
*/
export function getImageRenderer(): ImageRenderer;

/**
* Gets an instance of an immutable image scaler that enables scaling of images to a certain size.
* @param {number} aMaxWidth - max width in pixels for scaled images, must be 10 or higher
* @param {number} aMaxHeight - max height in pixels for scaled images, must be 10 or higher
* @returns {ImageScaler} an image scaler that can be used when rendering scaled images with an ImageRenderer. If aMaxWidth or aMaxHeight has illegal values, null will be returned. 
*/
export function getImageScaler(aMaxWidth: number, aMaxHeight: number): ImageScaler;

declare namespace Utils {
  export {
    getImageRenderer,
    getImageScaler,
  }
}

export default Utils;
