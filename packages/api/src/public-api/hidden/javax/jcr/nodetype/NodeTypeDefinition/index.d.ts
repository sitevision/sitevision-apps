import PropertyDefinition from "../PropertyDefinition";
import NodeDefinition from "../NodeDefinition";

/**
 * The <code>NodeTypeDefinition</code> interface provides methods for
 * discovering the static definition of a node type. These are accessible both
 * before and after the node type is registered. Its subclass
 * <code>NodeType</code> adds methods that are relevant only when the node type
 * is "live"; that is, after it has been registered. Note that the separate
 * <code>NodeDefinition</code> interface only plays a significant role in
 * implementations that support node type registration. In those cases it serves
 * as the superclass of both <code>NodeType</code> and <code>NodeTypeTemplate</code>.
 * In implementations that do not support node type registration, only objects
 * implementing the subinterface <code>NodeType</code> will be encountered.
 * @since JCR 2.0
 */
interface NodeTypeDefinition {
  /**
   * Returns the name of the node type.
   * <p>
   * In implementations that support node type registration, if this
   * <code>NodeTypeDefinition</code> object is actually a newly-created empty
   * <code>NodeTypeTemplate</code>, then this method will return
   * <code>null</code>.
   * @return a <code>String</code>
   * @since JCR 2.0 moved here from JCR 1.0 <code>NodeType</code>.
   */
  getName(): string;

  /**
   * Returns the names of the supertypes actually declared in this node type.
   * <p>
   * In implementations that support node type registration, if this
   * <code>NodeTypeDefinition</code> object is actually a newly-created empty
   * <code>NodeTypeTemplate</code>, then this method will return an empty array.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return an array of <code>String</code>s
   * @since JCR 2.0
   */
  getDeclaredSupertypeNames(): string;

  /**
   * Returns <code>true</code> if this is an abstract node type; returns
   * <code>false</code> otherwise.
   * <p>
   * An abstract node type is one that cannot be assigned as the primary or
   * mixin type of a node but can be used in the definitions of other node
   * types as a superclass.
   * <p>
   * In implementations that support node type registration, if this
   * <code>NodeTypeDefinition</code> object is actually a newly-created empty
   * <code>NodeTypeTemplate</code>, then this method will return
   * <code>false</code>.
   * @return a <code>boolean</code>
   * @since JCR 2.0
   */
  isAbstract(): boolean;

  /**
   * Returns <code>true</code> if this is a mixin type; returns
   * <code>false</code> if it is primary.
   * <p>
   * In implementations that support node type registration, if this
   * <code>NodeTypeDefinition</code> object is actually a newly-created empty
   * <code>NodeTypeTemplate</code>, then this method will return
   * <code>false</code>.
   * @return a <code>boolean</code>
   * @since JCR 2.0 moved here from JCR 1.0 <code>NodeType</code>.
   */
  isMixin(): boolean;

  /**
   * Returns <code>true</code> if nodes of this type must support orderable
   * child nodes; returns <code>false</code> otherwise. If a node type returns
   * <code>true</code> on a call to this method, then all nodes of that node
   * type <i>must</i> support the method <code>Node.orderBefore</code>. If a
   * node type returns <code>false</code> on a call to this method, then nodes
   * of that node type <i>may</i> support <code>Node.orderBefore</code>. Only
   * the primary node type of a node controls that node's status in this
   * regard. This setting on a mixin node type will not have any effect on the
   * node.
   * <p>
   * In implementations that support node type registration, if this
   * <code>NodeTypeDefinition</code> object is actually a newly-created empty
   * <code>NodeTypeTemplate</code>, then this method will return
   * <code>false</code>.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return a <code>boolean</code>
   * @since JCR 2.0 moved here from JCR 1.0 <code>NodeType</code>.
   */
  hasOrderableChildNodes(): boolean;

  /**
   * Returns <code>true</code> if the node type is queryable, meaning that the
   * available-query-operators, full-text-searchable and query-orderable
   * attributes of its property definitions take effect. See {@link
   * javax.jcr.nodetype.PropertyDefinition#getAvailableQueryOperators()},
   * {@link javax.jcr.nodetype.PropertyDefinition#isFullTextSearchable()} and
   * {@link javax.jcr.nodetype.PropertyDefinition#isQueryOrderable()}.
   * <p>
   * If a node type is declared non-queryable then these attributes of its
   * property definitions have no effect.
   * <p>
   * In implementations that support node type registration, if this
   * <code>NodeTypeDefinition</code> object is actually a newly-created empty
   * <code>NodeTypeTemplate</code>, then this method will return
   * an implementation-determined defalt value.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return a <code>boolean</code>
   * @since JCR 2.0
   */
  isQueryable(): boolean;

  /**
   * Returns the name of the primary item (one of the child items of the nodes
   * of this node type). If this node has no primary item, then this method
   * returns <code>null</code>. This indicator is used by the method
   * <code>Node.getPrimaryItem()</code>.
   * <p>
   * In implementations that support node type registration, if this
   * <code>NodeTypeDefinition</code> object is actually a newly-created empty
   * <code>NodeTypeTemplate</code>, then this method will return
   * <code>null</code>.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return a <code>String</code>
   * @since JCR 2.0 moved here from JCR 1.0 <code>NodeType</code>.
   */
  getPrimaryItemName(): string;

  /**
   * Returns an array containing the property definitions actually declared in
   * this node type.
   * <p>
   * In implementations that support node type registration, if this
   * <code>NodeTypeDefinition</code> object is actually a newly-created empty
   * <code>NodeTypeTemplate</code>, then this method will return
   * <code>null</code>.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return an array of <code>PropertyDefinition</code>s
   * @since JCR 2.0 moved here from JCR 1.0 <code>NodeType</code>.
   */
  getDeclaredPropertyDefinitions(): PropertyDefinition;

  /**
   * Returns an array containing the child node definitions actually declared
   * in this node type.
   * <p>
   * In implementations that support node type registration, if this
   * <code>NodeTypeDefinition</code> object is actually a newly-created empty
   * <code>NodeTypeTemplate</code>, then this method will return
   * <code>null</code>.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return an array of <code>NodeDefinition</code>s
   * @since JCR 2.0 moved here from JCR 1.0 <code>NodeType</code>.
   */
  getDeclaredChildNodeDefinitions(): NodeDefinition;
}

export default NodeTypeDefinition;
