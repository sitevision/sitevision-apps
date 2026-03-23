/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { Node } from "../../../../../../javax/jcr/Node";
import type { String } from "../../../../../../java/lang/String";
import type ContentFormat from "../../../../../../../server/ContentFormat";

/**
 * Builder for updating existing text modules (text portlets) with new content.
 *
 *  <p>
 *  <strong>Required configuration:</strong>
 *  </p>
 *  <ul>
 *    <li>Text module - the existing text module node to update</li>
 *    <li>Content - the new text content and its format</li>
 *  </ul>
 *
 *  <p>
 *  <strong>Usage example:</strong>
 *  </p>
 *  <pre><code>    import createContentFactory from '@sitevision/api/server/CreateContentFactory';
 *     // Script module and legacy apps would typically use the require function:
 *     // const createContentFactory = require('CreateContentFactory');
 *
 *     const updater = createContentFactory.getTextModuleUpdater();
 *     updater
 *        .setTextModule(existingTextModuleNode)
 *        .setMarkdownContent('# Updated Title\n\nThis content has been **updated**.');
 *
 *     // Optionally check if configuration is valid before executing
 *     if (updater.isValid()) {
 *        const node = updater.execute();
 *     }
 *  </code></pre>
 *
 *  <p>
 *  <strong>Important notes:</strong>
 *  </p>
 *  <ul>
 *    <li>The update operation replaces the entire content of the text module</li>
 *    <li>The text module must be a text portlet (portlet ID "text")</li>
 *    <li>The text module must be on a page</li>
 *  </ul>
 *
 *  <p>
 *  <strong>Permission requirements:</strong>
 *  </p>
 *  <p>
 *  The current user must have permission to update the parent page. An exception will be
 *  thrown during {@link #execute()} if the user lacks the necessary permissions.
 *  </p>
 *
 *  <p>
 *  An instance of the Sitevision class implementing this interface can be obtained via
 *  {@link senselogic.sitevision.api.webresource.webcontent.CreateContentFactory#getTextModuleUpdater()}.
 *  See {@link senselogic.sitevision.api.webresource.webcontent.CreateContentFactory} for how to
 *  obtain an instance of the <code>CreateContentFactory</code> interface.
 *  </p>
 * @author Jens Kalshoven
 * @since Sitevision 2026.01.1
 */
export type TextModuleUpdater = {
  /**
   * Sets the text module to be updated.
   *
   *  <p>
   *  The node must be an existing text module sv:portlet (portlet ID "text") that is
   *  on a page. The entire content of this text module will be replaced when
   *  {@link #execute()} is called.
   *  </p>
   *
   *  <p>
   *  This is a required configuration parameter.
   *  </p>
   * @param aTextModule the text module node to update, must be a valid text portlet
   * @return This builder instance for method chaining
   */
  setTextModule(aTextModule: Node): TextModuleUpdater;

  /**
   * Sets the new content for the text module using Markdown format.
   *
   *  <p>
   *  This is a convenience method equivalent to calling
   *  {@code setContent(aMarkdownContent, ContentFormat.MARKDOWN)}.
   *  The Markdown content will be parsed and converted to rich text elements,
   *  replacing the existing content.
   *  </p>
   *
   *  <p>
   *  See {@link ContentFormat#MARKDOWN} for details on supported syntax.
   *  </p>
   * @param aMarkdownContent The new Markdown content, must not be null or empty
   * @return This builder instance for method chaining
   */
  setMarkdownContent(aMarkdownContent: String | string): TextModuleUpdater;

  /**
   * Sets the new content for the text module with an explicit format.
   *
   *  <p>
   *  This method allows you to specify the new content and its format explicitly.
   *  The content will be parsed according to the specified format and converted
   *  to rich text elements, replacing the existing content.
   *  </p>
   * @param aContent The new text content. Must not be null or empty
   * @param aContentFormat The format of the content. Must not be null
   * @return This builder instance for method chaining
   */
  setContent(
    aContent: String | string,
    aContentFormat: ContentFormat
  ): TextModuleUpdater;

  /**
   * Best-effort validation of the current builder configuration.
   *
   *  <p>
   *  Checks if all required parameters are set and valid:
   *  </p>
   *  <ul>
   *    <li>Text module is not null and is a valid text portlet</li>
   *    <li>Text module's parent is a page</li>
   *    <li>Content is not null and not empty</li>
   *    <li>Content format is not null</li>
   *    <li>The page is not trashed</li>
   *    <li>The user has permission to update the page</li>
   *  </ul>
   * @return true if the configuration is valid, false otherwise
   */
  isValid(): boolean;

  /**
   * Updates the text module with the new configured content.
   *
   *  <p>
   *  <strong>Important:</strong> This method modifies {@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION}
   *  of the page content and saves the changes. The operation is performed under a lock to ensure consistency. The entire existing
   *  content of the text module is replaced.
   *  </p>
   * @return The updated sv:portlet node
   * @throws IllegalStateException If the configuration is invalid
   * @throws ConstraintViolationException If the targeted textModule is invalid,&#xA; or the user lacks permission to update the page,&#xA; or the page is trashed
   * @throws RepositoryException If something else goes wrong
   */
  execute(): Node;
};
