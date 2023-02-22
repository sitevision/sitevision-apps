import type { QueryResult } from "../QueryResult";

import type { Node } from "../../Node";
import type { Value } from "../../Value";

/**
 * A <code>Query</code> object.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
  
    */
export type Query = {
  /**
   * Executes this query and returns a <code>{@link QueryResult}</code>
   * object.
   * <p>
   * If this <code>Query</code> contains a variable (see {@link
   * javax.jcr.query.qom.BindVariableValue BindVariableValue}) which has not
   * been bound to a value (see {@link Query#bindValue}) then this method
   * throws an <code>InvalidQueryException</code>.
   * @return a <code>QueryResult</code> object
   * @throws InvalidQueryException if the query contains an unbound variable.
   * @throws RepositoryException if another error occurs.
   */
  execute(): QueryResult;

  /**
   * Sets the maximum size of the result set to <code>limit</code>.
   * @param limit a <code>long</code>
   * @since JCR 2.0
   */
  setLimit(limit: number): void;

  /**
   * Sets the start offset of the result set to <code>offset</code>.
   * @param offset a <code>long</code>
   * @since JCR 2.0
   */
  setOffset(offset: number): void;

  /**
   * Returns the statement defined for this query.
   * <p>
   * If the language of this query is JCR-SQL2 or another string-based
   * language, this method will return the statement that was used to create
   * this query.
   * <p>
   * If the language of this query is JCR-JQOM, this method will return the
   * JCR-SQL2 equivalent of the JCR-JQOM object tree. This is the standard
   * serialization of JCR-JQOM and is also the string stored in the
   * <code>jcr:statement</code> property if the query is persisted. See {@link
   * #storeAsNode(String)}.
   * @return the query statement.
   */
  getStatement(): string;

  /**
   * Returns the language set for this query. This will be one of the query
   * language constants returned by {@link QueryManager#getSupportedQueryLanguages}.
   * @return the query language.
   */
  getLanguage(): string;

  /**
   * If this is a <code>Query</code> object that has been stored using {@link
   * Query#storeAsNode} (regardless of whether it has been <code>save</code>d
   * yet) or retrieved using {@link QueryManager#getQuery}), then this method
   * returns the path of the <code>nt:query</code> node that stores the
   * query.
   * @return path of the node representing this query.
   * @throws ItemNotFoundException if this query is not a stored query.
   * @throws RepositoryException if another error occurs.
   */
  getStoredQueryPath(): string;

  /**
   * Creates a node of type <code>nt:query</code> holding this query at
   * <code>absPath</code> and returns that node.
   * <p>
   * This is  a session-write method and therefore requires a
   * <code>Session.save()</code> to dispatch the change.
   * <p>
   * The <code>absPath</code> provided must not have an index on its final
   * element. If ordering is supported by the node type of the parent node
   * then the new node is appended to the end of the child node list.
   * <p>
   * An <code>ItemExistsException</code> will be thrown either immediately, on
   * dispatch or on persists, if an item at the specified path already exists
   * and same-name siblings are not allowed. Implementations may differ on
   * when this validation is performed.
   * <p>
   * A <code>PathNotFoundException</code> will be thrown either immediately,
   * on dispatch or on persists, if the specified path implies intermediary
   * nodes that do not exist. Implementations may differ on when this
   * validation is performed.
   * <p>
   * A <code>ConstraintViolationException</code>will be thrown either
   * immediately, on dispatch or on persists, if adding the node would violate
   * a node type or implementation-specific constraint or if an attempt is
   * made to add a node as the child of a property. Implementations may differ
   * on when this validation is performed.
   * <p>
   * A <code>VersionException</code> will be thrown either immediately, on
   * dispatch or on persists, if the node to which the new child is being
   * added is read-only due to a checked-in node. Implementations may differ
   * on when this validation is performed.
   * <p>
   * A <code>LockException</code> will be thrown either immediately, on
   * dispatch or on persists, if a lock prevents the addition of the node.
   * Implementations may differ on when this validation is performed.
   * @param absPath absolute path the query should be stored at
   * @return the newly created node.
   * @throws ItemExistsException if an item at the specified path already&#xA; exists, same-name siblings are not allowed and this implementation&#xA; performs this validation immediately.
   * @throws PathNotFoundException if the specified path implies intermediary&#xA; <code>Node</code>s that do not exist or the last element of&#xA; <code>relPath</code> has an index, and this implementation performs this&#xA; validation immediately.
   * @throws ConstraintViolationException if a node type or&#xA; implementation-specific constraint is violated or if an attempt is made&#xA; to add a node as the child of a property and this implementation performs&#xA; this validation immediately.
   * @throws VersionException if the node to which the new child is being&#xA; added is read-only due to a checked-in node and this implementation&#xA; performs this validation immediately.
   * @throws LockException if a lock prevents the addition of the node and&#xA; this implementation performs this validation immediately.
   * @throws UnsupportedRepositoryOperationException&#xA; if persistent queries are&#xA; not supported.
   * @throws RepositoryException if another error occurs or if the&#xA; <code>absPath</code> provided has an index on its final element.
   */
  storeAsNode(absPath: string): Node;

  /**
   * Binds the given <code>value</code> to the variable named
   * <code>varName</code>.
   * @param varName name of variable in query
   * @param value value to bind
   * @throws IllegalArgumentException if <code>varName</code> is not a valid&#xA; variable in this query.
   * @throws javax.jcr.RepositoryException if an error occurs.
   * @since JCR 2.0
   */
  bindValue(varName: string, value: Value): void;

  /**
   * Returns the names of the bind variables in this query. If this query does
   * not contains any bind variables then an empty array is returned.
   * @return the names of the bind variables in this query.
   * @throws RepositoryException if an error occurs.
   * @since JCR 2.0
   */
  getBindVariableNames(): string;

  /**
   * A string constant representing the XPath query language as defined in JCR
   * 1.0.
   * @deprecated As of JCR 2.0, this language is deprecated.
   */
  XPATH: string;

  /**
   * A string constant representing the SQL query language as defined in JCR
   * 1.0.
   * @deprecated As of JCR 2.0, this language is deprecated.
   */
  SQL: string;

  /**
   * A string constant representing the JCR-SQL2 query language.
   * @since JCR 2.0
   */
  JCR_SQL2: string;

  /**
   * A string constant representing the JCR-JQOM query language.
   * @since JCR 2.0
   */
  JCR_JQOM: string;
};
