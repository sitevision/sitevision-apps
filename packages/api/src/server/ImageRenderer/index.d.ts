import Node from '../../builtins/Node';

import SourceSetMode from '../SourceSetMode';
import DimensionMode from '../DimensionMode';
import { ImageScaler } from '../ImageScaler';

export interface ImageRenderer {
  /**
  * Removes the description, i.e. executes setDescription(null) 
  */
  clearDescription(): void;

  /**
  * Utility method for executing setDimensionMode(DimensionMode.OFF). 
  */
  clearDimensionMode(): void;

  /**
  * Utility method for executing setHoverImage(null) 
  */
  clearHoverImage(): void;

  /**
  * Removes the image scaler, i.e. executes setImageScaler(null) 
  */
  clearImageScaler(): void;

  /**
  * Utility method for executing setSourceSetMode(SourceSetMode.OFF). 
  */
  clearSourceSetMode(): void;

  /**
  * Removes the style, i.e. executes setStyle(null) 
  */
  clearStyle(): void;

  /**
  * Utility method for executing setUseAutoDescription(false) 
  */
  clearUseAutoDescription(): void;

  /**
  * Utility method for executing setUseAutoTitle(false) 
  */
  clearUseAutoTitle(): void;

  /**
  * Utility method for executing setUseEncoding(false) 
  */
  clearUseEncoding(): void;

  /**
  * Utility method for executing setUseImageScaler(false) 
  */
  clearUseImageScaler(): void;

  /**
  * Utility method for executing setLazyLoad(false) 
  */
  clearUseLazyLoad(): void;

  /**
  * Utility method for executing setUseTitleRendering(false) 
  */
  clearUseTitleRendering(): void;

  /**
  * Utility method for executing setDimensionMode(DimensionMode.ON). 
  */
  forceDimensionMode(): void;

  /**
  * Utility method for executing setSourceSetMode(SourceSetMode.ON). 
  */
  forceSourceSetMode(): void;

  /**
  * Utility method for executing setUseAutoDescription(true) 
  */
  forceUseAutoDescription(): void;

  /**
  * Utility method for executing setUseAutoTitle(true) 
  */
  forceUseAutoTitle(): void;

  /**
  * Utility method for executing setUseEncoding(true) 
  */
  forceUseEncoding(): void;

  /**
  * Utility method for executing setUseImageScaler(true) 
  */
  forceUseImageScaler(): void;

  /**
  * Utility method for executing setLazyLoad(true) 
  */
  forceUseLazyLoad(): void;

  /**
  * Utility method for executing setUseTitleRendering(true) 
  */
  forceUseTitleRendering(): void;

  /**
  * Whether or not a hover image is loaded.
  * @returns {boolean} true if a hover image node is loaded, false if not. 
  */
  isHoverImageLoaded(): boolean;

  /**
  * Whether or not an image is loaded.
  * @returns {boolean} true if an image node is loaded, false if not. 
  */
  isImageLoaded(): boolean;

  /**
  * Whether or not an image scaler is loaded.
  * @returns {boolean} true if an image scaler is loaded, false if not. 
  */
  isImageScalerLoaded(): boolean;

  /**
  * Builds a xhtml img element based on current state.
  * @returns {string} if the renderer has a loaded image a xhtml img element, ready to print out on a page, will be returned. If there are no image to render or rendering fails, an empty string will be returned. 
  */
  render(): string;

  /**
  * Utility method for executing setDimensionMode(DimensionMode.AUTO). 
  */
  resetDimensionMode(): void;

  /**
  * Utility method for executing setSourceSetMode(SourceSetMode.AUTO). 
  */
  resetSourceSetMode(): void;

  /**
  * Sets the image description (alt attribute on the img element).
  * @param {string} aDescription - an alternative description of the image 
  */
  setDescription(aDescription: string): void;

  /**
  * The width/height rendering strategy.
  * @param {DimensionMode} aDimensionMode - the dimension mode, determines how to render width/height css style properties 
  */
  setDimensionMode(aDimensionMode: DimensionMode): void;

  /**
  * Sets a hover image that will be activated on the onmouseover javascript event.
  * @param {Node} anImageNode - the hover image (a node with primary node type sv:image) 
  */
  setHoverImage(anImageNode: Node): void;

  /**
  * Sets the image to be rendered.
  * @param {Node} anImageNode - the image (a node with primary node type sv:image) 
  */
  setImage(anImageNode: Node): void;

  /**
  * Sets the image scaler that should be used by the renderer if useImageScaler is true.
  * @param {ImageScaler} anImageScaler - the image scaler that can be used by the renderer to create scaled images 
  */
  setImageScaler(anImageScaler: ImageScaler): void;

