import type { Value } from "../../Value";

import type { ItemDefinition } from "../ItemDefinition";

/**
 * A property definition. Used in node type definitions.
  
    */
export type PropertyDefinition = {
  /**
   * Gets the required type of the property. One of: <ul>
   * <li><code>PropertyType.STRING</code></li> <li><code>PropertyType.DATE</code></li>
   * <li><code>PropertyType.BINARY</code></li> <li><code>PropertyType.DOUBLE</code></li>
   * <li><code>PropertyType.DECIMAL</code></li> <li><code>PropertyType.LONG</code></li>
   * <li><code>PropertyType.BOOLEAN</code></li> <li><code>PropertyType.NAME</code></li>
   * <li><code>PropertyType.PATH</code></li> <li><code>PropertyType.URI</code></li>
   * <li><code>PropertyType.REFERENCE</code></li> <li><code>PropertyType.WEAKREFERENCE</code></li>
   * <li><code>PropertyType.UNDEFINED</code></li> </ul>
   * <code>PropertyType.UNDEFINED</code> is returned if this property may be
   * of any type.
   * <p>
   * In implementations that support node type registration, if this
   * <code>PropertyDefinition</code> object is actually a newly-created empty
   * <code>PropertyDefinitionTemplate</code>, then this method will return
   * <code>PropertyType.STRING</code>.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return an <code>int</code> constant member of <code>PropertyType</code>.
   */
  getRequiredType(): number;

  /**
   * Gets the array of constraint strings. Each string in the array specifies
   * a constraint on the value of the property. The constraints are OR-ed
   * together, meaning that in order to be valid, the value must meet at least
   * one of the constraints. For example, a constraint array of
   * <code>["constraint1", "constraint2", "constraint3"]</code> has the
   * interpretation: "the value of this property must meet at least one of
   * <code>constraint1</code>, <code>constraint2 </code>or
   * <code>constraint3</code>".
   * <p>
   * Reporting of value constraints is optional. An implementation may return
   * <code>null</code>, indicating that value constraint information is
   * unavailable (though a constraint may still exist).
   * <p>
   * Returning an empty array, on the other hand, indicates that value
   * constraint information is available and that no constraints are placed on
   * this value.
   * <p>
   * In the case of multi-value properties, the constraint string array
   * returned applies to all the values of the property.
   * <p>
   * The constraint strings themselves having differing formats and
   * interpretations depending on the type of the property in question. The
   * following describes the value constraint syntax for each property type:
   * <ul> <li> <code>STRING</code> and <code>URI</code>: The constraint string
   * is a regular expression pattern. For example the regular expression
   * "<code>.*</code>" means "any string, including the empty string". Whereas
   * a simple literal string (without any RE-specific meta-characters) like
   * "<code>banana</code>" matches only the string "<code>banana</code>".
   * </li> <li> <code>PATH</code>: The constraint string is a <i>JCR path</i>
   * with an optional "<code>*</code>" character after the last
   * "<code>/</code>" character. For example, possible constraint strings for
   * a property of type <code>PATH</code> include: <ol> <li>
   * "<code>/myapp:products/myapp:televisions</code>" </li> <li>
   * "<code>/myapp:products/myapp:televisions/</code>" </li> <li>
   * "<code>/myapp:products/*</code>" </li> <li> "<code>myapp:products/myapp:televisions</code>"
   * </li> <li> "<code>../myapp:televisions</code>" </li> <li>
   * "<code>../myapp:televisions/*</code>" </li> </ol> The following
   * principles apply: <ul> <li> The "*" means "matches descendants" not
   * "matches any subsequent path". For example, <code>/a/*</code> does not
   * match <code>/a/../c</code>. The constraint must match the normalized
   * path. </li> <li> Relative path constraint only match relative path values
   * and absolute path constraints only match absolute path values. </li> <li>
   * A trailing "<code>/</code>" has no effect (hence, <code>1</code> and
   * <code>2</code>, above, are equivalent). </li> <li> The trailing
   * "<code>*</code>" character means that the value of the <code>PATH</code>
   * property is restricted to the indicated subgraph (in other words any
   * additional relative path can replace the "<code>*</code>"). For example,
   * 3, above would allow <code>/myapp:products/myapp:radios</code>,
   * <code>/myapp:products/myapp:microwaves/X900</code>, and so forth. </li>
   * <li> A constraint without a "<code>*</code>" means that the
   * <code>PATH</code> property is restricted to that precise path. For
   * example, <code>1</code>, above, would allow only the value
   * <code>/myapp:products/myapp:televisions</code>. </li> <li> The constraint
   * can indicate either a relative path or an absolute path depending on
   * whether it includes a leading "<code>/</code>" character. <code>1</code>
   * and <code>4</code>, above for example, are distinct. </li> <li> The
   * string returned must reflect the namespace mapping in the current
   * <code>Session</code> (i.e., the current state of the namespace registry
   * overlaid with any session-specific mappings). Constraint strings for
   * <code>PATH</code> properties should be stored in fully-qualified form
   * (using the actual URI instead of the prefix) and then be converted to
   * prefix form according to the current mapping upon the
   * <code>PropertyDefinition.getValueConstraints</code> call. </li> </ul>
   * </li> <li> <code>NAME</code>: The constraint string is a <i>JCR name</i>
   * in prefix form. For example "<code>myapp:products</code>". No wildcards
   * or other pattern matching are supported. As with <code>PATH</code>
   * properties, the string returned must reflect the namespace mapping in the
   * current <code>Session</code>. Constraint strings for <code>NAME</code>
   * properties should be stored in fully-qualified form (using the actual URI
   * instead of the prefix) and then be converted to prefix form according to
   * the current mapping. </li> <li> <code>REFERENCE</code> and
   * <code>WEAKREFERENCE</code>: The constraint string is a <i>JCR name</i> in
   * prefix form. This name is interpreted as a node type name and the
   * <code>REFERENCE</code> or <code>WEAKREFERENCE</code> property is
   * restricted to referring only to nodes that have at least the indicated
   * node type. For example, a constraint of "<code>mytype:document</code>"
   * would indicate that the property in question can only refer to nodes that
   * have at least the node type <code>mytype:document</code> (assuming this
   * was the only constraint returned in the array, recall that the array of
   * constraints are to be ORed together). No wildcards or other pattern
   * matching are supported. As with <code>PATH</code> properties, the string
   * returned must reflect the namespace mapping in the current
   * <code>Session</code>. Constraint strings for <code>REFERENCE</code> and
   * <code>WEAKREFERENCE</code> properties should be stored by the
   * implementation in fully-qualified form (using the actual URI instead of
   * the prefix) and then be converted to prefix form according to the current
   * mapping. </li> <li> <code>BOOLEAN</code>: A constraint string can be
   * either "true" or "false". In most cases <code>getValueConstraints</code>
   * will return an empty array since placing a constraint on a
   * <code>BOOLEAN</code> value does not usually make sense. </li> </ul> The
   * remaining types all have value constraints in the form of inclusive or
   * exclusive ranges: i.e., "<code>[min, max]</code>", "<code>(min,
   * max)</code>", "<code>(min, max]</code>" or "<code>[min, max)</code>".
   * Where "<code>[</code>" and "<code>]</code>" indicate "inclusive", while
   * "<code>(</code>" and "<code>)</code>" indicate "exclusive". A missing
   * <code>min</code> or <code>max</code> value indicates no bound in that
   * direction. For example [,5] means no minimum but a maximum of 5
   * (inclusive) while [,] means simply that any value will suffice, The
   * meaning of the <code>min</code> and <code>max</code> values themselves
   * differ between types as follows: <ul> <li> <code>BINARY</code>:
   * <code>min</code> and <code>max</code> specify the allowed size range of
   * the binary value in bytes. </li> <li> <code>DATE</code>: <code>min</code>
   * and <code>max</code> are dates specifying the allowed date range. The
   * date strings must be in the ISO8601-compliant format:
   * <code>YYYY-MM-DDThh:mm:ss.sssTZD</code>. </li> <li> <code>LONG</code>,
   * <code>DOUBLE</code>: min and max are numbers. </li> </ul> In
   * implementations that support node type registration, when specifying that
   * a <code>DATE</code>, <code>LONG </code>or <code>DOUBLE </code> is
   * constrained to be equal to some disjunctive set of constants, a string
   * consisting of just the constant itself, "c" may be used as a shorthand
   * for the standard constraint notation of "[c, c]", where c is the
   * constant. For example, to indicate that particular LONG property is
   * constrained to be one of the values 2, 4, or 8, the constraint string
   * array {"2", "4", "8"} can be used instead of the standard notation,
   * {"[2,2]", "[4,4]", "[8,8]"}. However, even if this shorthand is used on
   * registration, the value returned by <code>PropertyDefinition.getValueConstraints()</code>
   * will always use the standard notation.
   * <p>
   * Because constraints are returned as an array of disjunctive constraints,
   * in many cases the elements of the array can serve directly as a "choice
   * list". This may, for example, be used by an application to display
   * options to the end user indicating the set of permitted values.
   * <p>
   * In implementations that support node type registration, if this
   * <code>PropertyDefinition</code> object is actually a newly-created empty
   * <code>PropertyDefinitionTemplate</code>, then this method will return
   * <code>null</code>.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return a <code>String</code> array.
   */
  getValueConstraints(): string;

  /**
   * Gets the default value(s) of the property. These are the values that the
   * property defined by this PropertyDefinition will be assigned if it is
   * automatically created (that is, if {@link #isAutoCreated()} returns
   * <code>true</code>).
   * <p>
   * This method returns an array of <code>Value</code> objects. If the
   * property is multi-valued, then this array represents the full set of
   * values that the property will be assigned upon being auto-created. Note
   * that this could be the empty array. If the property is single-valued,
   * then the array returned will be of size 1.
   * <p>
   * If <code>null</code> is returned, then the property has no fixed default
   * value. This does not exclude the possibility that the property still
   * assumes some value automatically, but that value may be parametrized (for
   * example, "the current date") and hence not expressible as a single fixed
   * value. In particular, this <i>must</i> be the case if
   * <code>isAutoCreated</code> returns <code>true</code> and this method
   * returns <code>null</code>.
   * <p>
   * Note that to indicate a <code>null</code> value for this attribute in a
   * node type definition that is stored in content, the
   * <code>jcr:defaultValues</code> property is simply removed (since
   * <code>null</code> values for properties are not allowed.
   * <p>
   * In implementations that support node type registration, if this
   * <code>PropertyDefinition</code> object is actually a newly-created empty
   * <code>PropertyDefinitionTemplate</code>, then this method will return
   * <code>null</code>.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return an array of <code>Value</code> objects.
   */
  getDefaultValues(): Value;

  /**
   * Reports whether this property can have multiple values. Note that the
   * <code>isMultiple</code> flag is special in that a given node type may
   * have two property definitions that are identical in every respect except
   * for the their <code>isMultiple</code> status. For example, a node type
   * can specify two string properties both called <code>X</code>, one of
   * which is multi-valued and the other not. An example of such a node type
   * is <code>nt:unstructured</code>.
   * <p>
   * In implementations that support node type registration, if this
   * <code>PropertyDefinition</code> object is actually a newly-created empty
   * <code>PropertyDefinitionTemplate</code>, then this method will return
   * <code>false</code>.
   * @return a <code>boolean</code>
   */
  isMultiple(): boolean;

  /**
   * Returns the set of query comparison operators supported by this
   * property.
   * <p>
   * This attribute only takes effect if the node type holding the property
   * definition has a queryable setting of <code>true</code>.
   * <p>
   * JCR defines the following comparison operators: <ul> <li>{@link
   * javax.jcr.query.qom.QueryObjectModelConstants#JCR_OPERATOR_EQUAL_TO},</li>
   * <li>{@link javax.jcr.query.qom.QueryObjectModelConstants#JCR_OPERATOR_NOT_EQUAL_TO},</li>
   * <li>{@link javax.jcr.query.qom.QueryObjectModelConstants#JCR_OPERATOR_LESS_THAN},</li>
   * <li>{@link javax.jcr.query.qom.QueryObjectModelConstants#JCR_OPERATOR_LESS_THAN_OR_EQUAL_TO},</li>
   * <li>{@link javax.jcr.query.qom.QueryObjectModelConstants#JCR_OPERATOR_GREATER_THAN},</li>
   * <li>{@link javax.jcr.query.qom.QueryObjectModelConstants#JCR_OPERATOR_GREATER_THAN_OR_EQUAL_TO},
   * or</li> <li>{@link javax.jcr.query.qom.QueryObjectModelConstants#JCR_OPERATOR_LIKE}</li>
   * </ul> An implementation may define additional comparison operators.
   * <p>
   * Note that the set of operators that can appear in this attribute may be
   * limited by implementation-specific constraints that differ across
   * property types. For example, some implementations may permit property
   * definitions to provide <code>JCR_OPERATOR_EQUAL_TO</code> and
   * <code>JCR_OPERATOR_NOT_EQUAL_TO</code> as available operators for
   * <code>BINARY</code> properties while others may not.
   * <p>
   * However, in all cases where a JCR-defined operator <i>is</i> potentially
   * available for a given property type, its behavior must conform to the
   * comparison semantics defined in the specification document (see 3.6.5
   * <i>Comparison of Values</i>).
   * <p>
   * In implementations that support node type registration, if this
   * <code>NodeTypeDefinition</code> object is actually a newly-created empty
   * <code>NodeTypeTemplate</code>, then this method will return an impementation-
   * determined default set of operator constants.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return a <code>String</code> array.
   * @since JCR 2.0
   */
  getAvailableQueryOperators(): string;

  /**
   * Returns <code>true</code> if this property is full-text searchable,
   * meaning that its value is accessible through the full-text search
   * function within a query.
   * <p>
   * This attribute only takes effect if the node type holding the property
   * definition has a queryable setting of <code>true</code>.
   * <p>
   * In implementations that support node type registration, if this
   * <code>NodeTypeDefinition</code> object is actually a newly-created empty
   * <code>NodeTypeTemplate</code>, then this method will return an impementation-
   * determined default value.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return a <code>boolean</code>
   * @since JCR 2.0
   */
  isFullTextSearchable(): boolean;

  /**
   * Returns <code>true</code> if this property is query-orderable, meaning
   * that query results may be ordered by this property using the order-by
   * clause of a query.
   * <p>
   * This attribute only takes effect if the node type holding the property
   * definition has a queryable setting of <code>true</code>.
   * <p>
   * In implementations that support node type registration, if this
   * <code>NodeTypeDefinition</code> object is actually a newly-created empty
   * <code>NodeTypeTemplate</code>, then this method will return an impementation-
   * determined default value.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return a <code>boolean</code>
   * @since JCR 2.0
   */
  isQueryOrderable(): boolean;
};
