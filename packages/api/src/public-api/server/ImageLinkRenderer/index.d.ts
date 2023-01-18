import LinkRenderer from "../LinkRenderer";
import ImageRenderer from "../ImageRenderer";

/**
 * ImageLinkRenderer is a stateful utility interface that combines an ImageRenderer and a LinkRenderer to render valid image links.
 *
 * <p>
 *   Using the ImageLinkRenderer is pretty straightforward. All setup and state are maintained in an ImageRenderer instance and an
 *   LinkRenderer instance that both can be retrieved via their corresponding getters. Conceptually you would typically use ImageLinkRenderer
 *   like this:
 * </p>
 * <ol>
 *   <li>Get the <em>ImageLinkRenderer</em></li>
 *   <li>Fetch the <em>LinkRenderer</em> used by the image link renderer</li>
 *   <li>Init the link renderer and set the target (see {@link LinkRenderer})</li>
 *   <li>Fetch the <em>ImageRenderer</em> used by the image link renderer</li>
 *   <li>Init the image renderer and set the image (see {@link ImageRenderer})</li>
 *   <li>Do render</li>
 * </ol>
 * <p>
 * When you have rendered once, you can re-use the renderers until you are done. Something like:
 * </p>
 * <ol>
 *   <li>Update the image renderer with a new image</li>
 *   <li>Update the link renderer with a new target</li>
 *   <li>Do render.</li>
 * </ol>
 *
 * <p>
 *    <strong>Example of how this strategy could be implemented in Velocity:</strong><br>
 *    (You want to do a simple thumbnail listing of some image nodes in a collection/iterator "$images", and each thumbnail should be linked to
 *    the original image (and opened in a new window)
 * </p>
 * <pre><code>
 *   <em>## Get the ImageLinkRenderer</em>
 *   #set ($imageLinkRenderer = $sitevisionUtils.imageLinkRenderer)
 *
 *   <em>## Fetch the ImageRenderer and apply an image scaler (200x100 px)</em>
 *   #set ($imageScaler = $sitevisionUtils.getImageScaler(200, 100))
 *   #set ($imageRenderer = $imageLinkRenderer.imageRenderer)
 *   $imageRenderer.setImageScaler($imageScaler)
 *
 *   <em>## Fetch the LinkRenderer and ensure links will be opened in a new window</em>
 *   #set ($linkRenderer = $imageLinkRenderer.linkRenderer)
 *   $linkRenderer.forceOpenNewWindow()
 *
 *   <em>## Iterate through images and render them</em>
 *   &lt;ul style="list-style:none"&gt;
 *   #foreach ($image in $images)
 *      <em>## Load an image (that will be rendered as a 200x100 thumbnail)</em>
 *      $imageRenderer.update($image)
 *
 *      <em>## Link the image</em>
 *      $linkRenderer.update($image)
 *
 *      &lt;li&gt;
 *         <em>## Render the image link (i.e. a thumbnail image linked to the original image)</em>
 *         $imageLinkRenderer.render()
 *      &lt;/li&gt;
 *   #end
 *   &lt;/ul&gt;
 * </code></pre>
 *
 * <p>
 *   <a name="descnote"></a>
 *   <strong>Validation Note!</strong> Some validation tools consider image links to be invalid if the linked content
 *   (i.e. in this case an <code>&lt;img&gt;</code> element) does not have a textual representation (i.e. the <code>alt</code>
 *   attribute of the <code>&lt;img&gt;</code> element is empty). In order to minimize work to encompass this, the
 *   {@link ImageRenderer#forceUseAutoDescription()} is initially invoked for the {@link ImageRenderer} used by the ImageLinkRenderer.
 * </p>
 *
 * <p>
 *   <a name="threadnote"></a>
 *   <strong>Thread Note!</strong> The render method is <em>NOT</em> thread safe! During execution of the render method the
 *   ImageLinkRenderer might temporarily modify the state of the LinkRenderer and/or the ImageRenderer. In other words:
 *   if two threads simultaneously executes the render method on the <em>SAME</em> ImageLinkRenderer instance, the rendered
 *   result might differ. This is in almost all cases nothing you need to worry about, unless your portlet or servlet actually
 *   creates a separate <code>Thread</code> and starts it. If so - ensure all your created
 *   threads creates and uses their own ImageLinkRenderer instance!
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.Utils#getImageLinkRenderer()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 2.6.2_04
 * @see LinkRenderer
 * @see ImageRenderer
 */
export interface ImageLinkRenderer {
  /**
   * Returns the LinkRenderer instance used by this image link renderer to control linking behaviour.
   * @return the LinkRenderer instance used by this image link renderer
   * @see LinkRenderer
   */
  getLinkRenderer(): LinkRenderer;

  /**
   * Returns the ImageRenderer instance used by this image link renderer to control (linked) image behaviour.
   *
   * <p>
   * <em>Note!</em> The <code>useAutoDescription</code> is initially set to <code>true</code> when the ImageRenderer instance is
   * created by this image link renderer, see <a href="#descnote">validation note above</a>.
   * </p>
   * @return the ImageRenderer instance used by this image link renderer
   * @see ImageRenderer
   */
  getImageRenderer(): ImageRenderer;

  /**
   * Builds a html link based on current state of the link renderer and the image render.
   *
   * <p>
   * <em>Note!</em> The render method is not thread safe, see <a href="#threadnote">thread note above</a>.
   * </p>
   * @return a html link, ready to print out on a page
   */
  render(): string;
}

declare namespace ImageLinkRenderer {}

declare var imageLinkRenderer: ImageLinkRenderer;

export = imageLinkRenderer;
