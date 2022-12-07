import Node from "../../hidden/javax/jcr/Node";

/**
 * Sets the size for rendered buddy icons.
 *
 * <p>Default is <code>BuddyIconSize.SMALL</code></p>
 * @param aBuddyIconSize the icon size
 */
export function setBuddyIconSize(aBuddyIconSize: unknown): void;

/**
 * Utility method for executing <code>setBuddyIconSize(BuddyIconSize.SMALL)</code>
 * @see #setBuddyIconSize(senselogic.sitevision.api.render.BuddyIconRenderer.BuddyIconSize)
 * @see BuddyIconSize#SMALL
 */
export function forceUseSmallBuddyIconSize(): void;

/**
 * Utility method for executing <code>setBuddyIconSize(BuddyIconSize.LARGE)</code>
 * @see #setBuddyIconSize(senselogic.sitevision.api.render.BuddyIconRenderer.BuddyIconSize)
 * @see BuddyIconSize#LARGE
 */
export function forceUseLargeBuddyIconSize(): void;

/**
 * Utility method for executing <code>setBuddyIconSize(BuddyIconSize.X_LARGE)</code>
 * @since Sitevision 8.2
 * @see #setBuddyIconSize(senselogic.sitevision.api.render.BuddyIconRenderer.BuddyIconSize)
 * @see BuddyIconSize#X_LARGE
 */
export function forceUseXLargeBuddyIconSize(): void;

/**
 * Whether or not rendered buddy icons should be linked.
 *
 * <p>Default is <code>true</code></p>
 * @param aLinkBuddyIcon Whether or not buddy icons should be linked.
 */
export function setLinkBuddyIcon(aLinkBuddyIcon: boolean): void;

/**
 * Utility method for executing <code>setLinkBuddyIcon(false)</code>
 * @see #setLinkBuddyIcon(boolean)
 */
export function clearUseLinkBuddyIcon(): void;

/**
 * Utility method for executing <code>setLinkBuddyIcon(true)</code>
 * @see #setLinkBuddyIcon(boolean)
 */
export function forceUseLinkBuddyIcon(): void;

/**
 * Updates the renderer with a new buddy icon supported node.
 *
 * <p>
 *    If <code>aBuddyIconNode</code> is not a type that can be represented by a buddy icon, the argument will be considered as <code>null</code>,
 *    i.e. the renderer will not have any renderable node in subsequent render execution.
 * </p>
 * @param aBuddyIconNode a node that can be rendered as a buddy icon.
 */
export function update(aBuddyIconNode: Node): void;

/**
 * Whether or not this renderer contains a node that can be rendered.
 * @return <code>true</code> if a renderable node is loaded, <code>false</code> if not.
 */
export function isLoaded(): boolean;

/**
 * Helper method to check if a certain node can be rendered as a buddy icon.
 *
 * <p>
 *    Nodes with the following primary node types are potentially renderable:
 * </p>
 * <ul>
 *    <li><code>sv:userIdentity</code></li>
 *    <li><code>sv:user</code> <em>(non-anonymous)</em> &raquo; <em>will be renderable if a sv:userIdentity can be extracted</em></li>
 *    <li><code>sv:simpleUser</code> &raquo; <em>will be renderable if a sv:userIdentity can be extracted</em></li>
 *    <li style="margin-bottom:1em"><code>sv:systemUser</code> &raquo; <em>will be renderable if a sv:userIdentity can be extracted</em></li>
 *    <li><code>sv:collaborationGroup</code></li>
 *    <li><code>sv:collaborationGroupPage</code> &raquo; <em>will be renderable if a sv:collaborationGroup can be extracted</em></li>
 * </ul>
 * @param aNode the node to check
 * @return <code>true</code> if <code>aNode</code> is supported by this renderer, <code>false</code> if not
 */
export function isRenderable(aNode: Node): boolean;

