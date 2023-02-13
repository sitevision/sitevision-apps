import type { ImageScaler } from "../../types/senselogic/sitevision/api/render/ImageScaler";

import type { Node } from "../../types/javax/jcr/Node";

import type SourceSetMode from "../SourceSetMode";
import type DimensionMode from "../DimensionMode";

/**
 * ImageRenderer is a stateful utility interface that can be used to render valid xhtml img elements based on images of the website.
 *
 * <p>
 * ImageRenderer is very suitable when rendering more than one image or when you want to render images in different sizes than the original
 * images (e.g. "thumbnails"). ImageRenderer also supports "hover" images, i.e. another image is displayed whenever the cursor hovers over the image.
 * </p>
 *
 * <p>
 *  ImageRenderer has few attributes:
 * </p>
 * <ul>
 *    <li>
 *       <em>image</em> - The image that should be rendered. Default is <code>null</code>.
 *    </li>
 *    <li>
 *       <em>hoverImage</em> - The image that is displayed when the mouse cursor "hovers" (is over) the rendered image. Default is <code>null</code>.
 *    </li>
 *    <li>
 *       <em>style</em> - The css style for the rendered element. Default is <code>null</code>. <em>(though, the element class is always
 *       'sv-noborder', which is equivalent with style 'border:none')</em>
 *    </li>
 *    <li>
 *       <em>description</em> - The image description. Default is <code>null</code>.
 *    </li>
 *    <li>
 *       <em>useAutoDescription</em> - Whether to use a fallback strategy for getting an image description or not. If set to <code>true</code>
 *       and there are no description set, the renderer will try to get the description metadata for the image. Default is <code>false</code>.
 *    </li>
 *    <li>
 *       <em>useTitleRendering</em> - Whether to render a title or not. The <code>description</code> will be used as value.
 *       Default is <code>false</code>.
 *    <li>
 *       <em>useAutoTitle</em> - Whether to use a fallback strategy for getting a title (if description is missing) or not.
 *       If set to <code>true</code> and there are no description available, the renderer will try to get the description metadata for the image.
 *       Default is <code>false</code>.
 *    </li>
 *    <li>
 *       <em>useEncoding</em> - Whether to encode description and title or not. Default is <code>true</code>.
 *    </li>
 *    <li>
 *       <em>sourceSetMode</em> - The <code>srcset</code> attribute rendering strategy. Default is {@link SourceSetMode#AUTO}.
 *    </li>
 *    <li>
 *       <em>imageScaler</em> - The {@link senselogic.sitevision.api.render.ImageScaler} used to create new images in other sizes than the
 *       original ones. Default is <code>null</code>.
 *    </li>
 *    <li>
 *       <em>useImageScaler</em> - Whether to use an imageScaler (if present) or not. Default is <code>true</code>.
 *    </li>
 *    <li>
 *       <em>lazyLoad</em> - If the image should be lazy loaded. Default is <code>false</code>.
 *    </li>
 *    <li>
 *       <em>dimensionMode</em> - The <code>width/height</code> css style properties rendering strategy. Default is {@link DimensionMode#AUTO}.
 *    </li>
 * </ul>
 *
 * <p>
 *   Using the ImageRenderer is pretty straightforward, if you remember that it is <strong>stateful</strong> and that the previously loaded image
 *   will be cleared whenever you try to load a new one. Conceptually you would typically use it like this:
 * </p>
 * <ol>
 *   <li>Get the ImageRenderer</li>
 *   <li>Possibly init the renderer with rendering settings (useEncoding, useAutoDescription, useTitleRendering, useAutoTitle, sourceSetMode)</li>
 *   <li>Possibly set a style</li>
 *   <li>Possibly set a hover image</li>
 *   <li>Possibly set an image scaler</li>
 *   <li>Set an image</li>
 *   <li>Possibly set an image description</li>
 *   <li>Do render</li>
 * </ol>
 * <p>
 * When you have rendered once, you can re-use the ImageRenderer until you are done. Something like:
 * </p>
 * <ol>
 *   <li>Update the image</li>
 *   <li>Possibly set an image description</li>
 *   <li>Do render.</li>
 * </ol>
 *
 * <p>
 *    <strong>Example of how this strategy could be implemented in Velocity:</strong><br>
 *    (You want to do a simple listing of some image nodes in a collection/iterator "$images", and for each image a thumbnail should be displayed
 *    on top of the original
 * </p>
 * <pre><code>
 *   <em>## Get an ImageScaler that scales images to size 200x100</em>
 *   #set ($imageScaler = $sitevisionUtils.getImageScaler(200, 100))
 *
 *   <em>## Get an ImageRenderer and apply the ImageScaler</em>
 *   #set ($imageRenderer = $sitevisionUtils.imageRenderer)
 *   $imageRenderer.setImageScaler($imageScaler)
 *   $imageRenderer.clearSourceSetMode() <em>## Disable source set (to ensure it won't interfere with the scaled size)</em>
 *
 *   <em>## Iterate through images and render them</em>
 *   &lt;ul style="list-style:none"&gt;
 *   #foreach ($image in $images)
 *      <em>## Load an image</em>
 *      $imageRenderer.update($image)
 *
 *      &lt;li&gt;
 *         <em>## Render the thumbnail (ensure scaler is active)</em>
 *         $imageRenderer.forceUseImageScaler()
 *         $imageRenderer.render()
 *
 *         <em>## Render image (ensure scaler is inactive)</em>
 *         $imageRenderer.clearUseImageScaler()
 *         $imageRenderer.render()
 *      &lt;/li&gt;
 *   #end
 *   &lt;/ul&gt;
 * </code></pre>
 *
 * <p>
 *    Since ImageRenderer is stateful and likely will be used in Velocity frequently, there are some "shortcuts" that might be useful.
 *    Due to the lack of proper boolean support in Velocity, the boolean attributes has corresponding force/clear methods to set the boolean
 *    to true/false. Due to the lack of proper null support in Velocity, some attributes has clear methods to set the attribute to <code>null</code>.
 *    For example:
 * </p>
 * <ul>
 *   <li>Executing <code>forceUseImageScaler()</code> results in an execution of <code>setUseImageScaler(true)</code></li>
 *   <li>Executing <code>clearUseImageScaler()</code> results in an execution of <code>setUseImageScaler(false)</code></li>
 *   <li>Executing <code>forceUseTitleRendering()</code> results in an execution of <code>setUseTitleRendering(true)</code></li>
 *   <li>Executing <code>clearUseTitleRendering()</code> results in an execution of <code>setUseTitleRendering(false)</code></li>
 *   <li>Executing <code>forceSourceSetMode()</code> results in an execution of <code>setSourceSetMode(SourceSetMode.ON)</code></li>
 *   <li>Executing <code>clearSourceSetMode()</code> results in an execution of <code>setSourceSetMode(SourceSetMode.OFF)</code></li>
 *   <li>Executing <code>clearHoverImage()</code> results in an execution of <code>setHoverImage(null)</code></li>
 *   <li>Executing <code>clearStyle()</code> results in an execution of <code>setStyle(null)</code></li>
 *   <li>Executing <code>forceUseLazyLoad()</code> results in an execution of <code>setLazyLoad(true)</code></li>
 *   <li>Executing <code>clearUseLazyLoad()</code> results in an execution of <code>setLazyLoad(false)</code></li>
 * </ul>
 *
 * <p>
 *    <a name="imagesupport"></a>
 *    <strong>Image type support!</strong> This interface accepts all types of images as specified by
 *    {@link senselogic.sitevision.api.webresource.mime.MimeTypeUtil#isImageType(String)}.
 *    This means that all such images can loaded and rendered, but note that not all types can be scaled by an <code>ImageScaler</code>.
 * </p>
 *
 * <p>
 *   <a name="threadnote"></a>
 *   <strong>Thread Note!</strong> The render method is <em>NOT</em> thread safe! If two threads simultaneously executes
 *   the render method on the <em>SAME</em> ImageRenderer instance, the rendered result is undeterminable. This is in almost
 *   all cases nothing you need to worry about, unless your portlet or servlet actually creates a separate <code>Thread</code>
 *   and starts it. If so - ensure all your created threads creates and uses their own ImageRenderer instance!
 * </p>
 *
 * <p>
 *  <strong>Note/Tip!</strong> This interface helps rendering images. If you want to render <em>linked</em> images, you would typically
 *   use the {@link senselogic.sitevision.api.render.ImageLinkRenderer} instead.
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getImageRenderer()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 2.6.1_08
 */
