import type { Node } from "../../types/javax/jcr/Node";
import type { Map } from "../../types/java/util/Map";

import type { String } from "../../types/java/lang/String";

/**
 * Image utility interface that handles nodes with primary node type <code>sv:image</code>.
 *
 *  <p>
 *     <em>Note!</em> This interface is used to <em>create</em> images. You would typically use
 *     {@link senselogic.sitevision.api.webresource.structure.StructureUtil} to <em>move</em> an image
 *     and {@link senselogic.sitevision.api.webresource.structure.TrashcanUtil} to <em>delete</em> an image.
 *     To <em>render</em> images, you would typically use {@link senselogic.sitevision.api.render.ImageRenderer}
 *     or {@link senselogic.sitevision.api.render.ImageLinkRenderer}.
 *  </p>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getImageUtil()}.
 *     See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 * @author Mikael Wikblom
 * @since Sitevision 2.6.2
 */
export interface ImageUtil {
  /**
   * <p>
   *     Adds several images to a <code>sv:localImageRepository</code>, <code>sv:imageRepository</code>, <code>sv:personalImageRepository</code>
   *     or a <code>sv:folder</code> residing as sub node to an image repository.
   *     If an other parent node is specified a <code>ConstraintViolationException</code> is thrown.
   *     The images map keys correspond to the file names (will correspond to the property fileName of the sv:image nodes)
   *     and the values to URIs pointing to the file resources.
   *  </p>
   *
   *  <p>
   *     Note that the images must have an image mime-type to be created.
   *  </p>
   *
   *  <p>
   *     <strong>URI note!</strong> The resource must be accessible from the Sitevision server! Sitevision opens
   *     a stream to an URL with the <code>aUri</code> value when creating the binary content of the image.
   *     If a firewall or such blocks outgoing communication from the server - image creation will fail.
   *  </p>
   *
   *  <p>
   *     <strong>Permission note!</strong> Current user (the invoker of this method) must have WRITE permission
   *     on the parent node (see {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE})
   *     or a <code>ConstraintViolationException</code> is thrown.
   *     <em>Creating an image for a <code>sv:userIdentity</code> requires
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_USER_IDENTITIES} on current page.</em>
   *  </p>
   * @param aParent the parent node for the images. May not be <code>null</code>
   * @param aImages a map of file name to URI pairs May not be <code>null</code>
   * @throws ConstraintViolationException if the user is not authorized to alter the parent node, if an invalid&#xA; parent node is specified or if image exceeds file size limit
   * @throws RepositoryException if something else goes wrong
   */
  createImages(aParent: Node, aImages: Map | {}): void;

  /**
   * Creates an image using a uri string.
   *
   *  <p>
   *     Note that the <code>aParent</code> of the file must be a <code>sv:localImageRepository</code>, <code>sv:imageRepository</code>,
   *     <code>sv:personalImageRepository</code> or a <code>sv:folder</code> residing as sub node to an image repository.
   *  </p>
   *  <p>
   *     The file must have an image mime-type or an <code>IllegalArgumentException</code> is thrown.
   *  </p>
   *
   *  <p>
   *     <strong>URI note!</strong> The resource must be accessible from the Sitevision server! Sitevision opens
   *     a stream to an URL with the <code>aUri</code> value when creating the binary content of the image.
   *     If a firewall or such blocks outgoing communication from the server - image creation will fail.
   *  </p>
   *
   *  <p>
   *     <strong>Permission note!</strong> Current user (the invoker of this method) must have WRITE permission
   *     on the parent node (see {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE})
   *     or a <code>ConstraintViolationException</code> is thrown.
   *     <em>Creating an image for a <code>sv:userIdentity</code> requires
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_USER_IDENTITIES} on current page.</em>
   *  </p>
   * @param aParent the parent node of the image. May not be <code>null</code>
   * @param aFileName the fileName property of the sv:image. May not be <code>null</code>
   * @param aUri the URI pointing to the file resource. May not be <code>null</code>
   * @return a sv:image node corresponding to the newly created image. Will never return <code>null</code>
   * @throws ConstraintViolationException if the user is not authorized to alter the parent node, if an invalid&#xA; parent node is specified or if image exceeds file size limit
   * @throws RepositoryException if something else goes wrong
   */
  createImage(
    aParent: Node,
    aFileName: String | string,
    aUri: String | string
  ): Node;