  /**
  * Sets whether or not the image should be lazy loaded (loaded when it appears in the browser's viewport).
  * @param {boolean} aLazyLoad - whether the image should be lazy loaded. 
  */
  setLazyLoad(aLazyLoad: boolean): void;

  /**
  * The srcset attribute rendering strategy.
  * @param {SourceSetMode} aSourceSetMode - the source set mode, determines whether or not a srcset attribute should be rendered 
  */
  setSourceSetMode(aSourceSetMode: SourceSetMode): void;

  /**
  * Sets the style (style attribute on the img element).
  * @param {string} aStyle - the style of the rendered element 
  */
  setStyle(aStyle: string): void;

  /**
  * A description fallback strategy that makes it possible to render a description value even if no description has been set.
  * @param {boolean} useAutoDescription - whether or not the renderer should try to get a description via metadata if no description is set 
  */
  setUseAutoDescription(useAutoDescription: boolean): void;

  /**
  * A title fallback strategy that makes it possible to render a title value even if no description is available.
  * @param {boolean} useAutoTitle - whether or not the renderer should try to get a description via metadata to use as title value if no description is available 
  */
  setUseAutoTitle(useAutoTitle: boolean): void;

  /**
  * Sets whether or not descriptions should be encoded.
  * @param {boolean} performEncoding - whether descriptions should be encoded or not. 
  */
  setUseEncoding(performEncoding: boolean): void;

  /**
  * Decides if an image scaler should be used or not.
  * @param {boolean} useImageScaler - decides if an image scaler should be used or not. If true, an image scaler will be used if it is set. If false, no image scaler will be used even if it is set. 
  */
  setUseImageScaler(useImageScaler: boolean): void;

  /**
  * A title strategy that makes it possible to render a title attribute with the description as value.
  * @param {boolean} useTitleRendering - whether or not a title attribute should be rendered 
  */
  setUseTitleRendering(useTitleRendering: boolean): void;

  /**
  * Updates the renderer with a new image.
  * @param {Node} anImageNode - the image (a node with primary node type sv:image) 
  */
  update(anImageNode: Node): void;

  /**
  * Updates the renderer with a new image and a new description.
  * @param {Node} anImageNode - the image (a node with primary node type sv:image)
  * @param {string} aDescription - an image description, or null to clear any previous description 
  */
  update(anImageNode: Node, aDescription: string): void;
}

declare namespace imageRenderer {
  /**
  * Removes the description, i.e. executes setDescription(null) 
  */
  export function clearDescription(): void;

  /**
  * Utility method for executing setDimensionMode(DimensionMode.OFF). 
  */
  export function clearDimensionMode(): void;

  /**
  * Utility method for executing setHoverImage(null) 
  */
  export function clearHoverImage(): void;

  /**
  * Removes the image scaler, i.e. executes setImageScaler(null) 
  */
  export function clearImageScaler(): void;

  /**
  * Utility method for executing setSourceSetMode(SourceSetMode.OFF). 
  */
  export function clearSourceSetMode(): void;

  /**
  * Removes the style, i.e. executes setStyle(null) 
  */
  export function clearStyle(): void;

  /**
  * Utility method for executing setUseAutoDescription(false) 
  */
  export function clearUseAutoDescription(): void;

  /**
  * Utility method for executing setUseAutoTitle(false) 
  */
  export function clearUseAutoTitle(): void;

  /**
  * Utility method for executing setUseEncoding(false) 
  */
  export function clearUseEncoding(): void;

  /**
  * Utility method for executing setUseImageScaler(false) 
  */
  export function clearUseImageScaler(): void;

  /**
  * Utility method for executing setLazyLoad(false) 
  */
  export function clearUseLazyLoad(): void;

  /**
  * Utility method for executing setUseTitleRendering(false) 
  */
  export function clearUseTitleRendering(): void;

  /**
  * Utility method for executing setDimensionMode(DimensionMode.ON). 
  */
  export function forceDimensionMode(): void;

  /**
  * Utility method for executing setSourceSetMode(SourceSetMode.ON). 
  */
  export function forceSourceSetMode(): void;

  /**
  * Utility method for executing setUseAutoDescription(true) 
  */
  export function forceUseAutoDescription(): void;

  /**
  * Utility method for executing setUseAutoTitle(true) 
  */
  export function forceUseAutoTitle(): void;

  /**
  * Utility method for executing setUseEncoding(true) 
  */
  export function forceUseEncoding(): void;

  /**
  * Utility method for executing setUseImageScaler(true) 
  */
  export function forceUseImageScaler(): void;

  /**
  * Utility method for executing setLazyLoad(true) 
  */
  export function forceUseLazyLoad(): void;

