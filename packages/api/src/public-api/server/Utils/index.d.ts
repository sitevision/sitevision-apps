import type { PortletContextUtil } from "../PortletContextUtil";
import type { NodeIteratorUtil } from "../NodeIteratorUtil";
import type { NodeTreeUtil } from "../NodeTreeUtil";
import type { PropertyUtil } from "../PropertyUtil";
import type { LinkRenderer } from "../LinkRenderer";
import type { OutputUtil } from "../OutputUtil";
import type { ColorUtil } from "../ColorUtil";
import type { DecorationUtil } from "../DecorationUtil";
import type { FontUtil } from "../FontUtil";
import type { ResourceLocatorUtil } from "../ResourceLocatorUtil";
import type { EndecUtil } from "../EndecUtil";
import type { ScriptUtil } from "../ScriptUtil";
import type { LogUtil } from "../LogUtil";
import type { IconUtil } from "../IconUtil";
import type { PermissionUtil } from "../PermissionUtil";
import type { DirectoryUtil } from "../DirectoryUtil";
import type { ClientUtil } from "../ClientUtil";
import type { SearchUtil } from "../SearchUtil";
import type { SearchFieldUtil } from "../../types/senselogic/sitevision/api/search/SearchFieldUtil";
import type { PortletUtil } from "../PortletUtil";
import type { MetadataUtil } from "../MetadataUtil";
import type { BookmarkUtil } from "../BookmarkUtil";
import type { PublishingUtil } from "../PublishingUtil";
import type { VersionUtil } from "../VersionUtil";
import type { ArchiveUtil } from "../ArchiveUtil";
import type { FolderUtil } from "../FolderUtil";
import type { StructureUtil } from "../StructureUtil";
import type { WebContentUtil } from "../WebContentUtil";
import type { ArticleUtil } from "../ArticleUtil";
import type { FileUtil } from "../FileUtil";
import type { ImageUtil } from "../ImageUtil";
import type { PageUtil } from "../PageUtil";
import type { TrashcanUtil } from "../TrashcanUtil";
import type { TemplateUtil } from "../TemplateUtil";
import type { AuthenticationUtil } from "../AuthenticationUtil";
import type { PrincipalUtil } from "../PrincipalUtil";
import type { FileIconRenderer } from "../FileIconRenderer";
import type { ImageRenderer } from "../ImageRenderer";

