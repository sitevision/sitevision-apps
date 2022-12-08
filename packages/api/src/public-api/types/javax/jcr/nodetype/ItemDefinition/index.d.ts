import type { NodeType } from "../NodeType";

/**
 * Superclass of {@link NodeDefinition} and {@link PropertyDefinition}.
  
    */
export type ItemDefinition = {
  /**
   * Gets the node type that contains the declaration of <i>this</i>
   * <code>ItemDefinition</code>.
   * <p>
   * In implementations that support node type registration an
   * <code>ItemDefinition</code> object may be acquired (in the form of a
   * <code>NodeDefinitionTemplate</code> or <code>PropertyDefinitionTemplate</code>)
   * that is not attached to a live <code>NodeType</code>. In such cases this
   * method returns <code>null</code>.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return a <code>NodeType</code> object.
   */
  getDeclaringNodeType(): NodeType;

  /**
   * Gets the name of the child item. If <code>"*"</code>, this
   * <code>ItemDefinition</code> defines a residual set of child items. That
   * is, it defines the characteristics of all those child items with names
   * apart from the names explicitly used in other child item definitions.
   * <p>
   * In implementations that support node type registration, if this
   * <code>ItemDefinition</code> object is actually a newly-created empty
   * <code>PropertyDefinitionTemplate</code> or <code>NodeDefinitionTemplate</code>,
   * then this method will return <code>null</code>.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return a <code>String</code> denoting the name or <code>"*"</code>.
   */
  getName(): string;

  /**
   * Reports whether the item is to be automatically created when its parent
   * node is created. If <code>true</code>, then this <code>ItemDefinition</code>
   * will necessarily not be a residual set definition but will specify an
   * actual item name (in other words getName() will not return "*").
   * <p>
   * An autocreated non-protected item must be created immediately when its
   * parent node is created in the transient session space. Creation of
   * autocreated non-protected items is never delayed until
   * <code>save</code>.
   * </p>
   * <p>
   * An autocreated protected item should be created immediately when its
   * parent node is created in the transient session space. Creation of
   * autocreated protected items should not be delayed until
   * <code>save</code>, though doing so does not violate JCR compliance.
   * <p>
   * In implementations that support node type registration, if this
   * <code>ItemDefinition</code> object is actually a newly-created empty
   * <code>PropertyDefinitionTemplate</code> or <code>NodeDefinitionTemplate</code>,
   * then this method will return <code>false</code>.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return a <code>boolean</code>.
   */
  isAutoCreated(): boolean;

  /**
   * Reports whether the item is mandatory. A mandatory item is one that, if
   * its parent node exists, must also exist.
   * <p>
   * This means that a mandatory single-value property must have a value
   * (since there is no such thing a <code>null</code> value). In the case of
   * multi-value properties this means that the property must exist, though it
   * can have zero or more values.
   * <p>
   * An attempt to save a node that has a mandatory child item without first
   * creating that child item  will throw a <code>ConstraintViolationException</code>
   * on <code>save</code>.
   * <p>
   * In implementations that support node type registration, if this
   * <code>ItemDefinition</code> object is actually a newly-created empty
   * <code>PropertyDefinitionTemplate</code> or <code>NodeDefinitionTemplate</code>,
   * then this method will return <code>false</code>.
   * <p>
   * An item definition cannot be both residual and mandatory.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return a <code>boolean</code>
   */
  isMandatory(): boolean;

  /**
   * Gets the <code>OnParentVersion </code> status of the child item. This
   * governs what occurs (in implementations that support versioning) when the
   * parent node of this item is checked-in. One of: <ul>
   * <li><code>OnParentVersionAction.COPY</code></li> <li><code>OnParentVersionAction.VERSION</code></li>
   * <li><code>OnParentVersionAction.IGNORE</code></li>
   * <li><code>OnParentVersionAction.INITIALIZE</code></li>
   * <li><code>OnParentVersionAction.COMPUTE</code></li>
   * <li><code>OnParentVersionAction.ABORT</code></li> </ul>
   * <p>
   * In implementations that support node type registration, if this
   * <code>ItemDefinition</code> object is actually a newly-created empty
   * <code>PropertyDefinitionTemplate</code> or <code>NodeDefinitionTemplate</code>,
   * then this method will return <code>OnParentVersionAction.COPY</code>.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return a <code>int</code> constant member of {@link javax.jcr.version.OnParentVersionAction}.
   */
  getOnParentVersion(): number;

  /**
   * Reports whether the child item is protected. In level 2 implementations,
   * a protected item is one that cannot be removed (except by removing its
   * parent) or modified through the the standard write methods of this API
   * (that is, <code>Item.remove</code>, <code>Node.addNode</code>,
   * <code>Node.setProperty</code> and <code>Property.setValue</code>).
   * <p>
   * A protected node may be removed or modified (in a level 2
   * implementation), however, through some mechanism not defined by this
   * specification or as a side-effect of operations other than the standard
   * write methods of the API.
   * <p>
   * In implementations that support node type registration, if this
   * <code>ItemDefinition</code> object is actually a newly-created empty
   * <code>PropertyDefinitionTemplate</code> or <code>NodeDefinitionTemplate</code>,
   * then this method will return <code>false</code>.
   * @return a <code>boolean</code>.
   */
  isProtected(): boolean;
};
