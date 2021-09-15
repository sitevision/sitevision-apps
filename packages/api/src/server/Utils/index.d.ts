import { ImageScaler } from '../ImageScaler';

/**
* Gets an instance of an immutable image scaler that enables scaling of images to a certain size.
* @param {number} aMaxWidth - max width in pixels for scaled images, must be 10 or higher
* @param {number} aMaxHeight - max height in pixels for scaled images, must be 10 or higher
* @returns {ImageScaler} an image scaler that can be used when rendering scaled images with an ImageRenderer. If aMaxWidth or aMaxHeight has illegal values, null will be returned. 
*/
export function getImageScaler(aMaxWidth: number, aMaxHeight: number): ImageScaler;

declare namespace Utils {
  export {
    getImageScaler,
  }
}

export default Utils;
