import AccessControlPolicy from "../AccessControlPolicy";

/**
 * An <code>NamedAccessControlPolicy</code> is an opaque access control policy
 * that is described by a JCR name and optionally a description.
 * <code>NamedAccessControlPolicy</code> are immutable and can therefore be
 * directly applied to a node without additional configuration step.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since Sitevision 3.5
 * @since JCR 2.0
 */
interface NamedAccessControlPolicy {
  /**
   * Returns the name of the access control policy, which is JCR name and
   * should be unique among the choices applicable to any particular node.
   * @return the name of the access control policy. A JCR name.
   * @throws RepositoryException if an error occurs.
   */
  getName(): string;
}

export default NamedAccessControlPolicy;
