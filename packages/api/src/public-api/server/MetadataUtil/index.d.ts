import type { Node } from "../../types/javax/jcr/Node";
import type { Property } from "../../types/javax/jcr/Property";

import type { LinkValueBuilder } from "../LinkValueBuilder";
import type { RelatedValueBuilder } from "../RelatedValueBuilder";

/**
 * <p>
 *    Utility used to handle metadata. Due to the nature of the Sitevision metadata it is not suited to alter the values using JCR
 *    (i.e. due to inheritance). This utility adds the functionality needed to access and alter metadata.
 * </p>
 *
 * <p>
 *    Note that any metadata value is available as property on a JCR-node.
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getMetadataUtil()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Mikael Wikblom
 * @since Sitevision 2.6.1
 */
export interface MetadataUtil {
  /**
   * <p>
   *    Set a new value to a metadata <code>Property</code> on a <code>Node</code>. The node must
   *    be of such a type where it is possible to define a metadata value (e.g. page, article, template, file, image)
   *    or an <code>IllegalArgumentException</code> will be thrown.
   * </p>
   * <p>
   *    <strong>For comprehensive information about supported metadata</strong> see alternate method
   *    {@link #setMetadataPropertyValue(javax.jcr.Node, String, Object)}.
   * </p>
   *
   * <p>
   *    <strong>Important note!</strong> This method operates in the {@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION}.
   *    Hence, if you set a metadata value, <code>aNode</code> must be published (see {@link senselogic.sitevision.api.versioning.PublishingUtil})
   *    to have any effect in the {@link senselogic.sitevision.api.versioning.VersionUtil#ONLINE_VERSION}
   * </p>
   * @param aNode the <code>Node</code> where the metadata value should be altered. May not be <code>null</code>
   * @param aProperty the <code>Property</code> that should be altered. May not be <code>null</code>
   * @param aValue the new value. May not be <code>null</code>
   * @throws LockException is thrown if the specified is locked for editing (i.e. someone else is currently editing the same node)
   * @throws RepositoryException if anything goes wrong
   * @see #setMetadataPropertyValue(javax.jcr.Node, String, Object)
   */
  setMetadataPropertyValue(
    aNode: Node,
    aProperty: Property,
    aValue: unknown
  ): void;

