import type { NodeType } from "../NodeType";

import type { NodeTypeIterator } from "../NodeTypeIterator";
import type { NodeTypeTemplate } from "../NodeTypeTemplate";
import type { NodeTypeDefinition } from "../NodeTypeDefinition";
import type { NodeDefinitionTemplate } from "../NodeDefinitionTemplate";
import type { PropertyDefinitionTemplate } from "../PropertyDefinitionTemplate";

/**
 * Allows for the retrieval and (in implementations that support it) the
 * registration of node types. Accessed via {@link Workspace#getNodeTypeManager}.
  
    */
export type NodeTypeManager = {
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

  /**
   * Returns an empty <code>NodeTypeTemplate</code> which can then be used to
   * define a node type and passed to <code>NodeTypeManager.registerNodeType</code>.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return A <code>NodeTypeTemplate</code>.
   * @throws UnsupportedRepositoryOperationException if this implementation does not support node type registration.
   * @throws RepositoryException if another error occurs.
   * @since JCR 2.0
   */
  createNodeTypeTemplate(): NodeTypeTemplate;

  /**
   * Returns a <code>NodeTypeTemplate</code> holding the specified node type
   * definition. This template can then be altered and passed to
   * <code>NodeTypeManager.registerNodeType</code>.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param ntd a <code>NodeTypeDefinition</code>.
   * @return A <code>NodeTypeTemplate</code>.
   * @throws UnsupportedRepositoryOperationException if this implementation does not support node type registration.
   * @throws RepositoryException if another error occurs.
   * @since JCR 2.0
   */
  createNodeTypeTemplate(ntd: NodeTypeDefinition): NodeTypeTemplate;

  /**
   * Returns an empty <code>NodeDefinitionTemplate</code> which can then be
   * used to create a child node definition and attached to a
   * <code>NodeTypeTemplate</code>.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return A <code>NodeDefinitionTemplate</code>.
   * @throws UnsupportedRepositoryOperationException if this implementation does not support node type registration.
   * @throws RepositoryException if another error occurs.
   * @since JCR 2.0
   */
  createNodeDefinitionTemplate(): NodeDefinitionTemplate;

  /**
   * Returns an empty <code>PropertyDefinitionTemplate</code> which can then
   * be used to create a property definition and attached to a
   * <code>NodeTypeTemplate</code>.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return A <code>PropertyDefinitionTemplate</code>.
   * @throws UnsupportedRepositoryOperationException if this implementation does not support node type registration.
   * @throws RepositoryException if another error occurs.
   * @since JCR 2.0
   */
  createPropertyDefinitionTemplate(): PropertyDefinitionTemplate;

  /**
   * Registers a new node type or updates an existing node type using the
   * specified definition and returns the resulting <code>NodeType</code>
   * object.
   * <p>
   * Typically, the object passed to this method will be a
   * <code>NodeTypeTemplate</code> (a subclass of <code>NodeTypeDefinition</code>)
   * acquired from <code>NodeTypeManager.createNodeTypeTemplate</code> and
   * then filled-in with definition information.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param ntd an <code>NodeTypeDefinition</code>.
   * @param allowUpdate a boolean
   * @return the registered node type
   * @throws InvalidNodeTypeDefinitionException if the <code>NodeTypeDefinition</code> is invalid.
   * @throws NodeTypeExistsException if <code>allowUpdate</code> is <code>false</code> and the <code>NodeTypeDefinition</code> specifies a node type name that is already registered.
   * @throws UnsupportedRepositoryOperationException if this implementation does not support node type registration.
   * @throws RepositoryException if another error occurs.
   * @since JCR 2.0
   */
  registerNodeType(ntd: NodeTypeDefinition, allowUpdate: boolean): NodeType;

  /**
   * Registers or updates the specified array of <code>NodeTypeDefinition</code>
   * objects. This method is used to register or update a set of node types
   * with mutual dependencies. Returns an iterator over the resulting
   * <code>NodeType</code> objects.
   * <p>
   * The effect of the method is "all or nothing"; if an error occurs, no node
   * types are registered or updated.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param ntds a collection of <code>NodeTypeDefinition</code>s
   * @param allowUpdate a boolean
   * @return the registered node types.
   * @throws InvalidNodeTypeDefinitionException if a <code>NodeTypeDefinition</code> within the <code>Collection</code> is invalid or if the <code>Collection</code> contains an object of a type other than <code>NodeTypeDefinition</code>.
   * @throws NodeTypeExistsException if <code>allowUpdate</code> is <code>false</code> and a <code>NodeTypeDefinition</code> within the <code>Collection</code> specifies a node type name that is already registered.
   * @throws UnsupportedRepositoryOperationException if this implementation does not support node type registration.
   * @throws RepositoryException if another error occurs.
   * @since JCR 2.0
   */
  registerNodeTypes(
    ntds: NodeTypeDefinition,
    allowUpdate: boolean
  ): NodeTypeIterator;

  /**
   * Unregisters the specified node type.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param name a <code>String</code>.
   * @throws UnsupportedRepositoryOperationException if this implementation does not support node type registration.
   * @throws NoSuchNodeTypeException if no registered node type exists with the specified name.
   * @throws RepositoryException if another error occurs.
   * @since JCR 2.0
   */
  unregisterNodeType(name: string): void;

  /**
   * Unregisters the specified set of node types. Used to unregister a set of
   * node types with mutual dependencies.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param names a <code>String</code> array
   * @throws UnsupportedRepositoryOperationException if this implementation does not support node type registration.
   * @throws NoSuchNodeTypeException if one of the names listed is not a registered node type.
   * @throws RepositoryException if another error occurs.
   * @since JCR 2.0
   */
  unregisterNodeTypes(names: string): void;
};
