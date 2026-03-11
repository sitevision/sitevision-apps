/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { Node } from "../../types/javax/jcr/Node";
import type IndexableUser from "../IndexableUser";
import type { IndexableContentExtractor } from "../../types/senselogic/sitevision/api/search/index/IndexableContentExtractor";
import type { Builder } from "../../types/senselogic/sitevision/api/base/Builder";

/**
 * <p>
 *     Builder for creating a {@link IndexableContentExtractor} instance.
 *  </p>
 *
 *  <p>
 *     IndexableContentExtractorBuilder has one <strong>mandatory attribute</strong> and one <em>optional</em> attribute:
 *  </p>
 *  <ul>
 *     <li>
 *        <em>page</em> (mandatory) - The page (sv:page, sv:article, sv:sitePage) that contains indexable content.
 *        Must be non-null and page must be published
 *     </li>
 *     <li>
 *        <em>indexableUser</em> (optional) - Determines the executing user when extracting indexable content.
 *        Default is {@link IndexableUser#CURRENT_USER} <em>(i.e. page will be rendered by current user during extraction)</em>.
 *     </li>
 *  </ul>
 *
 *  <p>
 *     Using the IndexableContentExtractorBuilder is pretty straightforward, if you remember that it is <strong>stateful</strong>.
 *     Conceptually you would typically use it like this:
 *  </p>
 *  <ol>
 *    <li>Get the IndexableContentExtractorBuilder</li>
 *    <li>Set the page</li>
 *    <li>Do build</li>
 *  </ol>
 *  <p>
 *     When you have built a <code>IndexableContentExtractorBuilder</code> instance, you can re-use the IndexableContentExtractorBuilder
 *     to build more instances. Typically like:
 *  </p>
 *  <ol>
 *    <li>Set the page</li>
 *    <li>Do build</li>
 *  </ol>
 *
 *  <p>
 *     <strong>Tip!</strong> The {@link senselogic.sitevision.api.base.Builder Builder interface documentation} contains
 *     more information about Builders and how to work with them and {@link senselogic.sitevision.api.render.TextModuleRenderer}
 *     has a code example of how this builder and its result can be used.
 *  </p>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link IndexingUtil#getIndexableContentExtractorBuilder()}.
 *     See {@link IndexingUtil} for how to obtain an instance of the <code>IndexingUtil</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 2026.03.1
 */
export interface IndexableContentExtractorBuilder extends Builder {
  /**
   * Sets the page of this builder.
   *
   *  <p>
   *     <strong>Note! Due to security reasons (potential never-ending loops) it is prohibited to create a content extractor for
   *     the currently executing page (i.e. {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentPage()})!</strong>
   *  </p>
   * @param aPageNode a published page node (sv:page, sv:article, sv:sitePage) where current user has READ permission,&#xA; must not be null or "current page".
   * @return this builder
   */
  setPage(aPageNode: Node): IndexableContentExtractorBuilder;

  /**
   * Sets whether to extract content as the indexer user or current user.
   * @param aIndexableUser the indexable user. Default is {@link IndexableUser#CURRENT_USER}.
   * @return this builder
   */
  setIndexableUser(
    aIndexableUser: IndexableUser
  ): IndexableContentExtractorBuilder;

  /**
   * Creates a IndexableContentExtractor instance for the page of this builder.
   * @return a content renderer instance
   * @throws IllegalStateException if no page is set or if page is not published or if page is invalid (e.g. "current page")&#xA; or if current user does not have READ permission on the page.
   */
  build(): IndexableContentExtractor;
}

declare namespace IndexableContentExtractorBuilder {}

declare var indexableContentExtractorBuilder: IndexableContentExtractorBuilder;

export default indexableContentExtractorBuilder;
