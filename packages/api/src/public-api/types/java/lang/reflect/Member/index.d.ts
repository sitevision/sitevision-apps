import type { Class } from "../../Class";
import type { String } from "../../String";

/**
 * Member is an interface that reflects identifying information about
 *  a single member (a field or a method) or a constructor.
 * @see java.lang.Class
 * @see Field
 * @see Method
 * @see Constructor
 * @author Nakul Saraiya
 */
export type Member = {
  /**
   * Returns the Class object representing the class or interface
   *  that declares the member or constructor represented by this Member.
   * @return an object representing the declaring class of the&#xA; underlying member
   */
  getDeclaringClass(): Class;

  /**
   * Returns the simple name of the underlying member or constructor
   *  represented by this Member.
   * @return the simple name of the underlying member
   */
  getName(): string;

  /**
   * Returns the Java language modifiers for the member or
   *  constructor represented by this Member, as an integer.  The
   *  Modifier class should be used to decode the modifiers in
   *  the integer.
   * @return the Java language modifiers for the underlying member
   * @see Modifier
   */
  getModifiers(): number;

  /**
   * Returns {@code true} if this member was introduced by
   *  the compiler; returns {@code false} otherwise.
   * @return true if and only if this member was introduced by&#xA; the compiler.
   * @jls 13.1 The Form of a Binary
   * @since 1.5
   */
  isSynthetic(): boolean;

  /**
 * Identifies the set of all public members of a class or interface,
 *  including inherited members.
  
    */
  PUBLIC: number;

  /**
 * Identifies the set of declared members of a class or interface.
 *  Inherited members are not included.
  
    */
  DECLARED: number;
};
