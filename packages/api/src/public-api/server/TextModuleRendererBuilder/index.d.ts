import type { Node } from "../../types/javax/jcr/Node";
import type { TextModuleRenderer } from "../../types/senselogic/sitevision/api/render/TextModuleRenderer";
import type { Builder } from "../../types/senselogic/sitevision/api/base/Builder";

/**
 * Sets the page of this builder.
 * @param aPageNode a page (sv:page, sv:article, sv:sitePage)
 * @return this builder
 */
export function setPage(aPageNode: Node): TextModuleRendererBuilder;

/**
 * Creates a TextModuleRenderer instance for the page of this builder.
 * @return a Text module renderer instance
 * @throws IllegalStateException if no valid page is set
 */
export function build(): TextModuleRenderer;

/**
 * <p>
 *    Builder for creating a {@link TextModuleRenderer} instance.
 * </p>
 *
 * <p>
 *    TextModuleRendererBuilder has one <strong>mandatory attribute</strong>:
 * </p>
 * <ul>
 *    <li>
 *       <em>page</em> - The page (sv:page, sv:article, sv:sitePage) where the Text modules to render resides. Must be non-null.
 *    </li>
 * </ul>
 *
 * <p>
 *    Using the TextModuleRendererBuilder is pretty straightforward, if you remember that it is <strong>stateful</strong>. Conceptually you
 *    would typically use it like this:
 * </p>
 * <ol>
 *   <li>Get the TextModuleRendererBuilder</li>
 *   <li>Set the page</li>
 *   <li>Do build</li>
 * </ol>
 * <p>
 *    When you have built a <code>TextModuleRenderer</code> instance, you can re-use the TextModuleRendererBuilder to build more instances.
 *    Typically like:
 * </p>
 * <ol>
 *   <li>Set the page</li>
 *   <li>Do build</li>
 * </ol>
 *
 * <p>
 *    <strong>Tip!</strong> The {@link senselogic.sitevision.api.base.Builder Builder interface documentation} contains
 *    more information about Builders and how to work with them and {@link TextModuleRenderer} has a code example of how
 *    this builder and its result can be used.
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.Utils#getTextModuleRendererBuilder()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>TextModuleRendererBuilder</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 7
 */
declare namespace textModuleRendererBuilder {
  export { setPage, build };
}

export default textModuleRendererBuilder;
