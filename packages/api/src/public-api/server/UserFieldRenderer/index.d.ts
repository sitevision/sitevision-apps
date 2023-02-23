import type { Node } from "../../types/javax/jcr/Node";

import type { String } from "../../types/java/lang/String";

/**
 * UserFieldRenderer is a stateful utility interface for rendering user field values for user identities.
 *
 *  <p>
 *  An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getUserFieldRenderer()}.
 *  See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 *
 *  <p>
 *    Using the UserFieldRenderer is pretty straightforward, if you remember that it is <strong>stateful</strong> and that the previously loaded
 *    user identity node will be cleared whenever you try to load a new one. Conceptually you would typically use it like this:
 *  </p>
 *  <ol>
 *    <li>Get the UserFieldRenderer</li>
 *    <li>Set a user identity node</li>
 *    <li>Do render of a named user field</li>
 *    <li>Do render of another named user field</li>
 *    <li>...</li>
 *  </ol>
 *  <p>
 *  You can then re-use the UserFieldRenderer for another user identity until you are done. Something like:
 *  </p>
 *  <ol>
 *    <li>Update the user identity node</li>
 *    <li>Do render of a named user field</li>
 *    <li>Do render of another named user field</li>
 *    <li>...</li>
 *  </ol>
 *
 *  <p>
 *     <strong>Example of how this strategy could be implemented in Velocity:</strong><br>
 *     (You want to do a simple listing of the user fields "Namn" and "E-postadress" for some user identities or users in $myList)
 *  </p>
 *  <pre><code>
 *    <em>## Get UserFieldRenderer</em>
 *    #set ($userFieldRenderer = $sitevisionUtils.userFieldRenderer)
 *
 *    <em>## Ensure at least one of the fields actually exist</em>
 *    #if ($userFieldRenderer.isValidFieldName('Namn') || $userFieldRenderer.isValidFieldName('E-postadress'))
 *      <em>## Iterate through the list and render fields for all valid nodes</em>
 *      &lt;ul class="sv-no-list-style"&gt;
 *      #foreach ($item in $myList)
 *        <em>## Check if this node can be rendered</em>
 *        #if ($userFieldRenderer.isRenderable($item))
 *          <em>## Update the renderer and render</em>
 *          $userFieldRenderer.update($item)
 *          &lt;li&gt;
 *            $userFieldRenderer.render('Namn')
 *            $userFieldRenderer.render('E-postadress')
 *          &lt;/li&gt;
 *        #end
 *      #end
 *      &lt;/ul&gt;
 *    #end
 *  </code></pre>
 *
 *  <p>
 *     <strong>Important rendering note!</strong> When rendering a user field value, you must specify the <em>name</em>
 *     of the user field. See {@link #isValidFieldName(String)} for more information about how names are matched to user fields.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.5.3
 */
export interface UserFieldRenderer {
  /**
   * Updates the renderer with a new user identity node.
   *
   *  <p>
   *  If <code>aUserIdentity</code> is not a renderable node, the argument will be considered as <code>null</code>, i.e.
   *  the renderer will not have any renderable node in subsequent render execution.
   *  </p>
   * @param aUserIdentity a user identity node, or a user that has an identity on current site
   */
  update(aUserIdentity: Node): void;

  /**
   * Whether or not this renderer contains a user identity.
   * @return <code>true</code> if a renderable node is loaded, <code>false</code> if not.
   */
  isLoaded(): boolean;

  /**
   * Helper method to check if a certain node can be rendered.
   *
   *  <p>
   *     Nodes with the following primary node types are potentially renderable:
   *  </p>
   *  <ul>
   *     <li><code>sv:userIdentity</code></li>
   *     <li><code>sv:user</code> <em>(non-anonymous)</em> &raquo; <em>will be renderable if a sv:userIdentity can be extracted</em></li>
   *     <li><code>sv:simpleUser</code> &raquo; <em>will be renderable if a sv:userIdentity can be extracted</em></li>
   *     <li><code>sv:systemUser</code> &raquo; <em>will be renderable if a sv:userIdentity can be extracted</em></li>
   *  </ul>
   * @param aNode the node to check
   * @return <code>true</code> if <code>aNode</code> is supported by this renderer, <code>false</code> if not
   */
  isRenderable(aNode: Node): boolean;