  /**
   * <p>
   *    Set a new value to a metadata <code>Property</code> on a <code>Node</code>. The node must
   *    be of such a type where it is possible to define a metadata value (e.g. page, article, template, file, image)
   *    or an <code>IllegalArgumentException</code> will be thrown.
   * </p>
   *
   * <p>This method currently supports alternation of the following metadata types:</p>
   * <ul>
   *  <li>
   *     <strong>text</strong><br>
   *     The value will be handled as string (i.e. toString).
   *  </li>
   *  <li>
   *     <strong>single alternative</strong><br>
   *     The value must be a valid alternative, or the metadata definition
   *     must support 'other' values. If not, an <code>UnsupportedOperationException</code> is
   *     thrown. The value is handled as a string (i.e. toString).
   *  </li>
   *  <li>
   *     <strong>multiple alternative</strong><br>
   *     The value must be a valid alternative, or the metadata definition
   *     must support 'other' values. Any invalid value will be ignored. If no valid alternatives
   *     are provided an <code>UnsupportedOperationException</code> is thrown. The value is
   *     a comma separated string of the alternatives. It is also possible to provide a collection
   *     or an array of strings corresponding to the alternatives.
   *  </li>
   *  <li>
   *     <strong>date</strong><br>
   *     The value must be a <code>Date</code>, <code>Calendar</code>, <code>Long</code>,
   *     <code>Integer</code> or <code>Double</code>. If no valid value is provided an
   *     <code>UnsupportedOperationException</code> is thrown.
   *  </li>
   *  <li>
   *     <strong>user</strong><br>
   *     The value must be a <code>Node</code> (of type sv:user or sv:simpleUser) or an id <code>String</code> to a JCR-node
   *     corresponding to the designated user. If no valid value is provided an
   *     <code>UnsupportedOperationException</code> is thrown.
   *  </li>
   *  <li>
   *     <strong>directory object</strong><br>
   *     The value must be a <code>Node</code> (of type sv:user, sv:userGroup or sv:userContainer) or an id <code>String</code> to a JCR-node
   *     corresponding to the designated directory object. It is also possible to provide a collection, an
   *     array of such objects or a comma separated list of ids. If no valid value is provided an
   *     <code>UnsupportedOperationException</code> is thrown.
   *  </li>
   *  <li>
   *     <strong>link</strong><br>
   *     The value must be a {@link senselogic.sitevision.api.metadata.value.LinkValue} <em>(since Sitevision 3.6)</em>,
   *     a <code>Node</code> or an id <code>String</code> to a JCR-node that can be used as link (e.g. page, article, image, file).
   *     If no valid value is provided an <code>UnsupportedOperationException</code> is thrown.
   *  </li>
   *  <li>
   *     <strong>link to portlet</strong> <em>(since Sitevision 2.6.2)</em><br>
   *     The value will be handled as string (i.e. toString).
   *  </li>
   *  <li>
   *     <strong>number</strong> <em>(since Sitevision 2.6.2)</em><br>
   *     The value must be a <code>Number</code> (e.g. <code>Integer</code>, <code>Long</code>, <code>Double</code> etc.)
   *     or the toString() method of the value must be parseable as an int <em>(i.e. Integer.parseInt(aValue.toString())
   *     must not throw a NumberFormatException)</em>.
   *     If no valid value is provided an <code>UnsupportedOperationException</code> is thrown.
   *  </li>
   *  <li>
   *     <strong>related</strong> <em>(since Sitevision 3.6)</em><br>
   *     The value must be a {@link senselogic.sitevision.api.metadata.value.RelatedValue}.
   *     If no valid value is provided an <code>UnsupportedOperationException</code> is thrown.
   *  </li>
   *  <li>
   *     <strong>single tag</strong> <em>(since Sitevision 7.2)</em><br>
   *     The value must be a valid tag, or the metadata definition
   *     must allow custom tags. If not, an <code>UnsupportedOperationException</code> is
   *     thrown. The value must be of type <code>sv:tag</code> or a tag name as a <code>String</code>.
   *  </li>
   *  <li>
   *     <strong>multiple tags</strong> <em>(since Sitevision 7.2)</em><br>
   *     The value must be a valid tag, or the metadata definition
   *     must allow custom tags. Any invalid tags will be ignored. If no valid tags
   *     are provided an <code>UnsupportedOperationException</code> is thrown. The value is
   *     a comma separated string of the tag names. Note that tag names provided as a comma separated string must be prefixed with #.
   *     It is also possible to provide a collection or an array of <code>sv:tag</code> or strings of tag names.
   *  </li>
   * </ul>
   *
   * <p>
   *    <strong>Important note!</strong> This method operates in the {@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION}.
   *    Hence, if you set a metadata value, <code>aNode</code> must be published (see {@link senselogic.sitevision.api.versioning.PublishingUtil})
   *    to have any effect in the {@link senselogic.sitevision.api.versioning.VersionUtil#ONLINE_VERSION}
   * </p>
   *
   * <p>
   *    Throws <code>NullPointerException</code> or <code>IllegalArgumentException</code> if an illegal argument is provided.
   *    Throws <code>UnsupportedOperationException</code> if an invalid value or metadata property type is specified.
   *    Throws <code>ConstraintViolationException</code> <em>(i.e. a <code>RepositoryException</code>)</em> if current user
   *    doesn't have permission to write metadata on the node.
   * </p>
   * @param aNode the <code>Node</code> where the metadata value should be altered. May not be <code>null</code>
   * @param aPropertyName the name of the metadata property that should be altered. May not be <code>null</code>
   * @param aValue the new value. May not be <code>null</code>
   * @throws LockException is thrown if the specified node is locked for editing (i.e. someone else is currently editing the same node)
   * @throws RepositoryException if anything goes wrong
   * @see #setMetadataPropertyValue(javax.jcr.Node, javax.jcr.Property, Object)
   */
  setMetadataPropertyValue(
    aNode: Node,
    aPropertyName: string,
    aValue: unknown
  ): void;

  /**
   * <p>Removes a metadata <code>Property</code> value on a <code>Node</code>. The node must
   * be of such a type where it is possible to define a metadata value (e.g. page, article, template,
   * file, image) or an <code>IllegalArgumentException</code> will be thrown.</p>
   *
   * <p>
   *    For comprehensive information, see alternate method
   *    {@link #removeMetadataPropertyValue(javax.jcr.Node, String) removeMetadataPropertyValue(Node, String)}
   * </p>.
   *
   * <p><strong>Important note!</strong> This method operates in the {@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION}.
   * Hence, if you remove a metadata value, <code>aNode</code> must be published (see {@link senselogic.sitevision.api.versioning.PublishingUtil})
   * to have any effect in the {@link senselogic.sitevision.api.versioning.VersionUtil#ONLINE_VERSION}</p>
   * @param aNode the <code>Node</code> where the metadata value should be removed. May not be <code>null</code>
   * @param aProperty the <code>Property</code> that should be removed. May not be <code>null</code>
   * @throws RepositoryException if anything goes wrong
   * @see #removeMetadataPropertyValue(javax.jcr.Node, String)
   */
  removeMetadataPropertyValue(aNode: Node, aProperty: Property): void;

