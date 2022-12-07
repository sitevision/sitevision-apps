import Node from "../../hidden/javax/jcr/Node";
import Builder from "../../hidden/senselogic/sitevision/api/base/Builder";

/**
 * Sets the name of the temporary node that can be built by this builder.
 * @param aNodeName the name of the node
 * @return this builder
 */
export function setName(aNodeName: string): TemporaryNodeBuilder;

/**
 * Adds a String property to this builder.
 *
 * <p>
 *    <em>Note!</em> Any previously added property with name <code>aName</code> will be overwritten with the value of this add operation.
 * </p>
 * @param aName the name of the property
 * @param aString the property value
 * @return this builder
 */
export function addStringProperty(
  aName: string,
  aString: string
): TemporaryNodeBuilder;

/**
 * Adds a Date property to this builder.
 *
 * <p>
 *    <em>Note!</em> Any previously added property with name <code>aName</code> will be overwritten with the value of this add operation.
 * </p>
 * @param aName the name of the property
 * @param aDate the property value
 * @return this builder
 */
export function addDateProperty(
  aName: string,
  aDate: unknown
): TemporaryNodeBuilder;

/**
 * Adds a Calendar property to this builder.
 *
 * <p>
 *    <em>Note!</em> Any previously added property with name <code>aName</code> will be overwritten with the value of this add operation.
 * </p>
 * @param aName the name of the property
 * @param aCalendar the property value
 * @return this builder
 */
export function addCalendarProperty(
  aName: string,
  aCalendar: unknown
): TemporaryNodeBuilder;

/**
 * Adds a boolean property to this builder.
 *
 * <p>
 *    <em>Note!</em> Any previously added property with name <code>aName</code> will be overwritten with the value of this add operation.
 * </p>
 * @param aName the name of the property
 * @param aBoolean the property value
 * @return this builder
 */
export function addBooleanProperty(
  aName: string,
  aBoolean: boolean
): TemporaryNodeBuilder;

/**
 * Adds a int property to this builder.
 *
 * <p>
 *    <em>Note!</em> Any previously added property with name <code>aName</code> will be overwritten with the value of this add operation.
 * </p>
 * @param aName the name of the property
 * @param aInt the property value
 * @return this builder
 */
export function addIntProperty(
  aName: string,
  aInt: number
): TemporaryNodeBuilder;

/**
 * Adds a long property to this builder.
 *
 * <p>
 *    <em>Note!</em> Any previously added property with name <code>aName</code> will be overwritten with the value of this add operation.
 * </p>
 * @param aName the name of the property
 * @param aLong the property value
 * @return this builder
 */
export function addLongProperty(
  aName: string,
  aLong: number
): TemporaryNodeBuilder;

/**
 * Adds a double property to this builder.
 *
 * <p>
 *    <em>Note!</em> Any previously added property with name <code>aName</code> will be overwritten with the value of this add operation.
 * </p>
 * @param aName the name of the property
 * @param aDouble the property value
 * @return this builder
 */
export function addDoubleProperty(
  aName: string,
  aDouble: number
): TemporaryNodeBuilder;

/**
 * Adds a numeric property (typically: Integer, Long or Double) to this builder.
 *
 * <p>
 *    <em>Note!</em> Any previously added property with name <code>aName</code> will be overwritten with the value of this add operation.
 * </p>
 * @param aName the name of the property
 * @param aNumber the property value
 * @return this builder
 */
export function addNumericProperty(
  aName: string,
  aNumber: number
): TemporaryNodeBuilder;

/**
 * Adds a Node property to this builder.
 *
 * <p>
 *    <em>Note!</em> Any previously added property with name <code>aName</code> will be overwritten with the value of this add operation.
 * </p>
 * @param aName the name of the property
 * @param aNode the property value
 * @return this builder
 */
export function addNodeProperty(
  aName: string,
  aNode: Node
): TemporaryNodeBuilder;

/**
 * Clears the state of this builder.
 *
 * <p>
 *    This method will set the name to <code>null</code> and remove all properties.
 * </p>
 * @return this builder
 */
export function clearAll(): TemporaryNodeBuilder;

/**
 * Creates a volatile and short-lived temporary node using current state (name and properties).
 * @return a volatile and short-lived temporary node
 * @throws IllegalStateException if no node name is set
 */
export function build(): Node;

/**
 * Builds volatile and short-lived nodes with primary node type <em>sv:temporaryNode</em>.
 *
 * <p>
 *    <strong>Important note!</strong> Temporary nodes are very volatile and short-lived.
 *    They have no parent, nor any children.
 *    A temporary node can never be looked up by its identifier and it should never be cached.
 *    Temporary nodes should only be used for <em>temporary purposes</em>, typically during a single rendering phase.
 * </p>
 *
 * <p>
 *    See {@link senselogic.sitevision.api.base.Builder} for a comprehensive example of how to work with builders.
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.node.NodeFactoryUtil#getTemporaryNodeBuilder()}.
 *    See {@link senselogic.sitevision.api.node.NodeFactoryUtil} for how to obtain an instance of the <code>NodeFactoryUtil</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 4.1.2
 */
declare namespace temporaryNodeBuilder {
  export {
    setName,
    addStringProperty,
    addDateProperty,
    addCalendarProperty,
    addBooleanProperty,
    addIntProperty,
    addLongProperty,
    addDoubleProperty,
    addNumericProperty,
    addNodeProperty,
    clearAll,
    build,
  };
}

export default temporaryNodeBuilder;