  /**
   * Helper method to check if a named user field is available.
   *
   *  <p>
   *     <strong>An important note about field names and user field lookup!</strong> A specific user field can be found
   *     via <em>multiple</em> names:
   *  </p>
   *  <ol>
   *     <li>Primarily user fields are found via their <em>UI name</em>.</li>
   *     <li>Secondary user fields are found via their <em>Ldap name</em> (ldap-read fields only).</li>
   *     <li>As last resort user fields are found via their <em>Index name</em>.</li>
   *  </ol>
   *  <p>
   *     <em>First found match is used!</em>
   *  </p>
   *  <p>
   *     This is a convenience to make user fields easier to find, but <em>beware of colliding names</em>! For instance,
   *     if field A has Ldap name "X" and field B has UI name "X" - field B will be used.
   *  </p>
   * @param aUserFieldName the name of the user field
   * @return <code>true</code> if current site has a user field that can be found via <code>aUserFieldName</code>, <code>false</code> if not
   */
  isValidFieldName(aUserFieldName: String | string): boolean;

  /**
   * Returns the value as html for a named user field for currently loaded user identity.
   *
   *  <p>
   *     The rendered output of the user field value is handled as:
   *  </p>
   *  <ul>
   *     <li>The value is XML escaped (see: {@link senselogic.sitevision.api.text.EndecUtil#escapeXML(String)})</li>
   *     <li>Line breaks are converted to &lt;br&gt; (see: {@link senselogic.sitevision.api.text.EndecUtil#br(String)})</li>
   *     <li>Potential links are converted to anchors (see: {@link senselogic.sitevision.api.render.OutputUtil#getHyperlinkedText(String)})</li>
   *  </ul>
   *
   *  <p>
   *     <em>Note! The result of this method is equivalent with calling {@link #getPlainUserFieldValueAsHtml(String)} with the
   *     result of the {@link #renderPlain(String)} method, but this method is more efficient and should always be preferred.</em>
   *  </p>
   * @param aUserFieldName the name of the user field, see: {@link #isValidFieldName(String)}
   * @return a html string, ready to print out on a page. Might be empty but never <code>null</code>.
   */
  render(aUserFieldName: String | string): string;

  /**
   * Returns the value as plain text for a named user field for currently loaded user identity.
   *
   *  <p>
   *     <strong>Note!</strong> The rendered output is plain text and <em>must be escaped</em> if it should be part of the html output of a page!
   *  </p>
   * @param aUserFieldName the name of the user field, see: {@link #isValidFieldName(String)}
   * @return a plain string. Might be empty but never <code>null</code>.
   * @since Sitevision 3.6
   * @see #render(String)
   */
  renderPlain(aUserFieldName: String | string): string;

  /**
   * Returns a plain text user field value as html.
   *
   *  <p>
   *     <strong>Note!</strong> This method is <em>stateless</em>, i.e. you don't have to have a user identity loaded to call this method.
   *     Typically you would always use the {@link #render(String)} whenever possible. This method should only be used when you have a plain
   *     text user field value, but no user identity (e.g. in large search results where you want to avoid loading lots of user identity objects).
   *  </p>
   *  <p>
   *     The rendered output of the plain text user field value is handled as:
   *  </p>
   *  <ul>
   *     <li>The value is XML escaped (see: {@link senselogic.sitevision.api.text.EndecUtil#escapeXML(String)})</li>
   *     <li>Line breaks are converted to &lt;br&gt; (see: {@link senselogic.sitevision.api.text.EndecUtil#br(String)})</li>
   *     <li>Potential links are converted to anchors (see: {@link senselogic.sitevision.api.render.OutputUtil#getHyperlinkedText(String)})</li>
   *  </ul>
   * @param aPlainUserFieldValue the plain text user field value
   * @return a html string, ready to print out on a page. Might be empty but never <code>null</code>.
   * @since Sitevision 3.6
   */
  getPlainUserFieldValueAsHtml(aPlainUserFieldValue: String | string): string;
}

declare namespace UserFieldRenderer {}

declare var userFieldRenderer: UserFieldRenderer;

export default userFieldRenderer;
