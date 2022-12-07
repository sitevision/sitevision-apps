import Node from "../../../../../javax/jcr/Node";

/**
 * Deprecated interface that will be removed in a future Sitevision release.
 * @author Magnus Lövgren
 * @since Sitevision 3.0
 * @deprecated use {@link senselogic.sitevision.api.user.SystemUserUtil} and {@link senselogic.sitevision.api.user.UserIdentityUtil} instead
 */
interface UserUtil {
  /**
   * Checks if current user is anonymous (not authenticated).
   * @return <code>true</code> if current user is Anonymous (i.e. not authenticated), <code>false</code> otherwise
   * @deprecated use {@link senselogic.sitevision.api.user.SystemUserUtil#isAnonymous()} instead
   */
  isAnonymous(): boolean;

  /**
   * Checks if a user node is anonymous (not authenticated).
   * @param aUserNode a user node
   * @return <code>true</code> if <code>aUserNode</code> is anonymous (i.e. not authenticated), <code>false</code> otherwise (i.e. no match or <code>aUserNode</code> is <code>null</code>)
   * @deprecated use {@link senselogic.sitevision.api.user.SystemUserUtil#isAnonymous(javax.jcr.Node)} instead
   */
  isAnonymous(aUserNode: Node): boolean;

  /**
   * Checks if current user is the Sitevision System user.
   * @return <code>true</code> if current user is the Sitevision System user, <code>false</code> otherwise
   * @deprecated use {@link senselogic.sitevision.api.user.SystemUserUtil#isSystem()} instead
   */
  isSystem(): boolean;

  /**
   * Checks if a user node is the Sitevision System user.
   * @param aUserNode a user node
   * @return <code>true</code> if <code>aUserNode</code> is the Sitevision System user, <code>false</code> otherwise (i.e. no match or <code>aUserNode</code> is <code>null</code>)
   * @deprecated use {@link senselogic.sitevision.api.user.SystemUserUtil#isSystem(javax.jcr.Node)} instead
   */
  isSystem(aUserNode: Node): boolean;

  /**
   * Checks if current user is the Sitevision Indexer.
   * @return <code>true</code> if current user is the Sitevision Indexer, <code>false</code> otherwise
   * @deprecated use {@link senselogic.sitevision.api.user.SystemUserUtil#isIndexer()} instead
   */
  isIndexer(): boolean;

  /**
   * Checks if a user node is the Sitevision Indexer.
   * @param aUserNode a user node
   * @return <code>true</code> if <code>aUserNode</code> is the Sitevision Indexer, <code>false</code> otherwise (i.e. no match or <code>aUserNode</code> is <code>null</code>)
   * @deprecated use {@link senselogic.sitevision.api.user.SystemUserUtil#isIndexer(javax.jcr.Node)} instead
   */
  isIndexer(aUserNode: Node): boolean;

  /**
   * Checks if current user is the Sitevision Extractor.
   * @return <code>true</code> if current user is the Sitevision Extractor, <code>false</code> otherwise
   * @deprecated use {@link senselogic.sitevision.api.user.SystemUserUtil#isExtractor()} instead
   */
  isExtractor(): boolean;

  /**
   * Checks if a user node is the Sitevision Extractor.
   * @param aUserNode a user node
   * @return <code>true</code> if <code>aUserNode</code> is the Sitevision Extractor, <code>false</code> otherwise (i.e. no match or <code>aUserNode</code> is <code>null</code>)
   * @deprecated use {@link senselogic.sitevision.api.user.SystemUserUtil#isExtractor(javax.jcr.Node)} instead
   */
  isExtractor(aUserNode: Node): boolean;

  /**
   * Gets the corresponding <code>sv:userIdentity</code> Node for a specified <code>sv:user</code> Node.
   * @param aUserNode a user node
   * @return the corresponding sv:userIdentity Node for <code>aUserNode</code>, or <code>null</code> if <code>aUserNode</code> is <code>null</code> or has no corresponding user identity for current site.
   * @since Sitevision 3.5.1
   * @deprecated use {@link senselogic.sitevision.api.user.UserIdentityUtil#getUserIdentity(javax.jcr.Node)} instead
   */
  getUserIdentity(aUserNode: Node): Node;
}

export default UserUtil;