  /**
   * <p>Removes a metadata <code>Property</code> value on a <code>Node</code>. The node must
   * be of such a type where it is possible to define a metadata value (e.g. page, article, template,
   * file, image) or an <code>IllegalArgumentException</code> will be thrown.</p>
   *
   * <p>Due to the hierarchical nature of the metadata and the inheritance mechanism, a removal of a value
   * does not necessarily mean that the value is removed (it may then be inherited from a parent node)</p>
   *
   * <p>Note that the result of removal of a text metadata on the node where the metadata definition is defined
   * is not the <code>null</code> value but an empty <code>String</code>. This means that the JCR property will be available after
   * the removal and contain "" as value.</p>
   *
   * <p><strong>Important note!</strong> This method operates in the {@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION}.
   * Hence, if you remove a metadata value, <code>aNode</code> must be published (see {@link senselogic.sitevision.api.versioning.PublishingUtil})
   * to have any effect in the {@link senselogic.sitevision.api.versioning.VersionUtil#ONLINE_VERSION}</p>
   *
   * <p>Throws <code>NullPointerException</code> or <code>IllegalArgumentException</code> if illegal arguments
   * are used. Throws <code>ConstraintViolationException</code> <em>(i.e. a <code>RepositoryException</code>)</em>
   * if current user doesn't have permission to write metadata on the node.</p>
   * @param aNode the <code>Node</code> where the metadata value should be removed. May not be <code>null</code>
   * @param aPropertyName the name of the metadata property that should be removed. May not be <code>null</code>
   * @throws RepositoryException if anything goes wrong
   * @see #removeMetadataPropertyValue(javax.jcr.Node, javax.jcr.Property)
   */
  removeMetadataPropertyValue(aNode: Node, aPropertyName: string): void;

  /**
   * <p>Returns a <code>boolean</code> indicating that the metadata value on the <code>Node</code> is
   * inherited from a parent node.</p>
   *
   * <p>Note that this method returns <code>true</code> when the metadata definition is defined on the
   * <code>Node</code> and the value is <code>null</code></p>
   *
   * <p><strong>Important note!</strong> This method operates in the {@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION}</p>
   * @param aNode the <code>Node</code> that contains the metadata value. May not be <code>null</code>
   * @param aProperty the metadata <code>Property</code> that should be queried. May not be <code>null</code>
   * @return a <code>boolean</code> indicating the inheritance
   * @throws RepositoryException if anything goes wrong
   * @see #isMetadataValueInherited(javax.jcr.Node, javax.jcr.Property, int)
   */
  isMetadataValueInherited(aNode: Node, aProperty: Property): boolean;

  /**
   * <p>Returns a <code>boolean</code> indicating that the metadata value in a specified version on the <code>Node</code> is
   * inherited from a parent node.</p>
   *
   * <p>Note that this method returns <code>true</code> when the metadata definition is defined on the
   * <code>Node</code> and the value is <code>null</code></p>
   * @param aNode the <code>Node</code> that contains the metadata value. May not be <code>null</code>
   * @param aProperty the metadata <code>Property</code> that should be queried. May not be <code>null</code>
   * @param aVersion {@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION}&#xA; or {@link senselogic.sitevision.api.versioning.VersionUtil#ONLINE_VERSION}
   * @return a <code>boolean</code> indicating the inheritance
   * @throws RepositoryException if anything goes wrong
   * @since Sitevision 2.6.1_04
   */
  isMetadataValueInherited(
    aNode: Node,
    aProperty: Property,
    aVersion: number
  ): boolean;

  /**
   * <p>Returns a <code>boolean</code> indicating that the metadata value on the <code>Node</code> is
   * inherited from a parent node.</p>
   *
   * <p>Note that this method returns <code>true</code> when the metadata definition is defined on the
   * <code>Node</code> and the value is <code>null</code></p>
   *
   * <p><strong>Important note!</strong> This method operates in the {@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION}</p>
   * @param aNode the <code>Node</code> that contains the metadata value. May not be <code>null</code>
   * @param aPropertyName the name of the metadata property that should be queried. May not be <code>null</code>
   * @return a <code>boolean</code> indicating the inheritance
   * @throws RepositoryException if anything goes wrong
   * @see #isMetadataValueInherited(javax.jcr.Node, String, int)
   */
  isMetadataValueInherited(aNode: Node, aPropertyName: string): boolean;