export interface ImageRenderer {
  /**
   * Sets the image scaler that should be used by the renderer if <code>useImageScaler</code> is <code>true</code>.
   * <p>
   * An image scaler is obtained via {@link senselogic.sitevision.api.Utils#getImageScaler(int, int)}
   * </p>
   * @param anImageScaler the image scaler that can be used by the renderer to create scaled images
   */
  setImageScaler(anImageScaler: ImageScaler): void;

  /**
   * Removes the image scaler, i.e. executes <code>setImageScaler(null)</code>
   * @see #setImageScaler(ImageScaler)
   */
  clearImageScaler(): void;

  /**
   * Whether or not an image scaler is loaded.
   * @return <code>true</code> if an image scaler is loaded, <code>false</code> if not.
   */
  isImageScalerLoaded(): boolean;

  /**
   * Decides if an image scaler should be used or not.
   * <p>
   * Default is <code>true</code>.
   * </p>
   * @param useImageScaler decides if an image scaler should be used or not. If <code>true</code>, an image scaler will be used if it is set. If <code>false</code>, no image scaler will be used even if it is set.
   */
  setUseImageScaler(useImageScaler: boolean): void;

  /**
   * Utility method for executing <code>setUseImageScaler(true)</code>
   * @see #setUseImageScaler(boolean)
   */
  forceUseImageScaler(): void;

