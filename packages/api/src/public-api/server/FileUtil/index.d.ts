import type { Node } from "../../types/javax/jcr/Node";

/**
 * File utility interface that handles nodes with primary node type <code>sv:file</code> and <code>sv:temporaryFile</code>.
 *
 * <p>
 *    <em>Note!</em> This interface is used to <em>create</em> files. You would typically use
 *    {@link senselogic.sitevision.api.webresource.structure.StructureUtil} to <em>move</em> a file
 *    and {@link senselogic.sitevision.api.webresource.structure.TrashcanUtil} to <em>delete</em> a file.
 *    To check <em>MIME/Content-Type</em> for a file you would typically use {@link senselogic.sitevision.api.webresource.mime.MimeTypeUtil}.
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getFileUtil()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Mikael Wikblom
 * @since Sitevision 2.6.2
 */
export interface FileUtil {
  /**
   * <p>
   *    Adds several files to a sv:localFileRepository, sv:fileRepository, sv:personalFileRepository or a sv:folder
   *    residing as sub node to a file repository.
   * </p>
   * <p>
   *    Files are specified by a map where the keys denotes the file names (will correspond to the property fileName
   *    of the sv:file nodes) and the values denotes the URIs pointing to the file resources. The file resources
   *    (i.e. the URIs) must be accessible from the Sitevision server. Sitevision opens a stream with the URI value
   *    when creating/uploading the binary content of the file. If a firewall or such blocks outgoing communication
   *    from the server - file creation will fail.
   * </p>
   * <p>
   *    <strong>Permission note!</strong> Current user must be authorized to alter the parent node
   *    (e.g. {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE}).
   * </p>
   * <p>
   *    A warning will be written to the system log if Sitevision for any reason is unable to create one of the files.
   * </p>
   * @param aParent the parent node for the files
   * @param aFileMappings a map of file name to URI pairs
   * @throws java.lang.NullPointerException if <code>aParent</code> or <code>aFileMappings</code> is <code>null</code>
   * @throws ConstraintViolationException if the user is not authorized to alter the parent node, if an invalid&#xA; parent node is specified or if file exceeds file size limit
   * @throws RepositoryException if something else goes wrong
   */
  createFiles(aParent: Node, aFileMappings: unknown): void;

  /**
   * Creates a file using a uri string.
   *
   * <p>
   *    Note that the <code>aParent</code> of the file must be a <code>sv:localFileRepository</code>, <code>sv:fileRepository</code>,
   *    <code>sv:personalFileRepository</code> or a <code>sv:folder</code> residing as sub node to a file repository.
   * </p>
   * <p>
   *    <strong>Permission note!</strong> Current user must be authorized to alter the parent node
   *    (e.g. {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE}).
   * </p>
   * <p>
   *    <strong>URI note!</strong> The file resource must be accessible from the Sitevision server! Sitevision opens
   *    a stream to an URL with the <code>aUri</code> value when creating/uploading the binary content of the file.
   *    If a firewall or such blocks outgoing communication from the server - file creation will fail.
   * </p>
   * @param aParent the parent node of the file
   * @param aFileName the filename
   * @param aUri the URI pointing to the file resource retrievable from the Sitevision server
   * @return a sv:file node corresponding to the newly created file. Will never return <code>null</code>
   * @throws java.lang.NullPointerException if <code>aParent</code>, <code>aFileName</code> or <code>aUri</code> is <code>null</code>
   * @throws ConstraintViolationException if the user is not authorized to alter the parent node, if an invalid&#xA; parent node is specified or if file exceeds file size limit
   * @throws RepositoryException if something else goes wrong
   */
  createFile(aParent: Node, aFileName: string, aUri: string): Node;

  /**
   * Creates a file using a base64 string.
   *
   * <p>
   *    The base64 decoder uses "The Base64 Alphabet" as specified in Table 1 of RFC 4648 and RFC 2045 for decoding operation.
   *    The decoder rejects data that contains characters outside the base64 alphabet.
   * </p>
   * <p>
   *    Note that the <code>aParent</code> of the file must be a <code>sv:localFileRepository</code>, <code>sv:fileRepository</code>,
   *    <code>sv:personalFileRepository</code> or a <code>sv:folder</code> residing as sub node to a file repository.
   * </p>
   * <p>
   *    <strong>Permission note!</strong> Current user must be authorized to alter the parent node
   *    (e.g. {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE}).
   * </p>
   * @param aParent the parent node of the file
   * @param aFileName the filename
   * @param aBase64EncodedString a base64 encoded string
   * @return a sv:file node corresponding to the newly created file. Will never return <code>null</code>
   * @throws java.lang.NullPointerException if <code>aParent</code>, <code>aFileName</code> or <code>aBase64EncodedString</code> is <code>null</code>
   * @throws ConstraintViolationException if the user is not authorized to alter the parent node, if an invalid parent node is specified, if&#xA; <code>aBase64EncodedString</code> is not base64 encoded or if file exceeds file size limit
   * @throws RepositoryException if something else goes wrong
   * @since Sitevision 4.5.4
   */
  createFileFromBase64(
    aParent: Node,
    aFileName: string,
    aBase64EncodedString: string
  ): Node;

