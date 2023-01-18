import type NodeType from "../NodeType";

import type NodeTypeIterator from "../NodeTypeIterator";
import type NodeTypeTemplate from "../NodeTypeTemplate";
import type NodeTypeDefinition from "../NodeTypeDefinition";
import type NodeDefinitionTemplate from "../NodeDefinitionTemplate";
import type PropertyDefinitionTemplate from "../PropertyDefinitionTemplate";

/**
 * Allows for the retrieval and (in implementations that support it) the
 * registration of node types. Accessed via {@link Workspace#getNodeTypeManager}.
  
    */
type NodeTypeManager = {
  /**
   * Returns the named node type.
   * @param nodeTypeName the name of an existing node type.
   * @return A <code>NodeType</code> object.
   * @throws NoSuchNodeTypeException if no node type by the given name exists.
   * @throws RepositoryException if another error occurs.
   */
  getNodeType(nodeTypeName: string): NodeType;

  /**
   * Returns <code>true</code> if a node type with the specified name is
   * registered. Returns <code>false</code> otherwise.
   * @param name a <code>String</code>.
   * @return a <code>boolean</code>
   * @throws RepositoryException if an error occurs.
   * @since JCR 2.0
   */
  hasNodeType(name: string): boolean;

  /**
   * Returns an iterator over all available node types (primary and mixin).
   * @return An <code>NodeTypeIterator</code>.
   * @throws RepositoryException if an error occurs.
   */
  getAllNodeTypes(): NodeTypeIterator;

  /**
   * Returns an iterator over all available primary node types.
   * @return An <code>NodeTypeIterator</code>.
   * @throws RepositoryException if an error occurs.
   */
  getPrimaryNodeTypes(): NodeTypeIterator;

  /**
   * Returns an iterator over all available mixin node types. If none are
   * available, an empty iterator is returned.
   * @return An <code>NodeTypeIterator</code>.
   * @throws RepositoryException if an error occurs.
   */
  getMixinNodeTypes(): NodeTypeIterator;
};

export = NodeTypeManager;