  /**
   * Utility method for executing <code>setUseImageScaler(false)</code>
   * @see #setUseImageScaler(boolean)
   */
  clearUseImageScaler(): void;

  /**
   * Sets a hover image that will be activated on the onmouseover javascript event.
   * @param anImageNode the hover image (a node with primary node type sv:image)
   */
  setHoverImage(anImageNode: Node): void;

  /**
   * Utility method for executing <code>setHoverImage(null)</code>
   * @see #setHoverImage(javax.jcr.Node)
   */
  clearHoverImage(): void;

  /**
   * Whether or not a hover image is loaded.
   * @return <code>true</code> if a hover image node is loaded, <code>false</code> if not.
   */
  isHoverImageLoaded(): boolean;

  /**
   * Sets the image to be rendered.
   * <p>
   * If <code>anImageNode</code> is not a proper image, the image will be considered as <code>null</code>, i.e.
   * the renderer will not have any image in subsequent render execution.
   * </p>
   * @param anImageNode the image (a node with primary node type sv:image)
   */
  setImage(anImageNode: Node): void;

  /**
   * Updates the renderer with a new image. The description will be removed.
   * <p>
   * If <code>anImageNode</code> is not a proper image, the image will be considered as <code>null</code>, i.e.
   * the renderer will not have any image in subsequent render execution.
   * </p>
   * @param anImageNode the image (a node with primary node type sv:image)
   */
  update(anImageNode: Node): void;

  /**
   * Updates the renderer with a new image and a new description.
   * <p>
   * If <code>anImageNode</code> is not a proper image, the image will be considered as <code>null</code>, i.e.
   * the renderer will not have any image in subsequent render execution.
   * </p>
   * @param anImageNode the image (a node with primary node type sv:image)
   * @param aDescription an image description, or <code>null</code> to clear any previous description
   */
  update(anImageNode: Node, aDescription: string): void;

  /**
   * Whether or not an image is loaded.
   * @return <code>true</code> if an image node is loaded, <code>false</code> if not.
   */
  isImageLoaded(): boolean;

  /**
   * A description fallback strategy that makes it possible to render a description value even if no description has been set.
   * When autoDescription is enabled, the renderer will try to use the image description metadata if no description is set.
   * <p>
   * Default is <code>false</code>.
   * </p>
   * @param useAutoDescription whether or not the renderer should try to get a description via metadata if no description is set
   */
  setUseAutoDescription(useAutoDescription: boolean): void;