  /**
   * Creates a file using a sv:temporaryFile.
   *
   * <p>
   *    Note that the <code>aParent</code> of the file must be a <code>sv:localFileRepository</code>, <code>sv:fileRepository</code>,
   *    <code>sv:personalFileRepository</code> or a <code>sv:folder</code> residing as sub node to a file repository.
   * </p>
   * <p>
   *    <strong>Permission note!</strong> Current user must be authorized to alter the parent node
   *    (e.g. {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE}).
   * </p>
   * @param aParent the parent node of the file
   * @param aTemporaryFile a sv:temporaryFile (typically created via {@link senselogic.sitevision.api.node.builder.TemporaryFileNodeBuilder})
   * @return a sv:file node corresponding to the newly created file. Will never return <code>null</code>
   * @throws ConstraintViolationException if the user is not authorized to alter the parent node, if an invalid&#xA; parent node is specified, if an invalid temporary node is specified or if file exceeds file size limit
   * @throws RepositoryException if something else goes wrong
   * @since Sitevision 4.5.4
   */
  createFileFromTemporary(aParent: Node, aTemporaryFile: Node): Node;

  /**
   * Updates the binary content of an existing file using a uri string.
   *
   * <p>
   *    Properties related to the binary content will also be updated (e.g. <code>length</code>). A new version will
   *    be created if the binary content of a <em>group file</em> is updated.
   * </p>
   * <p>
   *    <strong>URI note!</strong> The URI must be accessible from the Sitevision server and the ending part
   *    of the URI must match the file extension of the existing file that should be updated! Sitevision opens
   *    a stream to an URL with the <code>anUri</code> value when uploading the binary content of the file.
   *    If a firewall or such blocks outgoing communication from the server - file update will fail.
   * </p>
   * <p>
   *    <strong>Permission note!</strong> Current user must be authorized to alter the file node that
   *    should be updated (e.g. {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE}).
   * </p>
   * @param aFile the file
   * @param aUri the URI pointing to the file resource to fetch new binary content from
   * @throws ConstraintViolationException if the user is not authorized to alter the file node,&#xA; if an invalid node is specified, if the end part of <code>aUri</code> doesn't match the file extension&#xA; of <code>aFile</code> or if file exceeds file size limit
   * @throws RepositoryException if something else goes wrong
   * @since Sitevision 3.6.3
   */
  updateBinaryContent(aFile: Node, aUri: string): void;

  /**
   * Updates the binary content of an existing file using a base64 string.
   *
   * <p>
   *    The base64 decoder uses "The Base64 Alphabet" as specified in Table 1 of RFC 4648 and RFC 2045 for decoding operation.
   *    The decoder rejects data that contains characters outside the base64 alphabet.
   * </p>
   * <p>
   *    Properties related to the binary content will also be updated (e.g. <code>length</code>). A new version will
   *    be created if the binary content of a <em>group file</em> is updated.
   * </p>
   * <p>
   *    <strong>Permission note!</strong> Current user must be authorized to alter the file node that
   *    should be updated (e.g. {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE}).
   * </p>
   * @param aFile the file
   * @param aBase64EncodedString a base64 encoded string
   * @throws ConstraintViolationException if the user is not authorized to alter the file node, if an invalid node is specified, if&#xA; <code>aBase64EncodedString</code> is not base64 encoded, if file exceeds file size limit&#xA; or if file exceeds file size limit
   * @throws RepositoryException if something else goes wrong
   * @since Sitevision 4.5.4
   */
  updateBinaryContentFromBase64(
    aFile: Node,
    aBase64EncodedString: string
  ): void;

  /**
   * Updates the binary content of an existing file using a sv:temporaryFile.
   *
   * <p>
   *    Properties related to the binary content will also be updated (e.g. <code>length</code>). A new version will
   *    be created if the binary content of a <em>group file</em> is updated.
   * </p>
   * <p>
   *    <strong>Permission note!</strong> Current user must be authorized to alter the file node that
   *    should be updated (e.g. {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE}).
   * </p>
   * @param aFile the file
   * @param aTemporaryFile the sv:temporaryFile (typically created via {@link senselogic.sitevision.api.node.builder.TemporaryFileNodeBuilder})
   * @throws ConstraintViolationException if the user is not authorized to alter the file node,&#xA; if an invalid node is specified, if the end part of the file represented by <code>aTemporaryFile</code> doesn't match the file extension&#xA; of <code>aFile</code> or if file exceeds file size limit
   * @throws RepositoryException if something else goes wrong
   * @since Sitevision 4.5.4
   */
  updateBinaryContentFromTemporary(aFile: Node, aTemporaryFile: Node): void;