/**
 * BuddyIconInfo for current state.
 *
 * <p>
 *    <em>
 *       The data this method provides is used by the {@link #render()} method.
 *       The intent of this method is to facilitate custom buddy icon rendering solutions.
 *       See {@link BuddyIconInfo} for such example.
 *    </em>
 * </p>
 *
 * <p>
 *    Note! Returned BuddyIconInfo object is never null but its <code>uri</code> will potentially be null and its
 *    <code>width</code>/<code>height</code> might be zero.
 *    Typically when this renderer has no valid/renderable node loaded, see {@link #isLoaded()}.
 * </p>
 * @return the BuddyIconInfo for current state, is never null.
 * @since Sitevision 8.2
 */
export function getBuddyIconInfo(): unknown;

/**
 * Builds a html string based on current state.
 *
 * <strong>Size note!</strong> Profile images will never be upscaled. If a buddy icon size is larger than the actual size of the profile image,
 * the image will be rendered with the largest possible buddy icon size.
 * @return a html string, ready to print out on a page. Might be empty but never <code>null</code>.
 */
export function render(): string;

/**
 * BuddyIconRenderer is a stateful utility interface for rendering of buddy icons for user identities and collaboration groups.
 *
 * <p>
 * An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getBuddyIconRenderer()}.
 * See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 *
 * <p>
 *  BuddyIconRenderer has few attributes:
 * </p>
 * <ul>
 *    <li><em>buddyIconNode</em> - The node that should be rendered as a buddy icon. Default is <code>null</code>.
 *    </li>
 *    <li><em>buddyIconSize</em> - The size of the buddy icon that is rendered. Default is <code>BuddyIconSize.SMALL</code>. Note that image size
 *    settings are followed with best effort. Images will never be upscaled.
 *    </li>
 *    <li><em>linkBuddyIcon</em> - Whether or not rendered buddy icons should be linked. Default is <code>true</code>.
 *    </li>
 * </ul>
 *
 * <p>
 *   Using the BuddyIconRenderer is pretty straightforward, if you remember that it is <strong>stateful</strong> and that the previously
 *   loaded buddy icon node will be cleared whenever you try to load a new one. Conceptually you would typically use it like this:
 * </p>
 * <ol>
 *   <li>Get the BuddyIconRenderer</li>
 *   <li>Possibly init the renderer with rendering settings (buddyIconSize, linkBuddyIcon)</li>
 *   <li>Set a buddy icon node</li>
 *   <li>Do render</li>
 * </ol>
 * <p>
 * When you have rendered once, you can re-use the BuddyIconRenderer until you are done. Something like:
 * </p>
 * <ol>
 *   <li>Update the buddy icon node</li>
 *   <li>Do render.</li>
 * </ol>
 *
 * <p>
 *    <strong>Example of how this strategy could be implemented in Velocity:</strong><br>
 *    (You want to do a simple listing of buddy icons for some collaboration groups, collaboration group pages, user identities or users)
 * </p>
 * <pre><code>
 *   <em>## Get BuddyIconRenderer</em>
 *   #set ($buddyIconRenderer = $sitevisionUtils.buddyIconRenderer)
 *
 *   <em>## Iterate through the list of nodes and render a buddy icon for all supported nodes</em>
 *   &lt;ul class="sv-no-list-style"&gt;
 *   #foreach ($item in $items)
 *     <em>## Check if this node can be rendered as a buddy icon</em>
 *     #if ($buddyIconRenderer.isRenderable($item))
 *       <em>## Update the renderer and render</em>
 *       $buddyIconRenderer.update($item)
 *       &lt;li&gt;
 *          $buddyIconRenderer.render()
 *       &lt;/li&gt;
 *     #end
 *   #end
 *   &lt;/ul&gt;
 * </code></pre>
 * @author Magnus Lövgren
 * @since Sitevision 3.5.3
 */
declare namespace buddyIconRenderer {
  export {
    setBuddyIconSize,
    forceUseSmallBuddyIconSize,
    forceUseLargeBuddyIconSize,
    forceUseXLargeBuddyIconSize,
    setLinkBuddyIcon,
    clearUseLinkBuddyIcon,
    forceUseLinkBuddyIcon,
    update,
    isLoaded,
    isRenderable,
    getBuddyIconInfo,
    render,
  };
}

export default buddyIconRenderer;