  /**
   * Utility method for executing <code>setUseAutoDescription(true)</code>
   * @see #setUseAutoDescription(boolean)
   */
  forceUseAutoDescription(): void;

  /**
   * Utility method for executing <code>setUseAutoDescription(false)</code>
   * @see #setUseAutoDescription(boolean)
   */
  clearUseAutoDescription(): void;

  /**
   * The <code>srcset</code> attribute rendering strategy.
   * <p>
   *    Default is {@link SourceSetMode#AUTO}.
   * </p>
   * @param aSourceSetMode the source set mode, determines whether or not a <code>srcset</code> attribute should be rendered
   * @since Sitevision 4.1
   */
  setSourceSetMode(aSourceSetMode: SourceSetMode): void;

  /**
   * Utility method for executing <code>setSourceSetMode({@link SourceSetMode#ON})</code>.
   * @see #setSourceSetMode(SourceSetMode)
   * @since Sitevision 4.1
   */
  forceSourceSetMode(): void;

  /**
   * Utility method for executing <code>setSourceSetMode({@link SourceSetMode#OFF})</code>.
   * @see #setSourceSetMode(SourceSetMode)
   * @since Sitevision 4.1
   */
  clearSourceSetMode(): void;

  /**
   * Utility method for executing <code>setSourceSetMode({@link SourceSetMode#AUTO})</code>.
   * @see #setSourceSetMode(SourceSetMode)
   * @since Sitevision 4.1
   */
  resetSourceSetMode(): void;

  /**
   * The width/height rendering strategy.
   * <p>
   *    Default is {@link DimensionMode#AUTO}.
   * </p>
   * @param aDimensionMode the dimension mode, determines how to render width/height css style properties
   * @since Sitevision 5
   */
  setDimensionMode(aDimensionMode: DimensionMode): void;

  /**
   * Utility method for executing <code>setDimensionMode({@link DimensionMode#ON})</code>.
   * @since Sitevision 5
   */
  forceDimensionMode(): void;

  /**
   * Utility method for executing <code>setDimensionMode({@link DimensionMode#OFF})</code>.
   * @since Sitevision 5
   */
  clearDimensionMode(): void;

  /**
   * Utility method for executing <code>setDimensionMode({@link DimensionMode#AUTO})</code>.
   * @since Sitevision 5
   */
  resetDimensionMode(): void;

  /**
   * A title strategy that makes it possible to render a title attribute with the description as value.
   * If titleRendering is disabled, no title attribute will be rendered at all. If titleRendering is
   * enabled, the renderer will always render a title attribute and the descripton will be used as value.
   * <p>
   * Default is <code>false</code>.
   * </p>
   * @param useTitleRendering whether or not a title attribute should be rendered
   * @see #setUseAutoTitle(boolean)
   * @since Sitevision 2.6.2_04
   */
  setUseTitleRendering(useTitleRendering: boolean): void;

  /**
   * Utility method for executing <code>setUseTitleRendering(true)</code>
   * @see #setUseTitleRendering(boolean)
   * @since Sitevision 2.6.2_04
   */
  forceUseTitleRendering(): void;

  /**
   * Utility method for executing <code>setUseTitleRendering(false)</code>
   * @see #setUseTitleRendering(boolean)
   * @since Sitevision 2.6.2_04
   */
  clearUseTitleRendering(): void;

  /**
   * A title fallback strategy that makes it possible to render a title value even if no description is available.
   * When autoTitle is enabled, the renderer will try to use the image description metadata as title value if no description is available.
   * <p>
   * Default is <code>false</code>.
   * </p>
   * <p>
   *    <strong>Note!</strong>
   *    This setting would typically be activated <em>only</em> if the title should be rendered (<code>useTitleRendering</code>
   *    is <code>true</code>) and the autoDescription is not activated (<code>useAutoDescription</code> is <code>false</code>).
   *    <em>Remember - the title value is always the description, so any other cases than previously stated won't actually add anything new
   *    to your code/output...</em>
   * </p>
   * @param useAutoTitle whether or not the renderer should try to get a description via metadata to use as title value if no description is available
   * @see #setUseTitleRendering(boolean)
   * @since Sitevision 2.6.2_04
   */
  setUseAutoTitle(useAutoTitle: boolean): void;