  /**
   * Gets the contents of a file as a String using the UTF-8 character encoding.
   *
   * <p>
   *    <em>Note! This is mere a convenience method for {@link #getContentAsString(Node, String)} using UTF-8 as character encoding.</em>
   * </p>
   * @param aFile the file Node (sv:file or sv:temporaryFile)
   * @return the UTF-8 file content, or null if aFile isn't a character-based file
   * @see #getContentAsString(Node, String)
   * @since Sitevision 4.1.1
   */
  getContentAsString(aFile: Node): string;

  /**
   * Gets the contents of a file as a String using a given character encoding.
   *
   * <p>
   *    <em>Note!</em> This method operates on character-based file nodes only! That is:
   * </p>
   * <ul>
   *    <li>
   *       Files that are of <em>text type</em> (as of {@link senselogic.sitevision.api.webresource.mime.MimeTypeUtil#isTextType(String)}).
   *    </li>
   *    <li>
   *       Files that are of <em>xml type</em> (as of {@link senselogic.sitevision.api.webresource.mime.MimeTypeUtil#isXmlType(String)}).
   *    </li>
   *    <li>
   *       Common "cross-over/mixed-types" files, such as <em>json</em> (application type) and <em>svg</em> (image type).
   *    </li>
   * </ul>
   * @param aFile the file Node (sv:file or sv:temporaryFile)
   * @param aCharacterEncoding the character encoding (Note! UTF-8 will be used instead for null, empty and illegal/unsupported encoding)
   * @return the file content using the specified character encoding, or null if aFile isn't a character-based file
   * @since Sitevision 4.1.1
   */
  getContentAsString(aFile: Node, aCharacterEncoding: string): string;

  /**
   * Alters the name of a file.
   *
   * <p>
   *    If no file is specified a <code>NullPointerException</code> is thrown.
   *    If the node is not a sv:file an <code>IllegalArgumentException</code> is thrown.
   *    If no name is provided a <code>NullPointerException</code> is thrown.
   * </p>
   *
   * <p>
   *    <strong>Permission note!</strong> Current user (the invoker of this method) must have WRITE permission
   *    on the file node that should be updated (see {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE}).
   *    <em>Updating a file for a <code>sv:userIdentity</code> requires
   *    {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_USER_IDENTITIES} on current page.</em>
   * </p>
   * @param aFile the sv:file that should be renamed. May not be <code>null</code>
   * @param aNewName the new name of the file. May not be <code>null</code>
   * @throws ConstraintViolationException if the current user is not authorized to alter the name of the file or if the file extension doesn't match
   * @throws RepositoryException if something else goes wrong
   * @since Sitevision 4.5.2
   */
  renameFile(aFile: Node, aNewName: string): void;

  /**
   * Modifies versioning for a file.
   *
   * <p>
   *    <strong>Permission note!</strong> Current user (the invoker of this method) must have WRITE permission
   *    on the file node that should be updated (see {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE}).
   * </p>
   * @param aFile the sv:file. May not be null
   * @param aVersioned the new state of versioning for this file
   * @throws ConstraintViolationException if the current user is not authorized to mutate aFile or if aFile is not a sv:file
   * @throws RepositoryException if something else goes wrong
   * @since Sitevision 9.1
   */
  setVersioned(aFile: Node, aVersioned: boolean): void;

  /**
   * Modifies download protection for a file.
   *
   * <p>
   *    <strong>Permission note!</strong> Current user (the invoker of this method) must have WRITE permission and MANAGE_DOWNLOAD_PROTECTION
   *    permission on the file node that should be updated (see {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE}
   *    and {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_DOWNLOAD_PROTECTION}).
   * </p>
   *
   * <p>
   *    <em>Tip! Use {@link senselogic.sitevision.api.property.PropertyUtil} or {@link senselogic.sitevision.api.property.Properties}
   *    to check current state, i.e. the "downloadProtected" boolean property.</em>
   * </p>
   * @param aFile the sv:file. May not be null
   * @param aDownloadProtected the new state of download protection for aFile
   * @throws ConstraintViolationException if the current user is not authorized to mutate aFile or if aFile is not a sv:file
   * @throws RepositoryException if something else goes wrong
   * @since Sitevision 2022.08.1
   */
  setDownloadProtected(aFile: Node, aDownloadProtected: boolean): void;
}

declare namespace FileUtil {}

declare var fileUtil: FileUtil;

export default fileUtil;
