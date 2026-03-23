/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { String } from "../../../../../../java/lang/String";
import type { Node } from "../../../../../../javax/jcr/Node";
import type ContentFormat from "../../../../../../../server/ContentFormat";

/**
 * Builder for creating new text modules (text portlets).
 *
 *  <p>
 *  <strong>Required configuration:</strong>
 *  </p>
 *  <ul>
 *    <li>Parent - the page, layout or portlet where the text module will be created</li>
 *    <li>Content - the text content and its format</li>
 *  </ul>
 *
 *  <p>
 *     <strong>Optional configuration:</strong>
 *  </p>
 *  <ul>
 *     <li>Name - the display name/title of the text module</li>
 *  </ul>
 *
 *  <p>
 *  <strong>Usage example:</strong>
 *  </p>
 *  <pre><code>    import createContentFactory from '@sitevision/api/server/CreateContentFactory';
 *     // Script module and legacy apps would typically use the require function:
 *     // const createContentFactory = require('CreateContentFactory');
 *
 *     const creator = createContentFactory.getTextModuleCreator();
 *     creator
 *        .setName('Welcome Message')
 *        .setParent(pageNode)
 *        .setMarkdownContent('# Welcome\n\nThis is a **welcome** message.');
 *
 *     // Optionally check if configuration is valid before executing
 *     if (creator.isValid()) {
 *        const node = creator.execute();
 *     }
 *  </code></pre>
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
 *  {@link senselogic.sitevision.api.webresource.webcontent.CreateContentFactory#getTextModuleCreator()}.
 *  See {@link senselogic.sitevision.api.webresource.webcontent.CreateContentFactory} for how to
 *  obtain an instance of the <code>CreateContentFactory</code> interface.
 *  </p>
 * @author Jens Kalshoven
 * @since Sitevision 2026.01.1
 */
export type TextModuleCreator = {
  /**
   * Sets the display name of the text module to be created.
   *
   *  <p>
   *  The name is displayed as the portlet title and should be descriptive.
   *  </p>
   * @param aName The name of the text module
   * @return This builder instance for method chaining
   */
  setName(aName: String | string): TextModuleCreator;

  /**
   * Sets the parent node where the text module will be created.
   *
   *  <p>
   *  The parent can be either:
   *  </p>
   *  <ul>
   *    <li>Page (e.g. sv:page, sv:article) - the text module will be appended to the first layout on the page</li>
   *    <li>Layout (e.g. sv:layout) - the text module will be appended to the layout</li>
   *    <li>Module (sv:portlet) - the text module will be inserted after the module</li>
   *  </ul>
   *
   *  <p>
   *  This is a required configuration parameter.
   *  </p>
   * @param aParent The parent node. Must be a valid page or content node
   * @return This builder instance for method chaining
   */
  setParent(aParent: Node): TextModuleCreator;

  /**
   * Sets the content of the text module using Markdown format.
   *
   *  <p>
   *  This is a convenience method equivalent to calling
   *  {@code setContent(aMarkdownContent, ContentFormat.MARKDOWN)}.
   *  The Markdown content will be parsed and converted to rich text elements.
   *  </p>
   *
   *  <p>
   *  See {@link ContentFormat#MARKDOWN} for details on supported syntax.
   *  </p>
   * @param aMarkdownContent The Markdown content. Must not be null or empty
   * @return This builder instance for method chaining
   */
  setMarkdownContent(aMarkdownContent: String | string): TextModuleCreator;

  /**
   * Sets the content of the text module with an explicit format.
   *
   *  <p>
   *  This method allows you to specify the content and its format explicitly.
   *  The content will be parsed according to the specified format and converted
   *  to rich text elements.
   *  </p>
   * @param aContent The text content. Must not be null or empty
   * @param aContentFormat The format of the content. Must not be null
   * @return This builder instance for method chaining
   */
  setContent(
    aContent: String | string,
    aContentFormat: ContentFormat
  ): TextModuleCreator;

  /**
   * Best-attempt validation of the current builder configuration.
   *
   *  <p>
   *  Checks if all required parameters are set and valid:
   *  </p>
   *  <ul>
   *    <li>Parent is not null and is a valid page, layout or portlet</li>
   *    <li>Content is not null and not empty</li>
   *    <li>Content format is not null</li>
   *    <li>The page is not trashed</li>
   *    <li>The user has permission to update the page</li>
   *  </ul>
   * @return true if the configuration is valid, false otherwise
   */
  isValid(): boolean;

  /**
   * Creates the text module with the configured settings.
   *
   *  <p>
   *  <strong>Important:</strong> This method modifies the {@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION}
   *  of the page content and saves the changes. The operation is performed under a lock to ensure consistency.
   *  </p>
   * @return The newly created sv:portlet node
   * @throws IllegalStateException If the configuration is invalid
   * @throws ConstraintViolationException If the parent is invalid, or the user lacks permission to update the page, or the page is trashed
   * @throws RepositoryException If something else goes wrong
   */
  execute(): Node;
};