  /**
   * <p>Returns a <code>boolean</code> indicating that the metadata value in a specified version on the <code>Node</code> is
   * inherited from a parent node.</p>
   *
   * <p>Note that this method returns <code>true</code> when the metadata definition is defined on the
   * <code>Node</code> and the value is <code>null</code></p>
   * @param aNode the <code>Node</code> that contains the metadata value. May not be <code>null</code>
   * @param aPropertyName the name of the metadata property that should be queried. May not be <code>null</code>
   * @param aVersion {@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION}&#xA; or {@link senselogic.sitevision.api.versioning.VersionUtil#ONLINE_VERSION}
   * @return a <code>boolean</code> indicating the inheritance
   * @throws RepositoryException if anything goes wrong
   * @since Sitevision 2.6.1_04
   */
  isMetadataValueInherited(
    aNode: Node,
    aPropertyName: string,
    aVersion: number
  ): boolean;

  /**
   * <p>
   *    Returns a <code>List</code> containing all related metadata values for a specified <code>Node</code>.
   * </p>
   *
   * <p>
   *    <strong>Important note!</strong> The returned List is not type safe and my contain either a <code>Node</code>
   *    and/or a <code>String</code> depending on its findings.
   * </p>
   * @param aNode the <code>Node</code> that contains the metadata value. May not be <code>null</code>
   * @param aPropertyName the name of the metadata property that should be queried. May not be <code>null</code>
   * @return a <code>List</code> containing all related metadata values, or an <code>empty List</code> if no could be found.
   * @throws NullPointerException if <code>aNode</code> or <code>aPropertyName</code> is <code>null</code>.
   * @throws IllegalArgumentException if <code>aNode</code> is of wrong type (a node that doesn't have metadata).
   * @throws RepositoryException if anything goes wrong while accessing <code>aNode</code> or extracting the result
   * @since Sitevision 2.6.2_03
   */
  getRelatedMetadataPropertyValues(aNode: Node, aPropertyName: string): unknown;

  /**
   * <p>Returns a <code>Node</code> for a link metadata on a specified <code>Node</code>.</p>
   *
   * <p><strong>Important note!</strong> The nodes returned by this method are temporary objects and are not part of the
   * Sitevision model. This means that methods like {@link javax.jcr.Node#getPath()}, {@link javax.jcr.Node#getParent()} and
   * {@link javax.jcr.Node#getName()} etc. will not return any information.</p>
   * @param aNode the <code>Node</code> that contains the link metadata value. May not be <code>null</code>
   * @param aPropertyName the name of the link metadata property that should be queried. May not be <code>null</code>
   * @return a temporary <code>Node</code> representing the link metadata value, or <code>null</code> if no link could be found.
   * @throws NullPointerException if <code>aNode</code> or <code>aPropertyName</code> is <code>null</code>.
   * @throws IllegalArgumentException if <code>aNode</code> is of wrong type (a node that doesn't have metadata).
   * @throws RepositoryException if anything goes wrong while accessing <code>aNode</code> or extracting the result
   * @since Sitevision 3.1
   */
  getLinkMetadataPropertyValue(aNode: Node, aPropertyName: string): Node;

  /**
   * <p>
   *    Returns a link value builder that can be used to build <code>LinkValue</code> instances.
   * </p>
   *
   * <p>
   *    <strong>Tip!</strong> A <code>LinkValue</code> can be used to set a <em>link metadata</em>
   *    via {@link #setMetadataPropertyValue(javax.jcr.Node, String, Object)}
   *    or {@link #setMetadataPropertyValue(javax.jcr.Node, javax.jcr.Property, Object)}.
   * </p>
   * @return a link value builder.
   * @since Sitevision 3.6
   */
  getLinkValueBuilder(): LinkValueBuilder;

  /**
   * <p>
   *    Returns a related value builder that can be used to build <code>RelatedValue</code> instances.
   * </p>
   *
   * <p>
   *    <strong>Tip!</strong> A <code>RelatedValue</code> can be used to set a <em>related metadata</em>
   *    via {@link #setMetadataPropertyValue(javax.jcr.Node, String, Object)}
   *    or {@link #setMetadataPropertyValue(javax.jcr.Node, javax.jcr.Property, Object)}.
   * </p>
   * @return a related value builder.
   * @since Sitevision 3.6
   */
  getRelatedValueBuilder(): RelatedValueBuilder;
}

declare namespace MetadataUtil {}

declare var metadataUtil: MetadataUtil;

export default metadataUtil;
