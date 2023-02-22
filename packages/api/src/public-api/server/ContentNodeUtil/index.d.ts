import type { Node } from "../../types/javax/jcr/Node";

/**
 * Content Node utility interface.
 *
 * <p>
 *    A <em>"Content node" (e.g sv:portlet)</em> is a Node that is located in the "content section" of a <em>"Renderable node" (e.g. sv:page)</em>.
 * </p>
 * <p>
 *    This utility is typically used to get the parent of a Content node, either the <em>content</em> parent (typically a sv:layout)
 *    or the <em>renderable</em> parent (typically a sv:page).
 * </p>
 * <p>
 *    The types of a "Content node" is defined in {@link senselogic.sitevision.api.node.NodeTypeUtil#isAnyContentType(Node)}.
 *    The types of a "Renderable node" is defined in {@link senselogic.sitevision.api.node.NodeTypeUtil#isAnyRenderableType(Node)}.
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.Utils#getContentNodeUtil()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 10.2
 */
export interface ContentNodeUtil {
  /**
   * Gets the renderable parent of a given content node.
   *
   * <p>
   *    See {@link senselogic.sitevision.api.node.NodeTypeUtil#isAnyRenderableType(Node)} for what type a "Renderable node" can have.
   * </p>
   * @param aContentNode a content node, typically a sv:portlet or sv:layout
   * @return the renderable parent of aContentNode (typically a sv:page), or null if aContentNode has no renderable parent or if current user&#xA; doesn't have READ permission on the renderable parent
   */
  getRenderableParent(aContentNode: Node): Node;

  /**
   * Gets the content parent of a given content node.
   *
   * <p>
   *    See {@link senselogic.sitevision.api.node.NodeTypeUtil#isAnyContentType(Node)} for what type a "Content node" can have.
   * </p>
   *
   * <p>
   *    <em>
   *       <strong>Element disclaimer!</strong> The content structure of an Element (sv:moduleElement/sv:moduleElementDraft) potentially differs
   *       in the OFFLINE and ONLINE versions.
   *       Typically you should not use this method with <code>aContentNode</code> located within an Element.
   *    </em>
   * </p>
   * @param aContentNode a content node, typically a sv:portlet or sv:layout
   * @return the content parent of aContentNode (typically a sv:layout), or null if aContentNode has no content parent
   */
  getContentParent(aContentNode: Node): Node;
}

declare namespace ContentNodeUtil {}

declare var contentNodeUtil: ContentNodeUtil;

export default contentNodeUtil;
