import type { TemporalField } from "../TemporalField";

import type { Object } from "../../../lang/Object";
import type { String } from "../../../lang/String";
import type { Serializable } from "../../../io/Serializable";

/**
 * The range of valid values for a date-time field.
 *  <p>
 *  All {@link TemporalField} instances have a valid range of values.
 *  For example, the ISO day-of-month runs from 1 to somewhere between 28 and 31.
 *  This class captures that valid range.
 *  <p>
 *  It is important to be aware of the limitations of this class.
 *  Only the minimum and maximum values are provided.
 *  It is possible for there to be invalid values within the outer range.
 *  For example, a weird field may have valid values of 1, 2, 4, 6, 7, thus
 *  have a range of '1 - 7', despite that fact that values 3 and 5 are invalid.
 *  <p>
 *  Instances of this class are not tied to a specific field.
 * @implSpec This class is immutable and thread-safe.
 * @since 1.8
 */
export type ValueRange = Object &
  Serializable & {
    /**
     * Is the value range fixed and fully known.
     *  <p>
     *  For example, the ISO day-of-month runs from 1 to between 28 and 31.
     *  Since there is uncertainty about the maximum value, the range is not fixed.
     *  However, for the month of January, the range is always 1 to 31, thus it is fixed.
     * @return true if the set of values is fixed
     */
    isFixed(): boolean;

    /**
     * Gets the minimum value that the field can take.
     *  <p>
     *  For example, the ISO day-of-month always starts at 1.
     *  The minimum is therefore 1.
     * @return the minimum value for this field
     */
    getMinimum(): number;

    /**
     * Gets the largest possible minimum value that the field can take.
     *  <p>
     *  For example, the ISO day-of-month always starts at 1.
     *  The largest minimum is therefore 1.
     * @return the largest possible minimum value for this field
     */
    getLargestMinimum(): number;

    /**
     * Gets the smallest possible maximum value that the field can take.
     *  <p>
     *  For example, the ISO day-of-month runs to between 28 and 31 days.
     *  The smallest maximum is therefore 28.
     * @return the smallest possible maximum value for this field
     */
    getSmallestMaximum(): number;

    /**
     * Gets the maximum value that the field can take.
     *  <p>
     *  For example, the ISO day-of-month runs to between 28 and 31 days.
     *  The maximum is therefore 31.
     * @return the maximum value for this field
     */
    getMaximum(): number;

    /**
     * Checks if all values in the range fit in an {@code int}.
     *  <p>
     *  This checks that all valid values are within the bounds of an {@code int}.
     *  <p>
     *  For example, the ISO month-of-year has values from 1 to 12, which fits in an {@code int}.
     *  By comparison, ISO nano-of-day runs from 1 to 86,400,000,000,000 which does not fit in an {@code int}.
     *  <p>
     *  This implementation uses {@link #getMinimum()} and {@link #getMaximum()}.
     * @return true if a valid value always fits in an {@code int}
     */
    isIntValue(): boolean;

    /**
     * Checks if the value is within the valid range.
     *  <p>
     *  This checks that the value is within the stored range of values.
     * @param value the value to check
     * @return true if the value is valid
     */
    isValidValue(value: number): boolean;

    /**
     * Checks if the value is within the valid range and that all values
     *  in the range fit in an {@code int}.
     *  <p>
     *  This method combines {@link #isIntValue()} and {@link #isValidValue(long)}.
     * @param value the value to check
     * @return true if the value is valid and fits in an {@code int}
     */
    isValidIntValue(value: number): boolean;

    /**
     * Checks that the specified value is valid.
     *  <p>
     *  This validates that the value is within the valid range of values.
     *  The field is only used to improve the error message.
     * @param value the value to check
     * @param field the field being checked, may be null
     * @return the value that was passed in
     * @see #isValidValue(long)
     */
    checkValidValue(value: number, field: TemporalField): number;

    /**
     * Checks that the specified value is valid and fits in an {@code int}.
     *  <p>
     *  This validates that the value is within the valid range of values and that
     *  all valid values are within the bounds of an {@code int}.
     *  The field is only used to improve the error message.
     * @param value the value to check
     * @param field the field being checked, may be null
     * @return the value that was passed in
     * @see #isValidIntValue(long)
     */
    checkValidIntValue(value: number, field: TemporalField): number;

    /**
     * Checks if this range is equal to another range.
     *  <p>
     *  The comparison is based on the four values, minimum, largest minimum,
     *  smallest maximum and maximum.
     *  Only objects of type {@code ValueRange} are compared, other types return false.
     * @param obj the object to check, null returns false
     * @return true if this is equal to the other range
     */
    equals(obj: unknown): boolean;

    /**
     * A hash code for this range.
     * @return a suitable hash code
     */
    hashCode(): number;

    /**
     * Outputs this range as a {@code String}.
     *  <p>
     *  The format will be '{min}/{largestMin} - {smallestMax}/{max}',
     *  where the largestMin or smallestMax sections may be omitted, together
     *  with associated slash, if they are the same as the min or max.
     * @return a string representation of this range, not null
     */
    toString(): string;
  };