import type { ImageScaler } from "../../types/senselogic/sitevision/api/render/ImageScaler";
import type { Object } from "../../types/java/lang/Object";
import type { ExceptionSuppressingProxy } from "../../types/senselogic/sitevision/api/script/proxy/ExceptionSuppressingProxy";
import type { Collection } from "../../types/java/util/Collection";
import type { ExceptionSuppressingCollection } from "../../types/senselogic/sitevision/api/script/proxy/ExceptionSuppressingCollection";
import type { Iterator } from "../../types/java/util/Iterator";
import type { ExceptionSuppressingIterator } from "../../types/senselogic/sitevision/api/script/proxy/ExceptionSuppressingIterator";
import type { SubscriptionUtil } from "../SubscriptionUtil";
import type { SubscriberUtil } from "../SubscriberUtil";
import type { InstanceTypeUtil } from "../InstanceTypeUtil";
import type { NodeTypeUtil } from "../NodeTypeUtil";
import type { MetadataDefinitionUtil } from "../MetadataDefinitionUtil";
import type { ImageLinkRenderer } from "../ImageLinkRenderer";
import type { MimeTypeUtil } from "../MimeTypeUtil";
import type { DocTypeUtil } from "../DocTypeUtil";
import type { VersionedPropertyUtil } from "../../types/senselogic/sitevision/api/property/VersionedPropertyUtil";
import type { DeviceUtil } from "../DeviceUtil";
import type { UserUtil } from "../../types/senselogic/sitevision/api/security/UserUtil";
import type { VelocityRenderer } from "../VelocityRenderer";
import type { InstanceCreatorUtil } from "../InstanceCreatorUtil";
import type { DateUtil } from "../DateUtil";
import type { LandingPageUtil } from "../LandingPageUtil";
import type { BuddyIconRenderer } from "../BuddyIconRenderer";
import type { UserFieldRenderer } from "../UserFieldRenderer";
import type { MailUtil } from "../MailUtil";
import type { SearchFactory } from "../SearchFactory";
import type { LocaleUtil } from "../LocaleUtil";
import type { UserFactory } from "../UserFactory";
import type { CollaborationFactory } from "../CollaborationFactory";
import type { ContentNodeUtil } from "../ContentNodeUtil";
import type { NodeComparatorUtil } from "../NodeComparatorUtil";
import type { NodeFilterUtil } from "../NodeFilterUtil";
import type { RedirectUtil } from "../RedirectUtil";
import type { NodeResolverUtil } from "../NodeResolverUtil";
import type { NodeFactoryUtil } from "../NodeFactoryUtil";
import type { WebResourceFactory } from "../WebResourceFactory";
import type { TranslationUtil } from "../TranslationUtil";
import type { XSLTUtil } from "../XSLTUtil";
import type { TimestampUtil } from "../TimestampUtil";
import type { MessageDigesterFactory } from "../MessageDigesterFactory";
import type { XmlParserUtil } from "../XmlParserUtil";
import type { RoleUtil } from "../RoleUtil";
import type { SiteCookieUtil } from "../SiteCookieUtil";
import type { CurrencyFactory } from "../CurrencyFactory";
import type { FormatterBuilderFactory } from "../FormatterBuilderFactory";
import type { TextModuleRendererBuilder } from "../TextModuleRendererBuilder";
import type { TagUtil } from "../TagUtil";
import type { AliasUtil } from "../AliasUtil";

/**
 * Main entry point to get instances of interfaces in the Sitevision Utility API.
 *
 *  <p>
 *     An instance of this interface can be obtained from your portlet via the request attribute "<code>sitevision.utils</code>".
 *     Once you have obtained an <code>Utils</code> instance, you can use it to retrieve instances of all other interfaces in the Sitevision API.
 *     In all JCR capable portlets that are bundled with Sitevision and exposes a "Custom template", you always have an <code>Utils</code> instance
 *     available as "<code>$sitevisionUtils</code>" in the VelocityContext.
 *  </p>
 *
 *  <p>
 *     Example of how to get hold of a {@link senselogic.sitevision.api.property.PropertyUtil PropertyUtil} instance from your JSR 286 portlet:
 *  </p>
 *  <pre><code>
 *     Utils utils = (Utils) aRequest.getAttribute("sitevision.utils");
 *     PropertyUtil propertyUtil = utils.getPropertyUtil();
 *     ...
 *     propertyUtil.get...
 *  </code></pre>
 *
 *  <p>
 *     Example of how to get hold of a {@link senselogic.sitevision.api.property.PropertyUtil PropertyUtil} instance in Velocity for a JCR capable
 *     standard Sitevision portlet with a "Custom template" (e.g. the JCR Menu portlet):
 *  </p>
 *  <pre><code>
 *     #set($propertyUtil = $sitevisionUtils.propertyUtil)
 *     ...
 *     $propertyUtil.get...
 *  </code></pre>
 *
 *  <p>
 *     <em>If sitevisionUtils is not available on the VelocityContext, you can use the PortletRequest instead if available
 *     (e.g. the Script portlet):</em>
 *  </p>
 *  <pre><em><code>
 *     #set($propertyUtil = $request.getAttribute('sitevision.utils').propertyUtil)
 *  </code></em></pre>
 * @author Magnus Lövgren
 */
export interface Utils {
  /**
   * Gets an instance of a portlet context utility class
   * @return a context utility class
   */
  getPortletContextUtil(): PortletContextUtil;

  /**
   * Gets an instance of a node iterator utility class
   * @return a node iterator utility class
   */
  getNodeIteratorUtil(): NodeIteratorUtil;

  /**
   * Gets an instance of a utility class for node trees.
   * @return a utility class for node trees
   */
  getNodeTreeUtil(): NodeTreeUtil;