  /**
   * Creates an image using a base64 string.
   *
   *  <p>
   *     The base64 decoder uses "The Base64 Alphabet" as specified in Table 1 of RFC 4648 and RFC 2045 for decoding operation.
   *     The decoder rejects data that contains characters outside the base64 alphabet.
   *  </p>
   *  <p>
   *     Note that the <code>aParent</code> of the file must be a <code>sv:localImageRepository</code>, <code>sv:imageRepository</code>,
   *     <code>sv:personalImageRepository</code> or a <code>sv:folder</code> residing as sub node to an image repository.
   *  </p>
   *  <p>
   *     The file name must correspond to an image mime-type or an <code>IllegalArgumentException</code> is thrown.
   *  </p>
   *
   *  <p>
   *     <strong>Permission note!</strong> Current user (the invoker of this method) must have WRITE permission
   *     on the parent node (see {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE})
   *     or a <code>ConstraintViolationException</code> is thrown.
   *     <em>Creating an image for a <code>sv:userIdentity</code> requires
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_USER_IDENTITIES} on current page.</em>
   *  </p>
   * @param aParent the parent node of the image. May not be <code>null</code>
   * @param aFileName the fileName property of the sv:image. May not be <code>null</code>
   * @param aBase64EncodedString a base64 encoded string. May not be <code>null</code>
   * @return a sv:image node corresponding to the newly created image. Will never return <code>null</code>
   * @throws ConstraintViolationException if the user is not authorized to alter the parent node, if an invalid&#xA; parent node is specified, if <code>aBase64EncodedString</code> is not base64 encoded or if image exceeds file size limit
   * @throws RepositoryException if something else goes wrong
   * @since Sitevision 4.5.4
   */
  createImageFromBase64(
    aParent: Node,
    aFileName: String | string,
    aBase64EncodedString: String | string
  ): Node;

  /**
   * Creates an image using a sv:temporaryFile.
   *
   *  <p>
   *     Note that the <code>aParent</code> of the file must be a <code>sv:localImageRepository</code>, <code>sv:imageRepository</code>,
   *     <code>sv:personalImageRepository</code> or a <code>sv:folder</code> residing as sub node to an image repository.
   *  </p>
   *  <p>
   *     The file name must correspond to an image mime-type or an <code>IllegalArgumentException</code> is thrown.
   *  </p>
   *
   *  <p>
   *     <strong>Permission note!</strong> Current user (the invoker of this method) must have WRITE permission
   *     on the parent node (see {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE})
   *     or a <code>ConstraintViolationException</code> is thrown.
   *     <em>Creating an image for a <code>sv:userIdentity</code> requires
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_USER_IDENTITIES} on current page.</em>
   *  </p>
   * @param aParent the parent node of the image
   * @param aTemporaryFile a sv:temporaryFile (typically created via {@link senselogic.sitevision.api.node.builder.TemporaryFileNodeBuilder})
   * @return a sv:image node corresponding to the newly created image. Will never return <code>null</code>
   * @throws ConstraintViolationException if the user is not authorized to alter the parent node, if an invalid&#xA; parent node is specified, if an invalid temporary node is specified or if image exceeds file size limit
   * @throws RepositoryException if something else goes wrong
   * @since Sitevision 4.5.4
   */
  createImageFromTemporary(aParent: Node, aTemporaryFile: Node): Node;

  /**
   * Updates the binary content of an existing image using a uri string.
   *
   *  <p>
   *     Properties related to the binary content will also be updated (e.g. <code>length</code>, <code>width</code> and <code>height</code>).
   *  </p>
   *
   *  <p>
   *     <strong>URI note!</strong> The URI must be accessible from the Sitevision server and the ending part
   *     of the URI must match the file extension of the existing image that should be updated!
   *  </p>
   *  <p>
   *     <strong>Permission note!</strong> Current user (the invoker of this method) must have WRITE permission
   *     on the image node that should be updated (see {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE}).
   *     <em>Updating an image for a <code>sv:userIdentity</code> requires
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_USER_IDENTITIES} on current page.</em>
   *  </p>
   * @param aImage the image. May not be <code>null</code>
   * @param aUri the URI pointing to the file resource to fetch new binary content from. May not be <code>null</code>
   * @throws ConstraintViolationException if the user is not authorized to alter the image node,&#xA; if an invalid node is specified, if the end part of <code>aUri</code> doesn't match the file extension&#xA; of <code>aImage</code> or if image exceeds file size limit
   * @throws RepositoryException if something else goes wrong
   * @since Sitevision 3.6.3
   */
  updateBinaryContent(aImage: Node, aUri: String | string): void;

  /**
   * Updates the binary content of an existing image using a base64 string.
   *
   *  <p>
   *     The base64 decoder uses "The Base64 Alphabet" as specified in Table 1 of RFC 4648 and RFC 2045 for decoding operation.
   *     The decoder rejects data that contains characters outside the base64 alphabet.
   *  </p>
   *  <p>
   *     Properties related to the binary content will also be updated (e.g. <code>length</code>, <code>width</code> and <code>height</code>).
   *  </p>
   *
   *  <p>
   *     <strong>Permission note!</strong> Current user (the invoker of this method) must have WRITE permission
   *     on the image node that should be updated (see {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE}).
   *     <em>Updating an image for a <code>sv:userIdentity</code> requires
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_USER_IDENTITIES} on current page.</em>
   *  </p>
   * @param aImage the image. May not be <code>null</code>
   * @param aBase64EncodedString a base64 encoded string. May not be <code>null</code>
   * @throws ConstraintViolationException if the user is not authorized to alter the image node,&#xA; if an invalid node is specified, if <code>aBase64EncodedString</code> is not base64 encoded or if image exceeds file size limit
   * @throws RepositoryException if something else goes wrong
   * @since Sitevision 4.5.4
   */
  updateBinaryContentFromBase64(
    aImage: Node,
    aBase64EncodedString: String | string
  ): void;

