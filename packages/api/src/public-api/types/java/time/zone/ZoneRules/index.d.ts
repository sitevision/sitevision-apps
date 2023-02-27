import type { Instant } from "../../Instant";
import type { ZoneOffset } from "../../ZoneOffset";
import type { LocalDateTime } from "../../LocalDateTime";
import type { List } from "../../../util/List";
import type { ZoneOffsetTransition } from "../ZoneOffsetTransition";
import type { Duration } from "../../Duration";
import type { Object } from "../../../lang/Object";

import type { String } from "../../../lang/String";
import type { Serializable } from "../../../io/Serializable";

/**
 * The rules defining how the zone offset varies for a single time-zone.
 *  <p>
 *  The rules model all the historic and future transitions for a time-zone.
 *  {@link ZoneOffsetTransition} is used for known transitions, typically historic.
 *  {@link ZoneOffsetTransitionRule} is used for future transitions that are based
 *  on the result of an algorithm.
 *  <p>
 *  The rules are loaded via {@link ZoneRulesProvider} using a {@link ZoneId}.
 *  The same rules may be shared internally between multiple zone IDs.
 *  <p>
 *  Serializing an instance of {@code ZoneRules} will store the entire set of rules.
 *  It does not store the zone ID as it is not part of the state of this object.
 *  <p>
 *  A rule implementation may or may not store full information about historic
 *  and future transitions, and the information stored is only as accurate as
 *  that supplied to the implementation by the rules provider.
 *  Applications should treat the data provided as representing the best information
 *  available to the implementation of this rule.
 * @implSpec This class is immutable and thread-safe.
 * @since 1.8
 */