  /**
   * Gets an instance of a utility class for jcr properties
   * @return a utility class for jcr properties
   */
  getPropertyUtil(): PropertyUtil;

  /**
   * Creates and returns a new instance of a stateful link renderer.
   *  Since the renderer is stateful, re-use of the same instance instead of getting a new is preferred for best performance.
   *  (i.e. Just call this method once in the rendering phase of your portlet)
   * @return a stateful link renderer
   */
  getLinkRenderer(): LinkRenderer;

  /**
   * Gets an instance of a output utility class
   * @return a output utility class
   */
  getOutputUtil(): OutputUtil;

  /**
   * Gets an instance of a color utility class
   * @return a color utility class
   */
  getColorUtil(): ColorUtil;

  /**
   * Gets an instance of a decoration utility class
   * @return a decoration utility class
   */
  getDecorationUtil(): DecorationUtil;

  /**
   * Gets an instance of a font utility class
   * @return a font utility class
   */
  getFontUtil(): FontUtil;

  /**
   * Gets an instance of a resource locator utility class
   * @return a resource locator utility class
   */
  getResourceLocatorUtil(): ResourceLocatorUtil;

  /**
   * Gets an instance of an encode/decode utility class
   * @return a escape utility class
   */
  getEndecUtil(): EndecUtil;

  /**
   * Gets an instance of a scripting utility class
   * @return a scripting utility class
   */
  getScriptUtil(): ScriptUtil;

  /**
   * Gets an instance of a logging utility class
   * @return a logging utility class
   */
  getLogUtil(): LogUtil;

  /**
   * Gets an instance of an icon utility class
   * @return an icon utility class
   */
  getIconUtil(): IconUtil;

  /**
   * Gets an instance of a permission utility class
   * @return a permission utility class
   * @since Sitevision 2.6
   */
  getPermissionUtil(): PermissionUtil;

  /**
   * Gets an instance of a directory utility class
   * @return a directory utility class
   * @since Sitevision 2.6
   */
  getDirectoryUtil(): DirectoryUtil;

  /**
   * Gets an instance of a client utility class
   * @return a client utility class
   * @since Sitevision 2.6_02
   */
  getClientUtil(): ClientUtil;

  /**
   * Gets an instance of a search utility class
   * @return a search utility class
   * @since Sitevision 2.6_05
   */
  getSearchUtil(): SearchUtil;

  /**
   * Gets an instance of a search field utility class
   * @return a search field utility class
   * @since Sitevision 2.6.2, 2.7_06
   * @deprecated
   */
  getSearchFieldUtil(): SearchFieldUtil;

  /**
   * Gets an instance of a portlet utility class
   * @return a search utility class
   * @since Sitevision 2.6_06
   */
  getPortletUtil(): PortletUtil;

  /**
   * Gets an instance of a metadata utility class
   * @return a metadata utility class
   * @since Sitevision 2.6.1
   */
  getMetadataUtil(): MetadataUtil;

  /**
   * Gets an instance of a bookmark utility class
   * @return a bookmark utility class
   * @since Sitevision 2.6.1
   */
  getBookmarkUtil(): BookmarkUtil;

  /**
   * Gets an instance of a publishing utility class
   * @return a publishing utility class
   * @since Sitevision 2.6.1_04
   */
  getPublishingUtil(): PublishingUtil;

  /**
   * Gets an instance of a version utility class
   * @return a version utility class
   * @since Sitevision 2.6.1_04
   */
  getVersionUtil(): VersionUtil;

  /**
   * Gets an instance of an archive utility class
   * @return an archive utility class
   * @since Sitevision 2.6.2
   */
  getArchiveUtil(): ArchiveUtil;

  /**
   * Gets an instance of a folder utility class
   * @return a folder utility class
   * @since Sitevision 2.6.2
   */
  getFolderUtil(): FolderUtil;

  /**
   * Gets an instance of a structure utility class
   * @return a structure utility class
   * @since Sitevision 2.6.2
   */
  getStructureUtil(): StructureUtil;

