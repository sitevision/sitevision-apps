import type { String } from "../../../java/lang/String";
import type { Object } from "../../../java/lang/Object";

/**
 * The property types supported by the JCR standard.
 *  <p>
 *  This interface defines following property types: <ul> <li><code>STRING</code>
 *  <li><code>BINARY</code> <li><code>LONG</code> <li><code>DOUBLE</code>
 *  <li><code>DECIMAL</code> <li><code>DATE</code> <li><code>BOOLEAN</code>
 *  <li><code>NAME</code> <li><code>PATH</code> <li><code>REFERENCE</code>
 *  <li><code>WEAKREFERENCE</code> <li><code>URI</code> </ul>.
  
    */
export type PropertyType = Object & {
  /**
   * Returns the name of the specified <code>type</code>, as used in
   *  serialization.
   * @param type the property type
   * @return the name of the specified <code>type</code>
   * @throws IllegalArgumentException if <code>type</code> is not a valid&#xA; property type.
   */
  nameFromValue(type: number): string;

  /**
   * Returns the numeric constant value of the type with the specified name.
   * @param name the name of the property type.
   * @return the numeric constant value.
   * @throws IllegalArgumentException if <code>name</code> is not a valid&#xA; property type name.
   */
  valueFromName(name: String | string): number;

  /**
 * The <code>STRING</code> property type is used to store strings. It has
 *  the same characteristics as the Java <code>String</code> class.
  
    */
  STRING: number;

  /**
 * <code>BINARY</code> properties are used to store binary data.
  
    */
  BINARY: number;

  /**
 * The <code>LONG</code> property type is used to store integers. It has the
 *  same characteristics as the Java primitive type <code>long</code>.
  
    */
  LONG: number;

  /**
 * The <code>DOUBLE</code> property type is used to store floating point
 *  numbers. It has the same characteristics as the Java primitive type
 *  <code>double</code>.
  
    */
  DOUBLE: number;

  /**
 * The <code>DATE</code> property type is used to store time and date
 *  information.
  
    */
  DATE: number;

  /**
 * The <code>BOOLEAN</code> property type is used to store boolean values.
 *  It has the same characteristics as the Java primitive type
 *  <code>boolean</code>.
  
    */
  BOOLEAN: number;

  /**
 * A <code>NAME</code> is a pairing of a namespace and a local name. When
 *  read, the namespace is mapped to the current prefix.
  
    */
  NAME: number;

  /**
 * A <code>PATH</code> property is an ordered list of path elements. A path
 *  element is a <code>NAME</code> with an optional index. When read, the
 *  <code>NAME</code>s within the path are mapped to their current prefix. A
 *  path may be absolute or relative.
  
    */
  PATH: number;

  /**
 * A <code>REFERENCE</code> property stores the identifier of a
 *  referenceable node (one having type <code>mix:referenceable</code>),
 *  which must exist within the same workspace or session as the
 *  <code>REFERENCE</code> property. A <code>REFERENCE</code> property
 *  enforces this referential integrity by preventing the removal of its
 *  target node.
  
    */
  REFERENCE: number;

  /**
   * A <code>WEAKREFERENCE</code> property stores the identifier of a
   *  referenceable node (one having type <code>mix:referenceable</code>). A
   *  <code>WEAKREFERENCE</code> property does not enforce referential
   *  integrity.
   * @since JCR 2.0
   */
  WEAKREFERENCE: number;

  /**
   * A <code>URI</code> property is identical to <code>STRING</code> property
   *  except that it only accepts values that conform to the syntax of a
   *  URI-reference as defined in RFC 3986.
   * @since JCR 2.0
   */
  URI: number;

  /**
   * The <code>DECIMAL</code> property type is used to store precise decimal
   *  numbers. It has the same characteristics as the Java class
   *  <code>java.math.BigDecimal</code>.
   * @since JCR 2.0
   */
  DECIMAL: number;

  /**
 * This constant can be used within a property definition (see <i>4.7.5
 *  Property Definitions</i>) to specify that the property in question may be
 *  of any type. However, it cannot be the actual type of any property
 *  instance. For example, it will never be returned by {@link
 *  Property#getType} and it cannot be assigned as the type when creating a
 *  new property.
  
    */
  UNDEFINED: number;

  /**
 * String constant for type name as used in serialization.
  
    */
  TYPENAME_STRING: string;

  /**
 * String constant for type name as used in serialization.
  
    */
  TYPENAME_BINARY: string;

  /**
 * String constant for type name as used in serialization.
  
    */
  TYPENAME_LONG: string;

  /**
 * String constant for type name as used in serialization.
  
    */
  TYPENAME_DOUBLE: string;

  /**
   * String constant for type name as used in serialization.
   * @since JCR 2.0
   */
  TYPENAME_DECIMAL: string;

  /**
 * String constant for type name as used in serialization.
  
    */
  TYPENAME_DATE: string;

  /**
 * String constant for type name as used in serialization.
  
    */
  TYPENAME_BOOLEAN: string;

  /**
 * String constant for type name as used in serialization.
  
    */
  TYPENAME_NAME: string;

  /**
 * String constant for type name as used in serialization.
  
    */
  TYPENAME_PATH: string;

  /**
 * String constant for type name as used in serialization.
  
    */
  TYPENAME_REFERENCE: string;

  /**
   * String constant for type name as used in serialization.
   * @since JCR 2.0
   */
  TYPENAME_WEAKREFERENCE: string;

  /**
   * String constant for type name as used in serialization.
   * @since JCR 2.0
   */
  TYPENAME_URI: string;

  TYPENAME_UNDEFINED: string;
};
