import type { String } from "../../types/java/lang/String";
import type { Date } from "../../types/java/util/Date";
import type { Calendar } from "../../types/java/util/Calendar";

import type { Number } from "../../types/java/lang/Number";
import type { Node } from "../../types/javax/jcr/Node";
import type { Builder } from "../../types/senselogic/sitevision/api/base/Builder";

/**
 * Builds volatile and short-lived nodes with primary node type <em>sv:temporaryNode</em>.
 *
 *  <p>
 *     <strong>Important note!</strong> Temporary nodes are very volatile and short-lived.
 *     They have no parent, nor any children.
 *     A temporary node can never be looked up by its identifier and it should never be cached.
 *     Temporary nodes should only be used for <em>temporary purposes</em>, typically during a single rendering phase.
 *  </p>
 *
 *  <p>
 *     See {@link senselogic.sitevision.api.base.Builder} for a comprehensive example of how to work with builders.
 *  </p>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.node.NodeFactoryUtil#getTemporaryNodeBuilder()}.
 *     See {@link senselogic.sitevision.api.node.NodeFactoryUtil} for how to obtain an instance of the <code>NodeFactoryUtil</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 4.1.2
 */
export interface TemporaryNodeBuilder extends Builder {
  /**
   * Sets the name of the temporary node that can be built by this builder.
   * @param aNodeName the name of the node
   * @return this builder
   */
  setName(aNodeName: String | string): TemporaryNodeBuilder;

  /**
   * Adds a String property to this builder.
   *
   *  <p>
   *     <em>Note!</em> Any previously added property with name <code>aName</code> will be overwritten with the value of this add operation.
   *  </p>
   * @param aName the name of the property
   * @param aString the property value
   * @return this builder
   */
  addStringProperty(
    aName: String | string,
    aString: String | string
  ): TemporaryNodeBuilder;

  /**
   * Adds a Date property to this builder.
   *
   *  <p>
   *     <em>Note!</em> Any previously added property with name <code>aName</code> will be overwritten with the value of this add operation.
   *  </p>
   * @param aName the name of the property
   * @param aDate the property value
   * @return this builder
   */
  addDateProperty(aName: String | string, aDate: Date): TemporaryNodeBuilder;

  /**
   * Adds a Calendar property to this builder.
   *
   *  <p>
   *     <em>Note!</em> Any previously added property with name <code>aName</code> will be overwritten with the value of this add operation.
   *  </p>
   * @param aName the name of the property
   * @param aCalendar the property value
   * @return this builder
   */
  addCalendarProperty(
    aName: String | string,
    aCalendar: Calendar
  ): TemporaryNodeBuilder;

  /**
   * Adds a boolean property to this builder.
   *
   *  <p>
   *     <em>Note!</em> Any previously added property with name <code>aName</code> will be overwritten with the value of this add operation.
   *  </p>
   * @param aName the name of the property
   * @param aBoolean the property value
   * @return this builder
   */
  addBooleanProperty(
    aName: String | string,
    aBoolean: boolean
  ): TemporaryNodeBuilder;

  /**
   * Adds a int property to this builder.
   *
   *  <p>
   *     <em>Note!</em> Any previously added property with name <code>aName</code> will be overwritten with the value of this add operation.
   *  </p>
   * @param aName the name of the property
   * @param aInt the property value
   * @return this builder
   */
  addIntProperty(aName: String | string, aInt: number): TemporaryNodeBuilder;

  /**
   * Adds a long property to this builder.
   *
   *  <p>
   *     <em>Note!</em> Any previously added property with name <code>aName</code> will be overwritten with the value of this add operation.
   *  </p>
   * @param aName the name of the property
   * @param aLong the property value
   * @return this builder
   */
  addLongProperty(aName: String | string, aLong: number): TemporaryNodeBuilder;

  /**
   * Adds a double property to this builder.
   *
   *  <p>
   *     <em>Note!</em> Any previously added property with name <code>aName</code> will be overwritten with the value of this add operation.
   *  </p>
   * @param aName the name of the property
   * @param aDouble the property value
   * @return this builder
   */
  addDoubleProperty(
    aName: String | string,
    aDouble: number
  ): TemporaryNodeBuilder;

  /**
   * Adds a numeric property (typically: Integer, Long or Double) to this builder.
   *
   *  <p>
   *     <em>Note!</em> Any previously added property with name <code>aName</code> will be overwritten with the value of this add operation.
   *  </p>
   * @param aName the name of the property
   * @param aNumber the property value
   * @return this builder
   */
  addNumericProperty(
    aName: String | string,
    aNumber: number
  ): TemporaryNodeBuilder;

  /**
   * Adds a Node property to this builder.
   *
   *  <p>
   *     <em>Note!</em> Any previously added property with name <code>aName</code> will be overwritten with the value of this add operation.
   *  </p>
   * @param aName the name of the property
   * @param aNode the property value
   * @return this builder
   */
  addNodeProperty(aName: String | string, aNode: Node): TemporaryNodeBuilder;

  /**
   * Clears the state of this builder.
   *
   *  <p>
   *     This method will set the name to <code>null</code> and remove all properties.
   *  </p>
   * @return this builder
   */
  clearAll(): TemporaryNodeBuilder;

  /**
   * Creates a volatile and short-lived temporary node using current state (name and properties).
   * @return a volatile and short-lived temporary node
   * @throws IllegalStateException if no node name is set
   */
  build(): Node;
}

declare namespace TemporaryNodeBuilder {}

declare var temporaryNodeBuilder: TemporaryNodeBuilder;

export default temporaryNodeBuilder;