  /**
   * Gets an instance of a web content utility class
   * @return a web content utility class
   * @since Sitevision 2.6.2
   */
  getWebContentUtil(): WebContentUtil;

  /**
   * Gets an instance of an article utility class
   * @return an article utility class
   * @since Sitevision 2.6.2
   */
  getArticleUtil(): ArticleUtil;

  /**
   * Gets an instance of a file utility class
   * @return a file utility class
   * @since Sitevision 2.6.2
   */
  getFileUtil(): FileUtil;

  /**
   * Gets an instance of an image utility class
   * @return an image utility class
   * @since Sitevision 2.6.2
   */
  getImageUtil(): ImageUtil;

  /**
   * Gets an instance of a page utility class
   * @return a page utility class
   * @since Sitevision 2.6.2
   */
  getPageUtil(): PageUtil;

  /**
   * Gets an instance of a trashcan utility class
   * @return a trashcan utility class
   * @since Sitevision 2.6.2
   */
  getTrashcanUtil(): TrashcanUtil;

  /**
   * Gets an instance of a template utility class
   * @return a template utility class
   * @since Sitevision 2.6.1_04
   */
  getTemplateUtil(): TemplateUtil;

  /**
   * Gets an instance of an authentication utility class
   * @return a authentication utility class
   * @since Sitevision 2.6.1_03
   */
  getAuthenticationUtil(): AuthenticationUtil;

  /**
   * Gets an instance of an principal utility class
   * @return a principal utility class
   * @since Sitevision 2.6.1_06
   */
  getPrincipalUtil(): PrincipalUtil;

  /**
   * Creates and returns a new instance of a stateful file icon renderer.
   *  Since the renderer is stateful, re-use of the same instance instead of getting a new is preferred for best performance.
   *  (i.e. Just call this method once in the rendering phase of your portlet)
   * @return a stateful file icon renderer
   * @since Sitevision 2.6.1_08
   */
  getFileIconRenderer(): FileIconRenderer;

  /**
   * Creates and returns a new instance of a stateful image renderer.
   *  Since the renderer is stateful, re-use of the same instance instead of getting a new is preferred for best performance.
   *  (i.e. Just call this method once in the rendering phase of your portlet)
   * @return a stateful image renderer
   * @since Sitevision 2.6.1_08
   */
  getImageRenderer(): ImageRenderer;

  /**
   * Gets an instance of an immutable image scaler that enables scaling of images to a certain size.
   *  <p>
   *  Image scaler instance will respect the size ratio of the original image when scaling it.
   *  </p>
   *  <p>
   *  Note that an image scaler must be created in context of a currently executing portlet. In other words:
   *  if {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentPortlet()}
   *  is <code>null</code>, no image scaler can be created (i.e. this method will return <code>null</code>).
   *  </p>
   * @param aMaxWidth max width in pixels for scaled images, must be 10 or higher
   * @param aMaxHeight max height in pixels for scaled images, must be 10 or higher
   * @return an image scaler that can be used when rendering scaled images with an {@link senselogic.sitevision.api.render.ImageRenderer}.&#xA; If <code>aMaxWidth</code> or <code>aMaxHeight</code> has illegal values, <code>null</code> will be returned.
   * @since Sitevision 2.6.1_08
   */
  getImageScaler(aMaxWidth: number, aMaxHeight: number): ImageScaler;

  /**
   * Creates and returns an instance of an exception-suppressing proxy.
   *
   *  <p>
   *  <strong>Note! </strong>Be aware of <code>null</code>'s. They are never proxied. If you try to proxy <code>null</code>, this method
   *  will just return <code>null</code>, not a proxy instance. In other words: even though you're trying to use a
   *  <code>ExceptionSuppressingProxy</code> to suppress exceptions,
   *  method invocations will of course still throw <code>NullPointerException</code>.
   *  </p>
   * @param anObject an object to be proxied by an ExceptionSuppressingProxy
   * @return anObject proxied by an ExceptionSuppressingProxy, or <code>null</code> if <code>anObject</code> is <code>null</code>.&#xA; If <code>anObject</code> is a <code>ExceptionSuppressingProxy</code>),&#xA; <code>anObject</code> will be returned "as-is" (no new instance will be created).
   * @since Sitevision 2.6.1_09
   */
  getExceptionSuppressingProxy(anObject: unknown): ExceptionSuppressingProxy;

