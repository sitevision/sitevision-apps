import type { String } from "../../types/java/lang/String";
import type { File } from "../../types/java/io/File";
import type { Node } from "../../types/javax/jcr/Node";
import type { Builder } from "../../types/senselogic/sitevision/api/base/Builder";

/**
 * Builds volatile and short-lived nodes with primary node type <em>sv:temporaryFile</em>.
 *
 *  <p>
 *     The sole purpose of a <em>sv:temporaryFile</em> is to represent a <code>java.io.File</code> as <code>javax.jcr.Node</code>
 *     in order to support file-related operations in the API (e.g. {@link senselogic.sitevision.api.webresource.FileUtil}).
 *  </p>
 *
 *  <p>
 *     <strong>Important note!</strong> Temporary file nodes are very volatile and short-lived.
 *     They have no parent, nor any children.
 *     A temporary file node can never be looked up by its identifier and it should never be cached.
 *     Temporary file nodes should only be used for <em>temporary purposes</em>, typically during a single execution/render phase.
 *  </p>
 *
 *  <p>
 *     See {@link Builder} for a comprehensive example of how to work with builders.
 *  </p>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.node.NodeFactoryUtil#getTemporaryFileNodeBuilder()}.
 *     See {@link senselogic.sitevision.api.node.NodeFactoryUtil} for how to obtain an instance of the <code>NodeFactoryUtil</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 4.5.4
 */
export interface TemporaryFileNodeBuilder extends Builder {
  /**
   * Sets the name of the file.
   *
   *  <p>
   *     <em>The file name will also be used as the name of the Node that is built.</em>
   *  </p>
   * @param aFileName the file name
   * @return this builder
   */
  setFileName(aFileName: String | string): TemporaryFileNodeBuilder;

  /**
   * Sets the file.
   * @param aFile the file
   * @return this builder
   */
  setFile(aFile: File): TemporaryFileNodeBuilder;

  /**
   * Creates a volatile and short-lived temporary file node using current state.
   * @return a volatile and short-lived temporary file node
   * @throws IllegalStateException if no file is set or no file name is set
   */
  build(): Node;
}

declare namespace TemporaryFileNodeBuilder {}

declare var temporaryFileNodeBuilder: TemporaryFileNodeBuilder;

export default temporaryFileNodeBuilder;
