import type { Node } from "../../types/javax/jcr/Node";
import type { String } from "../../types/java/lang/String";
import type { List } from "../../types/java/util/List";

/**
 * Utility interface for getting metadata definitions.
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.Utils#getMetadataDefinitionUtil()}.
 *     See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 *
 *  <p>
 *     <strong>Velocity example:</strong> This code gets all properties and nodes for a metadata definition named 'aMetadataName'.
 *  </p>
 *
 *  <pre><code>
 *    #set ($page = ...)
 *
 *    #set ($definitionUtil = $sitevisionUtils.metadataDefinitionUtil)
 *    #set($definition = $definitionUtil.getDefinition($page, 'aMetadataName'))
 *
 *    #set($nodes = $definition.getNodes())
 *    #foreach($node in $nodes)
 *       $node
 *    #end
 *
 *    #set($properties = $definition.getProperties())
 *    #foreach($property in $properties)
 *       $property
 *    #end
 *  </code></pre>
 * @author Daniel Pyykkö
 * @since Sitevision 2.6.2_04
 */
export interface MetadataDefinitionUtil {
  /**
   * Gets a metadata definition as a {@code Node} from a {@code Node}.
   * @param aNode&#xA; the {@code Node} that has a metadata definition
   * @param aDefinitionName&#xA; the name of the metadata definition
   * @return the value for {@code aDefinitionName} as a {@code Node}. If no definition exists or it is not a {@code Node}, {@code null} is returned.
   */
  getDefinition(aNode: Node, aDefinitionName: String | string): Node;

  /**
   * Gets a metadata definition as a {@code Node} from a {@code Node} with a fallback value if the definition does not exist.
   * @param aNode&#xA; the {@code Node} that has a metadata definition
   * @param aDefinitionName&#xA; the name of the metadata definition
   * @param aDefaultValue&#xA; fallback value if no definition exists
   * @return the value for {@code aDefinitionName} as a {@code Node}. If no definition exists or it is not a {@code Node},&#xA; {@code aDefaultValue} is returned.
   */
  getDefinition(
    aNode: Node,
    aDefinitionName: String | string,
    aDefaultValue: Node
  ): Node;

  /**
   * Gets all metadata definitions available for the current user on a {@code Node}
   * @param aNode&#xA; the {@code Node} that has a metadata definition
   * @return a list of definitions on {@code aNode}, or empty list
   * @since Sitevision 4.2.3
   */
  getDefinitions(aNode: Node): List;

  /**
   * Add an alternative to a definition
   * @param aNode&#xA; the {@code Node} where the metadata definition is located
   * @param aDefinitionName&#xA; the name of the metadata definition. May not be <code>null</code> or whitespace only
   * @param aAlternativeName&#xA; the name of the alternative (case in-sensitive). May not be <code>null</code> or whitespace only
   * @throws RepositoryException if {@code aNode} is invalid,&#xA; if {@code aNode} does not have a metadata definition named {@code aDefinitionName},&#xA; if it already contains an alternative named {@code aAlternativeName},&#xA; or if something else goes wrong
   * @since Sitevision 4.2.3
   */
  addAlternative(
    aNode: Node,
    aDefinitionName: String | string,
    aAlternativeName: String | string
  ): void;

  /**
   * Rename an alternative for a definition
   * @param aNode&#xA; the {@code Node} where the metadata definition is located
   * @param aDefinitionName&#xA; the name of the metadata definition. May not be <code>null</code> or whitespace only
   * @param aAlternativeName&#xA; the name of the alternative (case in-sensitive). May not be <code>null</code> or whitespace only
   * @param aNewAlternativeName&#xA; the new name of the alternative. May not be <code>null</code> or whitespace only
   * @throws RepositoryException if {@code aNode} is invalid,&#xA; if {@code aNode} does not have a metadata definition named {@code aDefinitionName},&#xA; if it does not contain an alternative named {@code aAlternativeName},&#xA; if it already contains an alternative named {@code aNewAlternativeName},&#xA; or if something else goes wrong
   * @since Sitevision 8.1
   */
  renameAlternative(
    aNode: Node,
    aDefinitionName: String | string,
    aAlternativeName: String | string,
    aNewAlternativeName: String | string
  ): void;

  /**
   * Remove an alternative from a definition
   * @param aNode&#xA; the {@code Node} where the metadata definition is located
   * @param aDefinitionName&#xA; the name of the metadata definition. May not be <code>null</code> or whitespace only
   * @param aAlternativeName&#xA; the name of the alternative (case in-sensitive). May not be <code>null</code> or whitespace only
   * @throws RepositoryException if {@code aNode} is invalid,&#xA; if {@code aNode} does not have a metadata definition named {@code aDefinitionName},&#xA; if it does not contain an alternative named {@code aAlternativeName},&#xA; or if something else goes wrong
   * @since Sitevision 8.1
   */
  removeAlternative(
    aNode: Node,
    aDefinitionName: String | string,
    aAlternativeName: String | string
  ): void;
}

declare namespace MetadataDefinitionUtil {}

declare var metadataDefinitionUtil: MetadataDefinitionUtil;

export default metadataDefinitionUtil;