  /**
   * Creates and returns an instance of a collection decorator that exposes an exception-suppressing iterator.
   *
   *  <p>
   *  <strong>Note!</strong> The sole purpose of the <code>ExceptionSuppressingCollection</code> is to provide easy access to a decorated iterator
   *  ({@link senselogic.sitevision.api.script.proxy.ExceptionSuppressingIterator}).
   *  You should <em>not</em> create a collection of object proxys (i.e. <code>Collection&lt;ExceptionSuppressingProxy&gt;</code>) yourself.
   *  You should use <code>ExceptionSuppressingCollection</code>
   *  with your "regular" collection since the actual proxying is done by the iterator itself.
   *  </p>
   * @param aCollection a collection to be decorated by a ExceptionSuppressingCollection. Note that this should be your "regular" collection,&#xA; not a already proxied one (i.e. <code>Collection&lt;ExceptionSuppressingProxy&gt;</code>).
   * @return the collection decorated by a ExceptionSuppressingCollection, or <code>null</code> if <code>aCollection</code> is <code>null</code>.&#xA; If <code>aCollection</code> is a <code>ExceptionSuppressingCollection</code>),&#xA; <code>aCollection</code> will be returned "as-is" (no new instance will be created).
   * @since Sitevision 2.6.1_09
   */
  getExceptionSuppressingCollection(
    aCollection: Collection | unknown[]
  ): ExceptionSuppressingCollection;

  /**
   * Creates and returns an instance of an exception-suppressing iterator that returns exception-suppressing dynamic proxys.
   * @param anIterator an iterator to be decorated by a ExceptionSuppressingIterator
   * @return the iterator decorated by a ExceptionSuppressingIterator, or <code>null</code> if <code>anIterator</code> is <code>null</code>.&#xA; If <code>anIterator</code> is a <code>ExceptionSuppressingIterator</code>),&#xA; <code>anIterator</code> will be returned "as-is" (no new instance will be created).
   * @since Sitevision 2.6.1_09
   */
  getExceptionSuppressingIterator(
    anIterator: Iterator
  ): ExceptionSuppressingIterator;

  /**
   * Gets an instance of an subscription utility class
   * @return a subscription utility class
   * @since Sitevision 2.6.1_10
   */
  getSubscriptionUtil(): SubscriptionUtil;

  /**
   * Gets an instance of an subscriber utility class
   * @return a subscriber utility class
   * @since Sitevision 2.6.1_10
   */
  getSubscriberUtil(): SubscriberUtil;

  /**
   * Gets an instance of an instance type utility class
   * @return an instance type utility class
   * @since Sitevision 2.6.2
   */
  getInstanceTypeUtil(): InstanceTypeUtil;

  /**
   * Gets an instance of a node type utility class
   * @return a node type utility class
   * @since Sitevision 2.6.2
   */
  getNodeTypeUtil(): NodeTypeUtil;

  /**
   * Gets an instance of an metadata definition utility class
   * @return a metadata definition utility class
   * @since Sitevision 2.6.2_04
   */
  getMetadataDefinitionUtil(): MetadataDefinitionUtil;

  /**
   * Creates and returns a new instance of a stateful image link renderer.
   *  Since the renderer is stateful, re-use of the same instance instead of getting a new is preferred for best performance.
   *  (i.e. Just call this method once in the rendering phase of your portlet)
   * @return an image link renderer
   * @since Sitevision 2.6.2_04
   */
  getImageLinkRenderer(): ImageLinkRenderer;

  /**
   * Gets an instance of a MIME type utility class
   * @return a MIME type utility class
   * @since Sitevision 3.0
   */
  getMimeTypeUtil(): MimeTypeUtil;

