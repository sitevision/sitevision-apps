import type { Consumer } from "../function/Consumer";

import type { Predicate } from "../function/Predicate";
import type { Function } from "../function/Function";
import type { Supplier } from "../function/Supplier";
import type { Object } from "../../lang/Object";

import type { String } from "../../lang/String";

/**
 * A container object which may or may not contain a non-null value.
 *  If a value is present, {@code isPresent()} will return {@code true} and
 *  {@code get()} will return the value.
 *
 *  <p>Additional methods that depend on the presence or absence of a contained
 *  value are provided, such as {@link #orElse(java.lang.Object) orElse()}
 *  (return a default value if value not present) and
 *  {@link #ifPresent(java.util.function.Consumer) ifPresent()} (execute a block
 *  of code if the value is present).
 *
 *  <p>This is a <a href="../lang/doc-files/ValueBased.html">value-based</a>
 *  class; use of identity-sensitive operations (including reference equality
 *  ({@code ==}), identity hash code, or synchronization) on instances of
 *  {@code Optional} may have unpredictable results and should be avoided.
 * @since 1.8
 */
export type Optional = Object & {
  /**
   * If a value is present in this {@code Optional}, returns the value,
   *  otherwise throws {@code NoSuchElementException}.
   * @return the non-null value held by this {@code Optional}
   * @throws NoSuchElementException if there is no value present
   * @see Optional#isPresent()
   */
  get(): unknown;

  /**
   * Return {@code true} if there is a value present, otherwise {@code false}.
   * @return {@code true} if there is a value present, otherwise {@code false}
   */
  isPresent(): boolean;

  /**
   * If a value is present, invoke the specified consumer with the value,
   *  otherwise do nothing.
   * @param consumer block to be executed if a value is present
   * @throws NullPointerException if value is present and {@code consumer} is&#xA; null
   */
  ifPresent(consumer: Consumer): void;

  /**
   * If a value is present, and the value matches the given predicate,
   *  return an {@code Optional} describing the value, otherwise return an
   *  empty {@code Optional}.
   * @param predicate a predicate to apply to the value, if present
   * @return an {@code Optional} describing the value of this {@code Optional}&#xA; if a value is present and the value matches the given predicate,&#xA; otherwise an empty {@code Optional}
   * @throws NullPointerException if the predicate is null
   */
  filter(predicate: Predicate): Optional;

  /**
   * If a value is present, apply the provided mapping function to it,
   *  and if the result is non-null, return an {@code Optional} describing the
   *  result.  Otherwise return an empty {@code Optional}.
   * @apiNote This method supports post-processing on optional values, without&#xA; the need to explicitly check for a return status. For example, the&#xA; following code traverses a stream of file names, selects one that has&#xA; not yet been processed, and then opens that file, returning an&#xA; {@code Optional<FileInputStream>}:&#xA;&#xA; <pre>{@code&#xA; Optional<FileInputStream> fis =&#xA; names.stream().filter(name -> !isProcessedYet(name))&#xA; .findFirst()&#xA; .map(name -> new FileInputStream(name));&#xA; }</pre>&#xA;&#xA; Here, {@code findFirst} returns an {@code Optional<String>}, and then&#xA; {@code map} returns an {@code Optional<FileInputStream>} for the desired&#xA; file if one exists.
   * @param <U> The type of the result of the mapping function
   * @param mapper a mapping function to apply to the value, if present
   * @return an {@code Optional} describing the result of applying a mapping&#xA; function to the value of this {@code Optional}, if a value is present,&#xA; otherwise an empty {@code Optional}
   * @throws NullPointerException if the mapping function is null
   */
  map(mapper: Function): Optional;

  /**
   * If a value is present, apply the provided {@code Optional}-bearing
   *  mapping function to it, return that result, otherwise return an empty
   *  {@code Optional}.  This method is similar to {@link #map(Function)},
   *  but the provided mapper is one whose result is already an {@code Optional},
   *  and if invoked, {@code flatMap} does not wrap it with an additional
   *  {@code Optional}.
   * @param <U> The type parameter to the {@code Optional} returned by
   * @param mapper a mapping function to apply to the value, if present&#xA; the mapping function
   * @return the result of applying an {@code Optional}-bearing mapping&#xA; function to the value of this {@code Optional}, if a value is present,&#xA; otherwise an empty {@code Optional}
   * @throws NullPointerException if the mapping function is null or returns&#xA; a null result
   */
  flatMap(mapper: Function): Optional;

  /**
   * Return the value if present, otherwise return {@code other}.
   * @param other the value to be returned if there is no value present, may&#xA; be null
   * @return the value, if present, otherwise {@code other}
   */
  orElse(other: unknown): unknown;

  /**
   * Return the value if present, otherwise invoke {@code other} and return
   *  the result of that invocation.
   * @param other a {@code Supplier} whose result is returned if no value&#xA; is present
   * @return the value if present otherwise the result of {@code other.get()}
   * @throws NullPointerException if value is not present and {@code other} is&#xA; null
   */
  orElseGet(other: Supplier): unknown;

  /**
   * Return the contained value, if present, otherwise throw an exception
   *  to be created by the provided supplier.
   * @apiNote A method reference to the exception constructor with an empty&#xA; argument list can be used as the supplier. For example,&#xA; {@code IllegalStateException::new}
   * @param <X> Type of the exception to be thrown
   * @param exceptionSupplier The supplier which will return the exception to&#xA; be thrown
   * @return the present value
   * @throws X if there is no value present
   * @throws NullPointerException if no value is present and&#xA; {@code exceptionSupplier} is null
   */
  orElseThrow(exceptionSupplier: Supplier): unknown;

  /**
   * Indicates whether some other object is "equal to" this Optional. The
   *  other object is considered equal if:
   *  <ul>
   *  <li>it is also an {@code Optional} and;
   *  <li>both instances have no value present or;
   *  <li>the present values are "equal to" each other via {@code equals()}.
   *  </ul>
   * @param obj an object to be tested for equality
   * @return {code true} if the other object is "equal to" this object&#xA; otherwise {@code false}
   */
  equals(obj: unknown): boolean;

  /**
   * Returns the hash code value of the present value, if any, or 0 (zero) if
   *  no value is present.
   * @return hash code value of the present value or 0 if no value is present
   */
  hashCode(): number;

  /**
   * Returns a non-empty string representation of this Optional suitable for
   *  debugging. The exact presentation format is unspecified and may vary
   *  between implementations and versions.
   * @implSpec If a value is present the result must include its string&#xA; representation in the result. Empty and present Optionals must be&#xA; unambiguously differentiable.
   * @return the string representation of this instance
   */
  toString(): string;
};
