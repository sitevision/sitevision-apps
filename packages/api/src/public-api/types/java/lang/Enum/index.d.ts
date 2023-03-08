import type { String } from "../String";

import type { Object } from "../Object";

import type { Class } from "../Class";

import type { Comparable } from "../Comparable";
import type { Serializable } from "../../io/Serializable";

/**
 * This is the common base class of all Java language enumeration types.
 *
 *  More information about enums, including descriptions of the
 *  implicitly declared methods synthesized by the compiler, can be
 *  found in section 8.9 of
 *  <cite>The Java&trade; Language Specification</cite>.
 *
 *  <p> Note that when using an enumeration type as the type of a set
 *  or as the type of the keys in a map, specialized and efficient
 *  {@linkplain java.util.EnumSet set} and {@linkplain
 *  java.util.EnumMap map} implementations are available.
 * @param <E> The enum type subclass
 * @author Josh Bloch
 * @author Neal Gafter
 * @see Class#getEnumConstants()
 * @see java.util.EnumSet
 * @see java.util.EnumMap
 * @since 1.5
 */
export type Enum = Object &
  Comparable &
  Serializable & {
    /**
     * Returns the name of this enum constant, exactly as declared in its
     *  enum declaration.
     *
     *  <b>Most programmers should use the {@link #toString} method in
     *  preference to this one, as the toString method may return
     *  a more user-friendly name.</b>  This method is designed primarily for
     *  use in specialized situations where correctness depends on getting the
     *  exact name, which will not vary from release to release.
     * @return the name of this enum constant
     */
    name(): string;

    /**
     * Returns the ordinal of this enumeration constant (its position
     *  in its enum declaration, where the initial constant is assigned
     *  an ordinal of zero).
     *
     *  Most programmers will have no use for this method.  It is
     *  designed for use by sophisticated enum-based data structures, such
     *  as {@link java.util.EnumSet} and {@link java.util.EnumMap}.
     * @return the ordinal of this enumeration constant
     */
    ordinal(): number;

    /**
     * Returns the name of this enum constant, as contained in the
     *  declaration.  This method may be overridden, though it typically
     *  isn't necessary or desirable.  An enum type should override this
     *  method when a more "programmer-friendly" string form exists.
     * @return the name of this enum constant
     */
    toString(): string;

    /**
     * Returns true if the specified object is equal to this
     *  enum constant.
     * @param other the object to be compared for equality with this object.
     * @return true if the specified object is equal to this&#xA; enum constant.
     */
    equals(other: unknown): boolean;

    /**
     * Returns a hash code for this enum constant.
     * @return a hash code for this enum constant.
     */
    hashCode(): number;

    /**
     * Throws CloneNotSupportedException.  This guarantees that enums
     *  are never cloned, which is necessary to preserve their "singleton"
     *  status.
     * @return (never returns)
     */
    clone(): unknown;

    /**
 * Compares this enum with the specified object for order.  Returns a
 *  negative integer, zero, or a positive integer as this object is less
 *  than, equal to, or greater than the specified object.
 * 
 *  Enum constants are only comparable to other enum constants of the
 *  same enum type.  The natural order implemented by this
 *  method is the order in which the constants are declared.
  
    */
    compareTo(o: unknown): number;

    /**
     * Returns the Class object corresponding to this enum constant's
     *  enum type.  Two enum constants e1 and  e2 are of the
     *  same enum type if and only if
     *    e1.getDeclaringClass() == e2.getDeclaringClass().
     *  (The value returned by this method may differ from the one returned
     *  by the {@link Object#getClass} method for enum constants with
     *  constant-specific class bodies.)
     * @return the Class object corresponding to this enum constant's&#xA; enum type
     */
    getDeclaringClass(): Class;

    /**
 * enum classes cannot have finalize methods.
  
    */
    finalize(): void;
  };