  /**
   * Gets an instance of a DOCTYPE utility class
   * @return a DOCTYPE utility class
   * @since Sitevision 3.0
   */
  getDocTypeUtil(): DocTypeUtil;

  /**
   * Gets an instance of a property utility class for a specified version.
   *
   *  <p>
   *     <strong>Note!</strong> This method returns an exotic sibling interface to {@link senselogic.sitevision.api.property.PropertyUtil} that
   *     can be used to extract property values from <em>an other version than the one you are currently executing in</em>.
   *     If you don't know what a version is or haven't thought much about it, you would typically use the common property extraction interface -
   *     {@link #getPropertyUtil()}.
   *  </p>
   * @param aVersion {@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION} or&#xA; {@link senselogic.sitevision.api.versioning.VersionUtil#ONLINE_VERSION}
   * @return a VersionedPropertyUtil class for aVersion, i.e. {@link senselogic.sitevision.api.property.OfflineVersionPropertyUtil} or&#xA; {@link senselogic.sitevision.api.property.OnlineVersionPropertyUtil}.&#xA; if aVersion has an illegal value, null will be returned.
   * @see senselogic.sitevision.api.property.PropertyUtil
   * @since Sitevision 3.0
   */
  getVersionedPropertyUtil(aVersion: number): VersionedPropertyUtil;

  /**
   * Gets an instance of a device utility class
   * @return a device utility class
   * @since Sitevision 3.0
   */
  getDeviceUtil(): DeviceUtil;

  /**
   * Gets an instance of a user utility class
   * @return a user utility class
   * @since Sitevision 3.0
   * @deprecated use {@link #getUserFactory()} to get a {@link senselogic.sitevision.api.user.SystemUserUtil} and&#xA; {@link senselogic.sitevision.api.user.UserIdentityUtil} instead
   */
  getUserUtil(): UserUtil;

  /**
   * Gets an instance of a Velocity renderer class.
   * @return a Velocity renderer class
   * @since Sitevision 3.0
   */
  getVelocityRenderer(): VelocityRenderer;

  /**
   * Gets an instance of an instance creator utility class.
   * @return an instance creator class
   * @since Sitevision 3.1
   */
  getInstanceCreatorUtil(): InstanceCreatorUtil;

  /**
   * Gets an instance of an date utility class.
   * @return an date utility
   * @since Sitevision 3.5
   */
  getDateUtil(): DateUtil;

  /**
   * Gets an instance of a landing page utility class.
   * @return an landing page utility
   * @since Sitevision 3.5.1
   */
  getLandingPageUtil(): LandingPageUtil;

  /**
   * Creates and returns a new instance of a stateful buddy icon renderer.
   *  Since the renderer is stateful, re-use of the same instance instead of getting a new is preferred for best performance.
   *  (i.e. Just call this method once in the rendering phase of your portlet)
   * @return a stateful buddy icon renderer
   * @since Sitevision 3.5.3
   */
  getBuddyIconRenderer(): BuddyIconRenderer;

  /**
   * Creates and returns a new instance of a stateful user field renderer.
   *  Since the renderer is stateful, re-use of the same instance instead of getting a new is preferred for best performance.
   *  (i.e. Just call this method once in the rendering phase of your portlet)
   * @return a stateful user field renderer
   * @since Sitevision 3.5.3
   */
  getUserFieldRenderer(): UserFieldRenderer;

  /**
   * Gets an instance of a mail utility class.
   * @return a mail utility
   * @since Sitevision 3.6
   */
  getMailUtil(): MailUtil;

  /**
   * Gets an instance of a factory for search-related instances.
   * @return a factory for creating search-related instances
   * @since Sitevision 3.6
   */
  getSearchFactory(): SearchFactory;

  /**
   * Gets an instance of a locale utility class.
   * @return an instance of a locale utility class
   * @since Sitevision 3.6
   */
  getLocaleUtil(): LocaleUtil;