export type ZoneRules = Object &
  Serializable & {
    /**
     * Checks of the zone rules are fixed, such that the offset never varies.
     * @return true if the time-zone is fixed and the offset never changes
     */
    isFixedOffset(): boolean;

    /**
     * Gets the offset applicable at the specified instant in these rules.
     *  <p>
     *  The mapping from an instant to an offset is simple, there is only
     *  one valid offset for each instant.
     *  This method returns that offset.
     * @param instant the instant to find the offset for, not null, but null&#xA; may be ignored if the rules have a single offset for all instants
     * @return the offset, not null
     */
    getOffset(instant: Instant): ZoneOffset;

    /**
     * Gets a suitable offset for the specified local date-time in these rules.
     *  <p>
     *  The mapping from a local date-time to an offset is not straightforward.
     *  There are three cases:
     *  <ul>
     *  <li>Normal, with one valid offset. For the vast majority of the year, the normal
     *   case applies, where there is a single valid offset for the local date-time.</li>
     *  <li>Gap, with zero valid offsets. This is when clocks jump forward typically
     *   due to the spring daylight savings change from "winter" to "summer".
     *   In a gap there are local date-time values with no valid offset.</li>
     *  <li>Overlap, with two valid offsets. This is when clocks are set back typically
     *   due to the autumn daylight savings change from "summer" to "winter".
     *   In an overlap there are local date-time values with two valid offsets.</li>
     *  </ul>
     *  Thus, for any given local date-time there can be zero, one or two valid offsets.
     *  This method returns the single offset in the Normal case, and in the Gap or Overlap
     *  case it returns the offset before the transition.
     *  <p>
     *  Since, in the case of Gap and Overlap, the offset returned is a "best" value, rather
     *  than the "correct" value, it should be treated with care. Applications that care
     *  about the correct offset should use a combination of this method,
     *  {@link #getValidOffsets(LocalDateTime)} and {@link #getTransition(LocalDateTime)}.
     * @param localDateTime the local date-time to query, not null, but null&#xA; may be ignored if the rules have a single offset for all instants
     * @return the best available offset for the local date-time, not null
     */
    getOffset(localDateTime: LocalDateTime): ZoneOffset;

    /**
     * Gets the offset applicable at the specified local date-time in these rules.
     *  <p>
     *  The mapping from a local date-time to an offset is not straightforward.
     *  There are three cases:
     *  <ul>
     *  <li>Normal, with one valid offset. For the vast majority of the year, the normal
     *   case applies, where there is a single valid offset for the local date-time.</li>
     *  <li>Gap, with zero valid offsets. This is when clocks jump forward typically
     *   due to the spring daylight savings change from "winter" to "summer".
     *   In a gap there are local date-time values with no valid offset.</li>
     *  <li>Overlap, with two valid offsets. This is when clocks are set back typically
     *   due to the autumn daylight savings change from "summer" to "winter".
     *   In an overlap there are local date-time values with two valid offsets.</li>
     *  </ul>
     *  Thus, for any given local date-time there can be zero, one or two valid offsets.
     *  This method returns that list of valid offsets, which is a list of size 0, 1 or 2.
     *  In the case where there are two offsets, the earlier offset is returned at index 0
     *  and the later offset at index 1.
     *  <p>
     *  There are various ways to handle the conversion from a {@code LocalDateTime}.
     *  One technique, using this method, would be:
     *  <pre>
     *   List&lt;ZoneOffset&gt; validOffsets = rules.getOffset(localDT);
     *   if (validOffsets.size() == 1) {
     *     // Normal case: only one valid offset
     *     zoneOffset = validOffsets.get(0);
     *   } else {
     *     // Gap or Overlap: determine what to do from transition (which will be non-null)
     *     ZoneOffsetTransition trans = rules.getTransition(localDT);
     *   }
     *  </pre>
     *  <p>
     *  In theory, it is possible for there to be more than two valid offsets.
     *  This would happen if clocks to be put back more than once in quick succession.
     *  This has never happened in the history of time-zones and thus has no special handling.
     *  However, if it were to happen, then the list would return more than 2 entries.
     * @param localDateTime the local date-time to query for valid offsets, not null, but null&#xA; may be ignored if the rules have a single offset for all instants
     * @return the list of valid offsets, may be immutable, not null
     */
    getValidOffsets(localDateTime: LocalDateTime): List;

    /**
     * Gets the offset transition applicable at the specified local date-time in these rules.
     *  <p>
     *  The mapping from a local date-time to an offset is not straightforward.
     *  There are three cases:
     *  <ul>
     *  <li>Normal, with one valid offset. For the vast majority of the year, the normal
     *   case applies, where there is a single valid offset for the local date-time.</li>
     *  <li>Gap, with zero valid offsets. This is when clocks jump forward typically
     *   due to the spring daylight savings change from "winter" to "summer".
     *   In a gap there are local date-time values with no valid offset.</li>
     *  <li>Overlap, with two valid offsets. This is when clocks are set back typically
     *   due to the autumn daylight savings change from "summer" to "winter".
     *   In an overlap there are local date-time values with two valid offsets.</li>
     *  </ul>
     *  A transition is used to model the cases of a Gap or Overlap.
     *  The Normal case will return null.
     *  <p>
     *  There are various ways to handle the conversion from a {@code LocalDateTime}.
     *  One technique, using this method, would be:
     *  <pre>
     *   ZoneOffsetTransition trans = rules.getTransition(localDT);
     *   if (trans == null) {
     *     // Gap or Overlap: determine what to do from transition
     *   } else {
     *     // Normal case: only one valid offset
     *     zoneOffset = rule.getOffset(localDT);
     *   }
     *  </pre>
     * @param localDateTime the local date-time to query for offset transition, not null, but null&#xA; may be ignored if the rules have a single offset for all instants
     * @return the offset transition, null if the local date-time is not in transition
     */
    getTransition(localDateTime: LocalDateTime): ZoneOffsetTransition;

    /**
     * Gets the standard offset for the specified instant in this zone.
     *  <p>
     *  This provides access to historic information on how the standard offset
     *  has changed over time.
     *  The standard offset is the offset before any daylight saving time is applied.
     *  This is typically the offset applicable during winter.
     * @param instant the instant to find the offset information for, not null, but null&#xA; may be ignored if the rules have a single offset for all instants
     * @return the standard offset, not null
     */
    getStandardOffset(instant: Instant): ZoneOffset;

    /**
     * Gets the amount of daylight savings in use for the specified instant in this zone.
     *  <p>
     *  This provides access to historic information on how the amount of daylight
     *  savings has changed over time.
     *  This is the difference between the standard offset and the actual offset.
     *  Typically the amount is zero during winter and one hour during summer.
     *  Time-zones are second-based, so the nanosecond part of the duration will be zero.
     *  <p>
     *  This default implementation calculates the duration from the
     *  {@link #getOffset(java.time.Instant) actual} and
     *  {@link #getStandardOffset(java.time.Instant) standard} offsets.
     * @param instant the instant to find the daylight savings for, not null, but null&#xA; may be ignored if the rules have a single offset for all instants
     * @return the difference between the standard and actual offset, not null
     */
    getDaylightSavings(instant: Instant): Duration;

    /**
     * Checks if the specified instant is in daylight savings.
     *  <p>
     *  This checks if the standard offset and the actual offset are the same
     *  for the specified instant.
     *  If they are not, it is assumed that daylight savings is in operation.
     *  <p>
     *  This default implementation compares the {@link #getOffset(java.time.Instant) actual}
     *  and {@link #getStandardOffset(java.time.Instant) standard} offsets.
     * @param instant the instant to find the offset information for, not null, but null&#xA; may be ignored if the rules have a single offset for all instants
     * @return the standard offset, not null
     */
    isDaylightSavings(instant: Instant): boolean;

    /**
     * Checks if the offset date-time is valid for these rules.
     *  <p>
     *  To be valid, the local date-time must not be in a gap and the offset
     *  must match one of the valid offsets.
     *  <p>
     *  This default implementation checks if {@link #getValidOffsets(java.time.LocalDateTime)}
     *  contains the specified offset.
     * @param localDateTime the date-time to check, not null, but null&#xA; may be ignored if the rules have a single offset for all instants
     * @param offset the offset to check, null returns false
     * @return true if the offset date-time is valid for these rules
     */
    isValidOffset(localDateTime: LocalDateTime, offset: ZoneOffset): boolean;

    /**
     * Gets the next transition after the specified instant.
     *  <p>
     *  This returns details of the next transition after the specified instant.
     *  For example, if the instant represents a point where "Summer" daylight savings time
     *  applies, then the method will return the transition to the next "Winter" time.
     * @param instant the instant to get the next transition after, not null, but null&#xA; may be ignored if the rules have a single offset for all instants
     * @return the next transition after the specified instant, null if this is after the last transition
     */
    nextTransition(instant: Instant): ZoneOffsetTransition;

    /**
     * Gets the previous transition before the specified instant.
     *  <p>
     *  This returns details of the previous transition after the specified instant.
     *  For example, if the instant represents a point where "summer" daylight saving time
     *  applies, then the method will return the transition from the previous "winter" time.
     * @param instant the instant to get the previous transition after, not null, but null&#xA; may be ignored if the rules have a single offset for all instants
     * @return the previous transition after the specified instant, null if this is before the first transition
     */
    previousTransition(instant: Instant): ZoneOffsetTransition;

    /**
     * Gets the complete list of fully defined transitions.
     *  <p>
     *  The complete set of transitions for this rules instance is defined by this method
     *  and {@link #getTransitionRules()}. This method returns those transitions that have
     *  been fully defined. These are typically historical, but may be in the future.
     *  <p>
     *  The list will be empty for fixed offset rules and for any time-zone where there has
     *  only ever been a single offset. The list will also be empty if the transition rules are unknown.
     * @return an immutable list of fully defined transitions, not null
     */
    getTransitions(): List;

    /**
     * Gets the list of transition rules for years beyond those defined in the transition list.
     *  <p>
     *  The complete set of transitions for this rules instance is defined by this method
     *  and {@link #getTransitions()}. This method returns instances of {@link ZoneOffsetTransitionRule}
     *  that define an algorithm for when transitions will occur.
     *  <p>
     *  For any given {@code ZoneRules}, this list contains the transition rules for years
     *  beyond those years that have been fully defined. These rules typically refer to future
     *  daylight saving time rule changes.
     *  <p>
     *  If the zone defines daylight savings into the future, then the list will normally
     *  be of size two and hold information about entering and exiting daylight savings.
     *  If the zone does not have daylight savings, or information about future changes
     *  is uncertain, then the list will be empty.
     *  <p>
     *  The list will be empty for fixed offset rules and for any time-zone where there is no
     *  daylight saving time. The list will also be empty if the transition rules are unknown.
     * @return an immutable list of transition rules, not null
     */
    getTransitionRules(): List;

    /**
     * Checks if this set of rules equals another.
     *  <p>
     *  Two rule sets are equal if they will always result in the same output
     *  for any given input instant or local date-time.
     *  Rules from two different groups may return false even if they are in fact the same.
     *  <p>
     *  This definition should result in implementations comparing their entire state.
     * @param otherRules the other rules, null returns false
     * @return true if this rules is the same as that specified
     */
    equals(otherRules: unknown): boolean;

    /**
     * Returns a suitable hash code given the definition of {@code #equals}.
     * @return the hash code
     */
    hashCode(): number;

    /**
     * Returns a string describing this object.
     * @return a string for debugging, not null
     */
    toString(): string;
  };