  /**
   * Utility method for executing <code>setUseAutoTitle(true)</code>
   * @see #setUseAutoTitle(boolean)
   * @since Sitevision 2.6.2_04
   */
  forceUseAutoTitle(): void;

  /**
   * Utility method for executing <code>setUseAutoTitle(false)</code>
   * @see #setUseAutoTitle(boolean)
   * @since Sitevision 2.6.2_04
   */
  clearUseAutoTitle(): void;

  /**
   * Sets the image description (alt attribute on the img element).
   * If there are no description (i.e. description is <code>null</code>) when the result is rendered, an empty alt attribute will be rendered
   * unless the useAutoDescription feature is active (see {@link #setUseAutoDescription(boolean)}).
   * <p>
   * Default is <code>null</code>.
   * </p>
   * @param aDescription an alternative description of the image
   */
  setDescription(aDescription: string): void;

  /**
   * Removes the description, i.e. executes <code>setDescription(null)</code>
   * @see #setDescription(String)
   */
  clearDescription(): void;

  /**
   * Sets the style (style attribute on the img element).
   * If there are no style (i.e. style is <code>null</code>) when the result is rendered, no style attribute will be rendered
   * <p>
   * Default is <code>border:none</code>.
   * </p>
   * @param aStyle the style of the rendered element
   * @since Sitevision 2.6.1_10
   */
  setStyle(aStyle: string): void;

  /**
   * Removes the style, i.e. executes <code>setStyle(null)</code>
   * @see #setStyle(String)
   * @since Sitevision 2.6.1_10
   */
  clearStyle(): void;

  /**
   * Sets whether or not descriptions should be encoded.
   * <p>
   * Default is <code>true</code>.
   * </p>
   * @param performEncoding whether descriptions should be encoded or not.
   */
  setUseEncoding(performEncoding: boolean): void;

  /**
   * Utility method for executing <code>setUseEncoding(true)</code>
   * @see #setUseEncoding(boolean)
   */
  forceUseEncoding(): void;

  /**
   * Utility method for executing <code>setUseEncoding(false)</code>
   * @see #setUseEncoding(boolean)
   */
  clearUseEncoding(): void;

  /**
   * Sets whether or not the image should be lazy loaded (loaded when it appears in the browser's viewport).
   * <p>
   *    <em>Note!</em> Lazy loading depends on JavaScript being enabled.
   *    Be sure to include an <code>img</code> in a <code>noscript</code>-tag for non JavaScript users.
   * </p>
   *
   * <p>
   *    Default is <code>false</code>.
   * </p>
   * @param aLazyLoad whether the image should be lazy loaded.
   * @since Sitevision 5.0
   */
  setLazyLoad(aLazyLoad: boolean): void;

  /**
   * Utility method for executing <code>setLazyLoad(true)</code>
   * @see #setLazyLoad(boolean)
   * @since Sitevision 5.0
   */
  forceUseLazyLoad(): void;

  /**
   * Utility method for executing <code>setLazyLoad(false)</code>
   * @see #setLazyLoad(boolean)
   * @since Sitevision 5.0
   */
  clearUseLazyLoad(): void;

  /**
   * Builds a xhtml img element based on current state.
   *
   * <p>
   *    <em>Note!</em> The render method is not thread safe (see <a href="#threadnote">thread note above</a>)
   *    and not all image types can be rendered when using an image scaler (see <a href="#imagesupport">image support note above</a>).
   * </p>
   * @return if the renderer has a loaded image a xhtml img element, ready to print out on a page, will be returned. If there are no image to render or rendering fails, an empty string will be returned.
   */
  render(): string;
}

declare namespace ImageRenderer {}

declare var imageRenderer: ImageRenderer;

export default imageRenderer;