  /**
   * Gets an instance of a factory for user-related instances.
   * @return a factory for creating user-related instances
   * @since Sitevision 3.6
   */
  getUserFactory(): UserFactory;

  /**
   * Gets an instance of a factory for collaboration-related instances.
   * @return a factory for creating collaboration-related instances
   * @since Sitevision 3.6
   */
  getCollaborationFactory(): CollaborationFactory;

  /**
   * Gets an instance of a content node utility class.
   * @return a content node utility class.
   * @since Sitevision 10.2
   */
  getContentNodeUtil(): ContentNodeUtil;

  /**
   * Gets an instance of a node comparator utility class.
   * @return a node comparator utility class.
   * @since Sitevision 3.6
   */
  getNodeComparatorUtil(): NodeComparatorUtil;

  /**
   * Gets an instance of a node filter utility class.
   * @return a node filter utility class.
   * @since Sitevision 3.6.2
   */
  getNodeFilterUtil(): NodeFilterUtil;

  /**
   * Gets an instance of a redirect utility class.
   * @return a redirect utility class.
   * @since Sitevision 4.0.3
   */
  getRedirectUtil(): RedirectUtil;

  /**
   * Gets an instance of a node resolver utility class.
   * @return a node resolver utility class
   * @since Sitevision 4.1
   */
  getNodeResolverUtil(): NodeResolverUtil;

  /**
   * Gets an instance of a node factory utility class.
   * @return a node factory utility class
   * @since Sitevision 4.1.2
   */
  getNodeFactoryUtil(): NodeFactoryUtil;

  /**
   * Gets an instance of a web resource factory utility class.
   * @return a web resource factory utility class
   * @since Sitevision 4.2
   */
  getWebResourceFactory(): WebResourceFactory;

  /**
   * Gets an instance of a translation utility class.
   * @return a translation utility class
   * @since Sitevision 4.2.1
   */
  getTranslationUtil(): TranslationUtil;

  /**
   * Gets an instance of a XSLT utility class.
   * @return a XSLT utility class
   * @since Sitevision 4.5
   */
  getXSLTUtil(): XSLTUtil;

  /**
   * Gets an instance of a timestamp utility class.
   * @return a timestamp utility class
   * @since Sitevision 4.5.4.1
   */
  getTimestampUtil(): TimestampUtil;

  /**
   * Gets an instance of a message digester factory class.
   * @return a message digester factory
   * @since Sitevision 5.0.1
   */
  getMessageDigesterFactory(): MessageDigesterFactory;

  /**
   * Gets an instance of a xml parser utility class.
   * @return a xml parser utility class
   * @since Sitevision 5.1
   */
  getXmlParserUtil(): XmlParserUtil;

  /**
   * Gets an instance of a role utility class.
   * @return a role utility class
   * @since Sitevision 5.1
   */
  getRoleUtil(): RoleUtil;

  /**
   * Gets an instance of a site cookie utility class.
   * @return a site cookie utility class
   * @since Sitevision 9.1
   */
  getSiteCookieUtil(): SiteCookieUtil;

  /**
   * Gets an instance of a currency factory class.
   * @return a currency factory class
   * @since Sitevision 6.1
   */
  getCurrencyFactory(): CurrencyFactory;

  /**
   * Gets an instance of a formatter builder factory class.
   * @return a formatter builder factory class
   * @since Sitevision 6.1
   */
  getFormatterBuilderFactory(): FormatterBuilderFactory;

  /**
   * Gets an instance of a Text module renderer builder class.
   * @return a Text module renderer builder class
   * @since Sitevision 7
   */
  getTextModuleRendererBuilder(): TextModuleRendererBuilder;

  /**
   * Gets an instance of a tag utility class.
   * @return a tag utility class
   * @since Sitevision 9.1
   */
  getTagUtil(): TagUtil;

  /**
   * Gets an instance of an alias utility class.
   * @return an alias utility class
   * @since Sitevision 2022.10.2
   */
  getAliasUtil(): AliasUtil;
}

declare namespace Utils {}

declare var utils: Utils;

export default utils;
