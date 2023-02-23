import type { NodeTypeIterator } from "../NodeTypeIterator";
import type { String } from "../../../../java/lang/String";

import type { PropertyDefinition } from "../PropertyDefinition";
import type { NodeDefinition } from "../NodeDefinition";
import type { Value } from "../../Value";
import type { NodeTypeDefinition } from "../NodeTypeDefinition";

/**
 * A <code>NodeType</code> object represents a "live" node type that is
 *  registered in the repository.
  
    */
export type NodeType = NodeTypeDefinition & {
  /**
   * Returns <code>true</code> if the name of <i>this</i> node type or any of
   *  its direct or indirect supertypes is equal to <code>nodeTypeName</code>,
   *  otherwise returns <code>false</code>.
   * @param nodeTypeName the name of a node type.
   * @return a boolean
   */
  isNodeType(nodeTypeName: String | string): boolean;

  /**
   * A constant for the node type name <code>nt:base</code> (in expanded
   *  form). Constants for the names of the properties declared by
   *  <code>nt:base</code> are: <ul> <li>{@link javax.jcr.Property#JCR_PRIMARY_TYPE}</li>
   *  <li>{@link javax.jcr.Property#JCR_MIXIN_TYPES}</li> </ul>
   * @since JCR 2.0
   */
  NT_BASE: string;

  /**
   * A constant for the node type name <code>nt:hierarchyNode</code> (in
   *  expanded form).
   * @since JCR 2.0
   */
  NT_HIERARCHY_NODE: string;

  /**
   * A constant for the node type name <code>nt:folder</code> (in expanded
   *  form).
   * @since JCR 2.0
   */
  NT_FOLDER: string;

  /**
   * A constant for the node type name <code>nt:file</code> (in expanded
   *  form). A constant for the name of the child node declared by
   *  <code>nt:file</code> is: <ul> <li>{@link javax.jcr.Node#JCR_CONTENT}</li>
   *  </ul>
   * @since JCR 2.0
   */
  NT_FILE: string;

  /**
   * A constant for the node type name <code>nt:linkedFile</code> (in expanded
   *  form). A constant for the name of the property declared by
   *  <code>nt:linkedFile</code> is: <ul> <li>{@link javax.jcr.Property#JCR_CONTENT}</li>
   *  </ul>
   * @since JCR 2.0
   */
  NT_LINKED_FILE: string;

  /**
   * A constant for the node type name <code>nt:resource</code> (in expanded
   *  form). A constant for the name of the property declared by
   *  <code>nt:resource</code> is: <ul> <li>{@link javax.jcr.Property#JCR_DATA}</li>
   *  </ul>
   * @since JCR 2.0
   */
  NT_RESOURCE: string;

  /**
   * A constant for the node type name <code>nt:unstructured</code> (in
   *  expanded form).
   * @since JCR 2.0
   */
  NT_UNSTRUCTURED: string;

  /**
   * A constant for the node type name <code>nt:address</code> (in expanded
   *  form). Constants for the names of the properties declared by
   *  <code>nt:base</code> are: <ul> <li>{@link javax.jcr.Property#JCR_PROTOCOL}</li>
   *  <li>{@link javax.jcr.Property#JCR_HOST}</li> <li>{@link
   *  javax.jcr.Property#JCR_PORT}</li> <li>{@link javax.jcr.Property#JCR_REPOSITORY}</li>
   *  <li>{@link javax.jcr.Property#JCR_WORKSPACE}</li> <li>{@link
   *  javax.jcr.Property#JCR_PATH}</li> <li>{@link javax.jcr.Property#JCR_ID}</li>
   *  </ul>
   * @since JCR 2.0
   */
  NT_ADDRESS: string;

  /**
   * A constant for the node type name <code>mix:referenceable</code> (in
   *  expanded form). A constant for the name of the property declared by
   *  <code>mix:referenceable</code> is: <ul> <li>{@link
   *  javax.jcr.Property#JCR_UUID}</li> </ul>
   * @since JCR 2.0
   */
  MIX_REFERENCEABLE: string;

  /**
   * A constant for the node type name <code>mix:title</code> (in expanded
   *  form). Constants for the names of the properties declared by
   *  <code>mix:title</code> are: <ul> <li>{@link javax.jcr.Property#JCR_TITLE}</li>
   *  <li>{@link javax.jcr.Property#JCR_DESCRIPTION}</li> </ul>
   * @since JCR 2.0
   */
  MIX_TITLE: string;

  /**
   * A constant for the node type name <code>mix:created</code> (in expanded
   *  form). Constants for the names of the properties declared by
   *  <code>mix:created</code> are: <ul> <li>{@link javax.jcr.Property#JCR_CREATED}</li>
   *  <li>{@link javax.jcr.Property#JCR_CREATED_BY}</li> </ul>
   * @since JCR 2.0
   */
  MIX_CREATED: string;

  /**
   * A constant for the node type name <code>mix:lastModified</code> (in
   *  expanded form). Constants for the names of the properties declared by
   *  <code>mix:lastModified</code> are: <ul> <li>{@link
   *  javax.jcr.Property#JCR_LAST_MODIFIED}</li> <li>{@link
   *  javax.jcr.Property#JCR_LAST_MODIFIED_BY}</li> </ul>
   * @since JCR 2.0
   */
  MIX_LAST_MODIFIED: string;

  /**
   * A constant for the node type name <code>mix:language</code> (in expanded
   *  form). A constant for the name of the property declared by
   *  <code>mix:language</code> is: <ul> <li>{@link javax.jcr.Property#JCR_LANGUAGE}</li>
   *  </ul>
   * @since JCR 2.0
   */
  MIX_LANGUAGE: string;

  /**
   * A constant for the node type name <code>mix:mimeType</code> (in expanded
   *  form). Constants for the names of the properties declared by
   *  <code>mix:mimeType</code> are: <ul> <li>{@link javax.jcr.Property#JCR_MIMETYPE}</li>
   *  <li>{@link javax.jcr.Property#JCR_ENCODING}</li> </ul>
   * @since JCR 2.0
   */
  MIX_MIMETYPE: string;

  /**
   * A constant for the node type name <code>nt:nodeType</code> (in expanded
   *  form). Constants for the names of the child items declared by
   *  <code>nt:nodeType</code> are: <ul> <li>{@link javax.jcr.Property#JCR_NODE_TYPE_NAME}</li>
   *  <li>{@link javax.jcr.Property#JCR_SUPERTYPES}</li> <li>{@link
   *  javax.jcr.Property#JCR_IS_ABSTRACT}</li> <li>{@link
   *  javax.jcr.Property#JCR_IS_MIXIN}</li> <li>{@link javax.jcr.Property#JCR_HAS_ORDERABLE_CHILD_NODES}</li>
   *  <li>{@link javax.jcr.Property#JCR_PRIMARY_ITEM_NAME}</li> <li>{@link
   *  javax.jcr.Node#JCR_PROPERTY_DEFINITION}</li> <li>{@link
   *  javax.jcr.Node#JCR_CHILD_NODE_DEFINITION}</li> </ul>
   * @since JCR 2.0
   */
  NT_NODE_TYPE: string;

  /**
   * A constant for the node type name <code>nt:propertyDefinition</code> (in
   *  expanded form). Constants for the names of the properties declared by
   *  <code>nt:propertyDefinition</code> are: <ul> <li>{@link
   *  javax.jcr.Property#JCR_NAME}</li> <li>{@link javax.jcr.Property#JCR_AUTOCREATED}</li>
   *  <li>{@link javax.jcr.Property#JCR_MANDATORY}</li> <li>{@link
   *  javax.jcr.Property#JCR_PROTECTED}</li> <li>{@link
   *  javax.jcr.Property#JCR_ON_PARENT_VERSION}</li> <li>{@link
   *  javax.jcr.Property#JCR_REQUIRED_TYPE}</li> <li>{@link
   *  javax.jcr.Property#JCR_VALUE_CONSTRAINTS}</li> <li>{@link
   *  javax.jcr.Property#JCR_DEFAULT_VALUES}</li> <li>{@link
   *  javax.jcr.Property#JCR_MULTIPLE}</li> </ul>
   * @since JCR 2.0
   */
  NT_PROPERTY_DEFINITION: string;

  /**
   * A constant for the node type name <code>nt:childNodeDefinition</code> (in
   *  expanded form). Constants for the names of the properties declared by
   *  <code>nt:childNodeDefinition</code> are: <ul> <li>{@link
   *  javax.jcr.Property#JCR_NAME}</li> <li>{@link javax.jcr.Property#JCR_AUTOCREATED}</li>
   *  <li>{@link javax.jcr.Property#JCR_MANDATORY}</li> <li>{@link
   *  javax.jcr.Property#JCR_PROTECTED}</li> <li>{@link
   *  javax.jcr.Property#JCR_ON_PARENT_VERSION}</li> <li>{@link
   *  javax.jcr.Property#JCR_REQUIRED_PRIMARY_TYPES}</li> <li>{@link
   *  javax.jcr.Property#JCR_DEFAULT_PRIMARY_TYPE}</li> <li>{@link
   *  javax.jcr.Property#JCR_SAME_NAME_SIBLINGS}</li> </ul>
   * @since JCR 2.0
   */
  NT_CHILD_NODE_DEFINITION: string;

  /**
   * A constant for the node type name <code>mix:shareable</code> (in expanded
   *  form).
   * @since JCR 2.0
   */
  MIX_SHAREABLE: string;

  /**
   * A constant for the node type name <code>mix:lockable</code> (in expanded
   *  form). Constants for the names of the properties declared by
   *  <code>mix:lockable</code> are: <ul> <li>{@link javax.jcr.Property#JCR_LOCK_OWNER}</li>
   *  <li>{@link javax.jcr.Property#JCR_LOCK_IS_DEEP}</li> </ul>
   * @since JCR 2.0
   */
  MIX_LOCKABLE: string;

  /**
   * A constant for the node type name <code>mix:lifecycle</code> (in expanded
   *  form). Constants for the names of the properties declared by
   *  <code>mix:lifecycle</code> are: <ul> <li>{@link javax.jcr.Property#JCR_LIFECYCLE_POLICY}</li>
   *  <li>{@link javax.jcr.Property#JCR_CURRENT_LIFECYCLE_STATE}</li> </ul>
   * @since JCR 2.0
   */
  MIX_LIFECYCLE: string;

  /**
   * A constant for the node type name <code>mix:simpleVersionable</code> (in
   *  expanded form). A constant for the name of the property declared by
   *  <code>mix:simpleVersionable</code> is: <ul> <li>{@link
   *  javax.jcr.Property#JCR_IS_CHECKED_OUT}</li> </ul>
   * @since JCR 2.0
   */
  MIX_SIMPLE_VERSIONABLE: string;

  /**
   * A constant for the node type name <code>mix:versionable</code> (in
   *  expanded form). Constants for the names of the properties declared by
   *  <code>mix:versionable</code> are: <ul> <li>{@link
   *  javax.jcr.Property#JCR_VERSION_HISTORY}</li> <li>{@link
   *  javax.jcr.Property#JCR_BASE_VERSION}</li> <li>{@link
   *  javax.jcr.Property#JCR_PREDECESSORS}</li> <li>{@link
   *  javax.jcr.Property#JCR_MERGE_FAILED}</li> <li>{@link
   *  javax.jcr.Property#JCR_ACTIVITY}</li> <li>{@link javax.jcr.Property#JCR_CONFIGURATION}</li>
   *  </ul>
   * @since JCR 2.0
   */
  MIX_VERSIONABLE: string;

  /**
   * A constant for the node type name <code>nt:versionHistory</code> (in
   *  expanded form). Constants for the names of the child items declared by
   *  <code>nt:versionHistory</code> are: <ul> <li>{@link
   *  javax.jcr.Property#JCR_VERSIONABLE_UUID}</li> <li>{@link
   *  javax.jcr.Property#JCR_COPIED_FROM}</li> <li>{@link
   *  javax.jcr.Node#JCR_ROOT_VERSION}</li> <li>{@link javax.jcr.Node#JCR_VERSION_LABELS}</li>
   *  </ul>
   * @since JCR 2.0
   */
  NT_VERSION_HISTORY: string;

  /**
   * A constant for the node type name <code>nt:version</code> (in expanded
   *  form). Constants for the names of the child items declared by
   *  <code>nt:version</code> are: <ul> <li>{@link javax.jcr.Property#JCR_CREATED}</li>
   *  <li>{@link javax.jcr.Property#JCR_PREDECESSORS}</li> <li>{@link
   *  javax.jcr.Property#JCR_SUCCESSORS}</li> <li>{@link
   *  javax.jcr.Property#JCR_ACTIVITY}</li> <li>{@link javax.jcr.Node#JCR_FROZEN_NODE}</li>
   *  </ul>
   * @since JCR 2.0
   */
  NT_VERSION: string;

  /**
   * A constant for the node type name <code>nt:frozenNode</code> (in expanded
   *  form). Constants for the names of the properties declared by
   *  <code>nt:frozenNode</code> are: <ul> <li>{@link javax.jcr.Property#JCR_FROZEN_PRIMARY_TYPE}</li>
   *  <li>{@link javax.jcr.Property#JCR_FROZEN_MIXIN_TYPES}</li> <li>{@link
   *  javax.jcr.Property#JCR_FROZEN_UUID}</li> </ul>
   * @since JCR 2.0
   */
  NT_FROZEN_NODE: string;

  /**
   * A constant for the node type name <code>nt:versionedChild</code> (in
   *  expanded form). A constant for the name of the property declared by
   *  <code>nt:versionedChild</code> is: <ul> <li>{@link
   *  javax.jcr.Property#JCR_CHILD_VERSION_HISTORY}</li> </ul>
   * @since JCR 2.0
   */
  NT_VERSIONED_CHILD: string;

  /**
   * A constant for the node type name <code>nt:activity</code> (in expanded
   *  form). A constant for the name of the property declared by
   *  <code>nt:activity</code> is: <ul> <li>{@link javax.jcr.Property#JCR_TITLE}</li>
   *  </ul>
   * @since JCR 2.0
   */
  NT_ACTIVITY: string;

  /**
   * A constant for the node type name <code>nt:configuration</code> (in
   *  expanded form). A constant for the name of the property declared by
   *  <code>nt:configuration</code> are: <ul> <li>{@link
   *  javax.jcr.Property#JCR_ROOT}</li> </ul>
   * @since JCR 2.0
   */
  NT_CONFIGURATION: string;

  /**
   * A constant for the node type name <code>nt:query</code> (in expanded
   *  form). Constants for the names of the properties declared by
   *  <code>nt:query</code> are: <ul> <li>{@link javax.jcr.Property#JCR_STATEMENT}</li>
   *  <li>{@link javax.jcr.Property#JCR_LANGUAGE}</li> </ul>
   * @since JCR 2.0
   */
  NT_QUERY: string;
};
