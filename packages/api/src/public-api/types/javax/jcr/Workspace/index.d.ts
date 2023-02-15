import type { Session } from "../../../../server/Session";

import type { Version } from "../version/Version";
import type { LockManager } from "../lock/LockManager";
import type { QueryManager } from "../query/QueryManager";
import type { NamespaceRegistry } from "../NamespaceRegistry";
import type { NodeTypeManager } from "../nodetype/NodeTypeManager";
import type { ObservationManager } from "../observation/ObservationManager";
import type { VersionManager } from "../version/VersionManager";

/**
 * A <code>Workspace</code> object represents a view onto a persitent workspace
 * within a repository. This view is defined by the authorization settings of
 * the <code>Session</code> object associated with the <code>Workspace</code>
 * object. Each <code>Workspace</code> object is associated one-to-one with a
 * <code>Session</code> object. The <code>Workspace</code> object can be
 * acquired by calling <code>{@link Session#getWorkspace()}</code> on the
 * associated <code>Session</code> object.
  
    */
export type Workspace = {
  /**
   * Returns the <code>Session</code> object through which this
   * <code>Workspace</code> object was acquired.
   * @return a <code>{@link Session}</code> object.
   */
  getSession(): Session;

  /**
   * Returns the name of the actual persistent workspace represented by this
   * <code>Workspace</code> object. This the name used in
   * <code>Repository.login</code>.
   * @return the name of this workspace.
   */
  getName(): string;

  /**
   * Returns the <code>QueryManager</code> object, through search methods are
   * accessed.
   * @return the <code>QueryManager</code> object.
   * @throws RepositoryException if an error occurs.
   */
  getQueryManager(): QueryManager;

  /**
   * Returns the <code>NamespaceRegistry</code> object, which is used to
   * access the mapping between prefixes and namespaces. In level 2
   * repositories the <code>NamespaceRegistry</code> can also be used to
   * change the namespace mappings.
   * @return the <code>NamespaceRegistry</code>.
   * @throws RepositoryException if an error occurs.
   */
  getNamespaceRegistry(): NamespaceRegistry;

  /**
   * Returns the <code>NodeTypeManager</code> through which node type
   * information can be queried. There is one node type registry per
   * repository, therefore the <code>NodeTypeManager</code> is not
   * workspace-specific; it provides introspection methods for the global,
   * repository-wide set of available node types. In repositories that support
   * it, the <code>NodeTypeManager</code> can also be used to register new
   * node types.
   * @return a <code>NodeTypeManager</code> object.
   * @throws RepositoryException if an error occurs.
   */
  getNodeTypeManager(): NodeTypeManager;

  /**
   * Returns a string array containing the names of all workspaces in this
   * repository that are accessible to this user, given the
   * <code>Credentials</code> that were used to get the <code>Session</code>
   * to which this <code>Workspace</code> is tied.
   * <p>
   * In order to access one of the listed workspaces, the user performs
   * another {@link Repository#login}, specifying the name of the desired
   * workspace, and receives a new <code>Session</code> object.
   * @return string array of names of accessible workspaces.
   * @throws RepositoryException if an error occurs
   */
  getAccessibleWorkspaceNames(): string;

  /**
   * A constant for the name of the workspace root node.
   * @since JCR 2.0
   */
  NAME_WORKSPACE_ROOT: string;

  /**
   * A constant for the absolute path of the workspace root node.
   * @since JCR 2.0
   */
  PATH_WORKSPACE_ROOT: string;

  /**
   * A constant for the name of the system node.
   * @since JCR 2.0
   */
  NAME_SYSTEM_NODE: string;

  /**
   * A constant for the absolute path of the system node.
   * @since JCR 2.0
   */
  PATH_SYSTEM_NODE: string;

  /**
   * A constant for the name of the node type definition storage node.
   * @since JCR 2.0
   */
  NAME_NODE_TYPES_NODE: string;

  /**
   * A constant for the absolute path of the node type definition storage
   * node.
   * @since JCR 2.0
   */
  PATH_NODE_TYPES_NODE: string;

  /**
   * A constant for the name of the version storage node.
   * @since JCR 2.0
   */
  NAME_VERSION_STORAGE_NODE: string;

  /**
   * A constant for the absolute path of the version storage node.
   * @since JCR 2.0
   */
  PATH_VERSION_STORAGE_NODE: string;

  /**
   * A constant for the name of the activities node.
   * @since JCR 2.0
   */
  NAME_ACTIVITIES_NODE: string;

  /**
   * A constant for the absolute path of the activities node.
   * @since JCR 2.0
   */
  PATH_ACTIVITIES_NODE: string;

  /**
   * A constant for the name of the configurations node.
   * @since JCR 2.0
   */
  NAME_CONFIGURATIONS_NODE: string;

  /**
   * A constant for the absolute path of the configurations node.
   * @since JCR 2.0
   */
  PATH_CONFIGURATIONS_NODE: string;

  /**
   * A constant for the name of the unfiled storage node.
   * @since JCR 2.0
   */
  NAME_UNFILED_NODE: string;

  /**
   * A constant for the absolute path of the unfiled storage node.
   * @since JCR 2.0
   */
  PATH_UNFILED_NODE: string;

  /**
   * A constant for the name of the <code>jcr:xmltext</code> node produced on
   * {@link #importXML}.
   * @since JCR 2.0
   */
  NAME_JCR_XMLTEXT: string;

  /**
   * A constant for the name of the <code>jcr:xmlcharacters</code> property
   * produced on {@link #importXML}.
   * @since JCR 2.0
   */
  NAME_JCR_XMLCHARACTERS: string;

  /**
   * A constant for the relative path from the node representing the imported
   * XML element of the <code>jcr:xmlcharacters</code> property produced on
   * {@link #importXML}.
   * @since JCR 2.0
   */
  RELPATH_JCR_XMLCHARACTERS: string;
};