  /**
   * Updates the binary content of an existing image using a sv:temporaryFile.
   *
   *  <p>
   *     Properties related to the binary content will also be updated (e.g. <code>length</code>, <code>width</code> and <code>height</code>).
   *  </p>
   *
   *  <p>
   *     <strong>Permission note!</strong> Current user (the invoker of this method) must have WRITE permission
   *     on the image node that should be updated (see {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE}).
   *     <em>Updating an image for a <code>sv:userIdentity</code> requires
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_USER_IDENTITIES} on current page.</em>
   *  </p>
   * @param aImage the image. May not be <code>null</code>
   * @param aTemporaryFile the sv:temporaryFile (typically created via {@link senselogic.sitevision.api.node.builder.TemporaryFileNodeBuilder})
   * @throws ConstraintViolationException if the user is not authorized to alter the image node,&#xA; if an invalid node is specified, if the end part of the file represented by <code>aTemporaryFile</code> doesn't match the file extension&#xA; of <code>aImage</code> or if image exceeds file size limit
   * @throws RepositoryException if something else goes wrong
   * @since Sitevision 4.5.4
   */
  updateBinaryContentFromTemporary(aImage: Node, aTemporaryFile: Node): void;

  /**
   * Alters the name of an image.
   *
   *  <p>
   *     If no image is specified a <code>NullPointerException</code> is thrown.
   *     If the node is not a sv:image an <code>IllegalArgumentException</code> is thrown.
   *     If no name is provided a <code>NullPointerException</code> is thrown.
   *  </p>
   *
   *  <p>
   *     <strong>Permission note!</strong> Current user (the invoker of this method) must have WRITE permission
   *     on the image node that should be updated (see {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE}).
   *     <em>Updating an image for a <code>sv:userIdentity</code> requires
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_USER_IDENTITIES} on current page.</em>
   *  </p>
   * @param aImage the sv:image that should be renamed. May not be <code>null</code>
   * @param aName the new name of the image. May not be <code>null</code>
   * @throws ConstraintViolationException if the current user is not authorized to alter the name of the image&#xA; or if the image extension doesn't match
   * @throws RepositoryException if something else goes wrong
   * @since Sitevision 4.5.2
   */
  renameImage(aImage: Node, aName: String | string): void;

  /**
   * The Base64 String representation of an image Node.
   *
   *  <p>
   *     Reads the binary content of an image and encodes the bytes using
   *     {@link senselogic.sitevision.api.text.EndecUtil#base64encodeToString(byte[])}.
   *  </p>
   * @param aImage the image Node (sv:image or sv:temporaryFile), may not be null
   * @return aImage as base64-encoded String
   * @throws ConstraintViolationException if aImage is not a sv:image or sv:temporaryFile
   * @throws RepositoryException if something else goes wrong
   * @since Sitevision 4.5.5.2
   */
  toBase64(aImage: Node): string;

  /**
   * Sets the alt property for an image Node.
   *
   *  <p>
   *     <strong>Permission note!</strong> Current user (the invoker of this method) must have
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE WRITE} permission
   *     on the image node that should be updated. <em>Updating an image for a <code>sv:userIdentity</code> requires
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_USER_IDENTITIES MANAGE_USER_IDENTITIES} permission
   *     on current page.</em>
   *  </p>
   * @param aImage the sv:image Node, may not be null
   * @param aAltText the alt text to set
   * @throws ConstraintViolationException if aImage is not a sv:image or if current user is not authorized to alter the image node
   * @throws RepositoryException if something else goes wrong
   * @since Sitevision 2024.07.1
   */
  setAltText(aImage: Node, aAltText: String | string): void;

  /**
   * Sets the caption property for an image Node.
   *
   *  <p>
   *     <strong>Permission note!</strong> Current user (the invoker of this method) must have
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE WRITE} permission
   *     on the image node that should be updated. <em>Updating an image for a <code>sv:userIdentity</code> requires
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_USER_IDENTITIES MANAGE_USER_IDENTITIES} permission
   *     on current page.</em>
   *  </p>
   * @param aImage the sv:image Node, may not be null
   * @param aCaptionText the caption text to set
   * @throws ConstraintViolationException if aImage is not a sv:image or if current user is not authorized to alter the image node
   * @throws RepositoryException if something else goes wrong
   * @since Sitevision 2024.07.1
   */
  setCaptionText(aImage: Node, aCaptionText: String | string): void;
}

declare namespace ImageUtil {}

declare var imageUtil: ImageUtil;

export default imageUtil;
