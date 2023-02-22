import type { Version } from "../Version";
import type { VersionIterator } from "../VersionIterator";
import type { NodeIterator } from "../../NodeIterator";

import type { Node } from "../../Node";

/**
 * A <code>VersionHistory</code> object wraps an <code>nt:versionHistory</code>
 * node. It provides convenient access to version history information.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
  
    */
export type VersionHistory = Node & {
  /**
   * Returns the identifier of the versionable node for which this is the
   * version history.
   * @return the identifier of the versionable node for which this is the&#xA; version history.
   * @throws RepositoryException if an error occurs.
   * @deprecated As of JCR 2.0, {@link #getVersionableIdentifier} should be&#xA; used instead.
   */
  getVersionableUUID(): string;

  /**
   * Returns the identifier of the versionable node for which this is the
   * version history.
   * @return the identifier of the versionable node for which this is the&#xA; version history.
   * @throws RepositoryException if an error occurs.
   * @since JCR 2.0
   */
  getVersionableIdentifier(): string;

  /**
   * Returns the root version of this version history.
   * @return a <code>Version</code> object.
   * @throws RepositoryException if an error occurs.
   */
  getRootVersion(): Version;

  /**
   * This method returns an iterator over all the versions in the <i>line of
   * descent</i> from the root version to that base version within this
   * history <i>that is bound to the workspace through which this
   * <code>VersionHistory</code> was accessed</i>.
   * <p>
   * Within a version history <code>H</code>, <code>B</code> is the base
   * version bound to workspace <code>W</code> if and only if there exists a
   * versionable node <code>N</code> in <code>W</code> whose version history
   * is <code>H</code> and <code>B</code> is the base version of
   * <code>N</code>.
   * <p>
   * The <i>line of descent</i> from version <code>V1</code> to
   * <code>V2</code>, where <code>V2</code> is a successor of <code>V1</code>,
   * is the ordered list of versions starting with <code>V1</code> and
   * proceeding through each direct successor to <code>V2</code>.
   * <p>
   * The versions are returned in order of creation date, from oldest to
   * newest.
   * <p>
   * Note that in a simple versioning repository the behavior of this method
   * is equivalent to returning all versions in the version history in order
   * from oldest to newest.
   * @return a <code>VersionIterator</code> object.
   * @throws RepositoryException if an error occurs.
   */
  getAllLinearVersions(): VersionIterator;

  /**
   * Returns an iterator over all the versions within this version history. If
   * the version graph of this history is linear then the versions are
   * returned in order of creation date, from oldest to newest. Otherwise the
   * order of the returned versions is implementation-dependent.
   * @return a <code>VersionIterator</code> object.
   * @throws RepositoryException if an error occurs.
   */
  getAllVersions(): VersionIterator;

  /**
   * This method returns all the frozen nodes of all the versions in this
   * version history in the same order as {@link #getAllLinearVersions}.
   * @return a <code>NodeIterator</code> object.
   * @throws RepositoryException if an error occurs.
   * @since JCR 2.0
   */
  getAllLinearFrozenNodes(): NodeIterator;

  /**
   * Returns an iterator over all the frozen nodes of all the versions of this
   * version history. Under simple versioning the order of the returned nodes
   * will be the order of their creation. Under full versioning the order is
   * implementation-dependent.
   * @return a <code>NodeIterator</code> object.
   * @throws RepositoryException if an error occurs.
   * @since JCR 2.0
   */
  getAllFrozenNodes(): NodeIterator;

  /**
   * Retrieves a particular version from this version history by version
   * name.
   * @param versionName a version name
   * @return a <code>Version</code> object.
   * @throws VersionException if the specified version is not in this version&#xA; history.
   * @throws RepositoryException if an error occurs.
   */
  getVersion(versionName: string): Version;

  /**
   * Retrieves a particular version from this version history by version
   * label.
   * @param label a version label
   * @return a <code>Version</code> object.
   * @throws VersionException if the specified <code>label</code> is not in&#xA; this version history.
   * @throws RepositoryException if an error occurs.
   */
  getVersionByLabel(label: string): Version;

  /**
   * Adds the specified label to the specified version.
   * <p>
   * The label must be a JCR name in either qualified or expanded form and
   * therefore must conform to the syntax restriction that apply to such
   * names. In particular a colon (":") should not be used unless it is
   * intended as a prefix delimiter in a qualified name.
   * <p>
   * Adding a version label to a version corresponds to adding a reference
   * property with a name specified by the <code>label</code> parameter to the
   * <code>jcr:versionLabels</code> sub node of the <code>nt:versionHistory</code>
   * node. The reference property points to the <code>nt:version</code> node
   * that represents the specified version.
   * <p>
   * This is a workspace-write method and therefore the change is made
   * immediately.
   * <p>
   * Within a particular version history, a given label may appear a maximum
   * of once. If the specified label is already assigned to a version in this
   * history and <code>moveLabel</code> is <code>true</code> then the label is
   * removed from its current location and added to the version with the
   * specified <code>versionName</code>. If <code>moveLabel</code> is
   * <code>false</code>, then an attempt to add a label that already exists
   * will fail.
   * @param versionName the name of the version to which the label is to be&#xA; added.
   * @param label the label to be added, A JCR name in either expanded or&#xA; qualified form.
   * @param moveLabel if <code>true</code>, then if <code>label</code> is&#xA; already assigned to a version in this version history, it is moved to the&#xA; new version specified; if <code>false</code>, then attempting to assign&#xA; an already used label will throw a <code>LabelExistsVersionException</code>.
   * @throws LabelExistsVersionException if <code>moveLabel</code> is&#xA; <code>false</code>, and an attempt is made to add a label that already&#xA; exists in this version history.
   * @throws VersionException if the specified version does not exist in this&#xA; version history or if the specified version is the root version&#xA; (<code>jcr:rootVersion</code>).
   * @throws RepositoryException if another error occurs.
   */
  addVersionLabel(versionName: string, label: string, moveLabel: boolean): void;

  /**
   * Removes the specified label from among the labels of this version
   * history. The label must be a JCR name in either qualified or expanded
   * form. This corresponds to removing a property from the
   * <code>jcr:versionLabels</code> child node of the <code>nt:versionHistory</code>
   * node that represents this version history.
   * <p>
   * This is workspace-write method and therefore the change is made
   * immediately.
   * @param label a version label. A JCR name in either expanded or qualified&#xA; form.
   * @throws VersionException if the name label does not exist in this version&#xA; history.
   * @throws RepositoryException if another error occurs.
   */
  removeVersionLabel(label: string): void;

  /**
   * Returns <code>true</code> if any version in the history has the given
   * <code>label</code>. The label must be a JCR name in either qualified or
   * expanded form.
   * @param label a version label. A JCR name in either expanded or qualified&#xA; form.
   * @return a <code>boolean</code>.
   * @throws RepositoryException if an error occurs.
   */
  hasVersionLabel(label: string): boolean;

  /**
   * Returns true if the given version has the given <code>label</code>. The
   * label must be a JCR name in either qualified or expanded form.
   * @param version a Version object
   * @param label a version label. A JCR name in either expanded or qualified&#xA; form.
   * @return a <code>boolean</code>.
   * @throws VersionException if the specified <code>version</code> is not of&#xA; this version history.
   * @throws RepositoryException if another error occurs.
   */
  hasVersionLabel(version: Version, label: string): boolean;

  /**
   * Returns all version labels of the history or an empty array if there are
   * none.
   * @return a <code>String</code> array containing all the labels of the&#xA; version history.
   * @throws RepositoryException if an error occurs.
   */
  getVersionLabels(): string;

  /**
   * Returns all version labels of the given <code>version</code> - empty
   * array if none. Throws a <code>VersionException</code> if the specified
   * <code>version</code> is not in this version history.
   * @param version a Version object
   * @return a <code>String</code> array containing all the labels of the&#xA; given version
   * @throws VersionException if the specified <code>version</code> is not in&#xA; this version history.
   * @throws RepositoryException if another error occurs.
   */
  getVersionLabels(version: Version): string;

  /**
   * Removes the named version from this version history and automatically
   * repairs the version graph. If the version to be removed is
   * <code>V</code>, <code>V</code>'s predecessor set is <code>P</code> and
   * <code>V</code>'s successor set is <code>S</code>, then the version graph
   * is repaired s follows: <ul> <li>For each member of <code>P</code>, remove
   * the reference to <code>V</code> from its successor list and add
   * references to each member of <code>S</code>. <li>For each member of
   * <code>S</code>, remove the reference to <code>V</code> from its
   * predecessor list and add references to each member of <code>P</code>.
   * </ul> Note that this change is made immediately; there is no need to call
   * <code>save</code>. In fact, since the the version storage is read-only
   * with respect to normal repository methods, <code>save</code> does not
   * even function in this context.
   * @param versionName the name of a version in this version history.
   * @throws ReferentialIntegrityException if the specified version is&#xA; currently the target of a <code>REFERENCE</code> property elsewhere in&#xA; the repository (not necessarily in this workspace) and the current&#xA; <code>Session</code> has read access to that <code>REFERENCE</code>&#xA; property.
   * @throws AccessDeniedException if the current Session does not have&#xA; permission to remove the specified version or if the specified version is&#xA; currently the target of a <code>REFERENCE</code> property elsewhere in&#xA; the repository (not just in this workspace) and the current&#xA; <code>Session</code> does not have read access to that&#xA; <code>REFERENCE</code> property.
   * @throws UnsupportedRepositoryOperationException&#xA; if this operation is not&#xA; supported by the implementation.
   * @throws VersionException if the named version is not in this version&#xA; history.
   * @throws RepositoryException if another error occurs.
   */
  removeVersion(versionName: string): void;
};
