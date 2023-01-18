import type Query from "../Query";
import type QueryObjectModelFactory from "../qom/QueryObjectModelFactory";
import type Node from "../../Node";

/**
 * This interface encapsulates methods for the management of search queries.
 * Provides methods for the creation and retrieval of search queries.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
  
    */
type QueryManager = {
  /**
   * Creates a new query by specifying the query <code>statement</code> itself
   * and the <code>language</code> in which the query is stated. The
   * <code>language</code> must be a string from among those returned by
   * QueryManager.getSupportedQueryLanguages().
   * @param statement a <code>String</code>
   * @param language a <code>String</code>
   * @return a <code>Query</code> object
   * @throws InvalidQueryException if the query statement is syntactically invalid or the specified language is not supported.
   * @throws RepositoryException if another error occurs.
   */
  createQuery(statement: string, language: string): Query;

  /**
   * Returns a <code>QueryObjectModelFactory</code> with which a JCR-JQOM
   * query can be built programmatically.
   * @return a <code>QueryObjectModelFactory</code> object
   * @since JCR 2.0
   */
  getQOMFactory(): QueryObjectModelFactory;

  /**
   * Retrieves an existing persistent query.
   * <p>
   * Persistent queries are created by first using {@link
   * QueryManager#createQuery} to create a <code>Query</code> object and then
   * calling <code>Query.save</code> to persist the query to a location in the
   * workspace.
   * @param node a persisted query (that is, a node of type <code>nt:query</code>).
   * @return a <code>Query</code> object.
   * @throws InvalidQueryException If <code>node</code> is not a valid persisted query (that is, a node of type <code>nt:query</code>).
   * @throws RepositoryException if another error occurs
   */
  getQuery(node: Node): Query;

  /**
   * Returns an array of strings representing all query languages supported by
   * this repository. This set must include at least the strings represented
   * by the constants {@link Query#JCR_SQL2} and {@link Query#JCR_JQOM}}. An
   * implementation may also support other languages, including the deprecated
   * languages of JCR 1.0: {@link Query#XPATH} and {@link Query#SQL}.
   * @return A string array.
   * @throws RepositoryException if an error occurs.
   */
  getSupportedQueryLanguages(): string;
};

export = QueryManager;