  /**
  * Utility method for executing setUseTitleRendering(true) 
  */
  export function forceUseTitleRendering(): void;

  /**
  * Whether or not a hover image is loaded.
  * @returns {boolean} true if a hover image node is loaded, false if not. 
  */
  export function isHoverImageLoaded(): boolean;

  /**
  * Whether or not an image is loaded.
  * @returns {boolean} true if an image node is loaded, false if not. 
  */
  export function isImageLoaded(): boolean;

  /**
  * Whether or not an image scaler is loaded.
  * @returns {boolean} true if an image scaler is loaded, false if not. 
  */
  export function isImageScalerLoaded(): boolean;

  /**
  * Builds a xhtml img element based on current state.
  * @returns {string} if the renderer has a loaded image a xhtml img element, ready to print out on a page, will be returned. If there are no image to render or rendering fails, an empty string will be returned. 
  */
  export function render(): string;

  /**
  * Utility method for executing setDimensionMode(DimensionMode.AUTO). 
  */
  export function resetDimensionMode(): void;

  /**
  * Utility method for executing setSourceSetMode(SourceSetMode.AUTO). 
  */
  export function resetSourceSetMode(): void;

  /**
  * Sets the image description (alt attribute on the img element).
  * @param {string} aDescription - an alternative description of the image 
  */
  export function setDescription(aDescription: string): void;

  /**
  * The width/height rendering strategy.
  * @param {DimensionMode} aDimensionMode - the dimension mode, determines how to render width/height css style properties 
  */
  export function setDimensionMode(aDimensionMode: DimensionMode): void;

  /**
  * Sets a hover image that will be activated on the onmouseover javascript event.
  * @param {Node} anImageNode - the hover image (a node with primary node type sv:image) 
  */
  export function setHoverImage(anImageNode: Node): void;

  /**
  * Sets the image to be rendered.
  * @param {Node} anImageNode - the image (a node with primary node type sv:image) 
  */
  export function setImage(anImageNode: Node): void;

  /**
  * Sets the image scaler that should be used by the renderer if useImageScaler is true.
  * @param {ImageScaler} anImageScaler - the image scaler that can be used by the renderer to create scaled images 
  */
  export function setImageScaler(anImageScaler: ImageScaler): void;

  /**
  * Sets whether or not the image should be lazy loaded (loaded when it appears in the browser's viewport).
  * @param {boolean} aLazyLoad - whether the image should be lazy loaded. 
  */
  export function setLazyLoad(aLazyLoad: boolean): void;

  /**
  * The srcset attribute rendering strategy.
  * @param {SourceSetMode} aSourceSetMode - the source set mode, determines whether or not a srcset attribute should be rendered 
  */
  export function setSourceSetMode(aSourceSetMode: SourceSetMode): void;

  /**
  * Sets the style (style attribute on the img element).
  * @param {string} aStyle - the style of the rendered element 
  */
  export function setStyle(aStyle: string): void;

  /**
  * A description fallback strategy that makes it possible to render a description value even if no description has been set.
  * @param {boolean} useAutoDescription - whether or not the renderer should try to get a description via metadata if no description is set 
  */
  export function setUseAutoDescription(useAutoDescription: boolean): void;

  /**
  * A title fallback strategy that makes it possible to render a title value even if no description is available.
  * @param {boolean} useAutoTitle - whether or not the renderer should try to get a description via metadata to use as title value if no description is available 
  */
  export function setUseAutoTitle(useAutoTitle: boolean): void;

  /**
  * Sets whether or not descriptions should be encoded.
  * @param {boolean} performEncoding - whether descriptions should be encoded or not. 
  */
  export function setUseEncoding(performEncoding: boolean): void;

  /**
  * Decides if an image scaler should be used or not.
  * @param {boolean} useImageScaler - decides if an image scaler should be used or not. If true, an image scaler will be used if it is set. If false, no image scaler will be used even if it is set. 
  */
  export function setUseImageScaler(useImageScaler: boolean): void;

  /**
  * A title strategy that makes it possible to render a title attribute with the description as value.
  * @param {boolean} useTitleRendering - whether or not a title attribute should be rendered 
  */
  export function setUseTitleRendering(useTitleRendering: boolean): void;

  /**
  * Updates the renderer with a new image.
  * @param {Node} anImageNode - the image (a node with primary node type sv:image) 
  */
  export function update(anImageNode: Node): void;

  /**
  * Updates the renderer with a new image and a new description.
  * @param {Node} anImageNode - the image (a node with primary node type sv:image)
  * @param {string} aDescription - an image description, or null to clear any previous description 
  */
  export function update(anImageNode: Node, aDescription: string): void;
}

export default imageRenderer;
