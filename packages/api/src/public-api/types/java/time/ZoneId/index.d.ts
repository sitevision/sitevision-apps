import type { String } from "../../lang/String";
import type { TextStyle } from "../format/TextStyle";
import type { Locale } from "../../util/Locale";
import type { ZoneRules } from "../zone/ZoneRules";
import type { Object } from "../../lang/Object";

import type { Serializable } from "../../io/Serializable";
import type { Map } from "../../util/Map";

/**
 * A time-zone ID, such as {@code Europe/Paris}.
 *  <p>
 *  A {@code ZoneId} is used to identify the rules used to convert between
 *  an {@link Instant} and a {@link LocalDateTime}.
 *  There are two distinct types of ID:
 *  <ul>
 *  <li>Fixed offsets - a fully resolved offset from UTC/Greenwich, that uses
 *   the same offset for all local date-times
 *  <li>Geographical regions - an area where a specific set of rules for finding
 *   the offset from UTC/Greenwich apply
 *  </ul>
 *  Most fixed offsets are represented by {@link ZoneOffset}.
 *  Calling {@link #normalized()} on any {@code ZoneId} will ensure that a
 *  fixed offset ID will be represented as a {@code ZoneOffset}.
 *  <p>
 *  The actual rules, describing when and how the offset changes, are defined by {@link ZoneRules}.
 *  This class is simply an ID used to obtain the underlying rules.
 *  This approach is taken because rules are defined by governments and change
 *  frequently, whereas the ID is stable.
 *  <p>
 *  The distinction has other effects. Serializing the {@code ZoneId} will only send
 *  the ID, whereas serializing the rules sends the entire data set.
 *  Similarly, a comparison of two IDs only examines the ID, whereas
 *  a comparison of two rules examines the entire data set.
 *
 *  <h3>Time-zone IDs</h3>
 *  The ID is unique within the system.
 *  There are three types of ID.
 *  <p>
 *  The simplest type of ID is that from {@code ZoneOffset}.
 *  This consists of 'Z' and IDs starting with '+' or '-'.
 *  <p>
 *  The next type of ID are offset-style IDs with some form of prefix,
 *  such as 'GMT+2' or 'UTC+01:00'.
 *  The recognised prefixes are 'UTC', 'GMT' and 'UT'.
 *  The offset is the suffix and will be normalized during creation.
 *  These IDs can be normalized to a {@code ZoneOffset} using {@code normalized()}.
 *  <p>
 *  The third type of ID are region-based IDs. A region-based ID must be of
 *  two or more characters, and not start with 'UTC', 'GMT', 'UT' '+' or '-'.
 *  Region-based IDs are defined by configuration, see {@link ZoneRulesProvider}.
 *  The configuration focuses on providing the lookup from the ID to the
 *  underlying {@code ZoneRules}.
 *  <p>
 *  Time-zone rules are defined by governments and change frequently.
 *  There are a number of organizations, known here as groups, that monitor
 *  time-zone changes and collate them.
 *  The default group is the IANA Time Zone Database (TZDB).
 *  Other organizations include IATA (the airline industry body) and Microsoft.
 *  <p>
 *  Each group defines its own format for the region ID it provides.
 *  The TZDB group defines IDs such as 'Europe/London' or 'America/New_York'.
 *  TZDB IDs take precedence over other groups.
 *  <p>
 *  It is strongly recommended that the group name is included in all IDs supplied by
 *  groups other than TZDB to avoid conflicts. For example, IATA airline time-zone
 *  region IDs are typically the same as the three letter airport code.
 *  However, the airport of Utrecht has the code 'UTC', which is obviously a conflict.
 *  The recommended format for region IDs from groups other than TZDB is 'group~region'.
 *  Thus if IATA data were defined, Utrecht airport would be 'IATA~UTC'.
 *
 *  <h3>Serialization</h3>
 *  This class can be serialized and stores the string zone ID in the external form.
 *  The {@code ZoneOffset} subclass uses a dedicated format that only stores the
 *  offset from UTC/Greenwich.
 *  <p>
 *  A {@code ZoneId} can be deserialized in a Java Runtime where the ID is unknown.
 *  For example, if a server-side Java Runtime has been updated with a new zone ID, but
 *  the client-side Java Runtime has not been updated. In this case, the {@code ZoneId}
 *  object will exist, and can be queried using {@code getId}, {@code equals},
 *  {@code hashCode}, {@code toString}, {@code getDisplayName} and {@code normalized}.
 *  However, any call to {@code getRules} will fail with {@code ZoneRulesException}.
 *  This approach is designed to allow a {@link ZonedDateTime} to be loaded and
 *  queried, but not modified, on a Java Runtime with incomplete time-zone information.
 *
 *  <p>
 *  This is a <a href="{@docRoot}/java/lang/doc-files/ValueBased.html">value-based</a>
 *  class; use of identity-sensitive operations (including reference equality
 *  ({@code ==}), identity hash code, or synchronization) on instances of
 *  {@code ZoneId} may have unpredictable results and should be avoided.
 *  The {@code equals} method should be used for comparisons.
 * @implSpec This abstract class has two implementations, both of which are immutable and thread-safe.&#xA; One implementation models region-based IDs, the other is {@code ZoneOffset} modelling&#xA; offset-based IDs. This difference is visible in serialization.
 * @since 1.8
 */
export type ZoneId = Object &
  Serializable & {
    /**
     * Gets the unique time-zone ID.
     *  <p>
     *  This ID uniquely defines this object.
     *  The format of an offset based ID is defined by {@link ZoneOffset#getId()}.
     * @return the time-zone unique ID, not null
     */
    getId(): string;

    /**
     * Gets the textual representation of the zone, such as 'British Time' or
     *  '+02:00'.
     *  <p>
     *  This returns the textual name used to identify the time-zone ID,
     *  suitable for presentation to the user.
     *  The parameters control the style of the returned text and the locale.
     *  <p>
     *  If no textual mapping is found then the {@link #getId() full ID} is returned.
     * @param style the length of the text required, not null
     * @param locale the locale to use, not null
     * @return the text value of the zone, not null
     */
    getDisplayName(style: TextStyle, locale: Locale): string;

    /**
     * Gets the time-zone rules for this ID allowing calculations to be performed.
     *  <p>
     *  The rules provide the functionality associated with a time-zone,
     *  such as finding the offset for a given instant or local date-time.
     *  <p>
     *  A time-zone can be invalid if it is deserialized in a Java Runtime which
     *  does not have the same rules loaded as the Java Runtime that stored it.
     *  In this case, calling this method will throw a {@code ZoneRulesException}.
     *  <p>
     *  The rules are supplied by {@link ZoneRulesProvider}. An advanced provider may
     *  support dynamic updates to the rules without restarting the Java Runtime.
     *  If so, then the result of this method may change over time.
     *  Each individual call will be still remain thread-safe.
     *  <p>
     *  {@link ZoneOffset} will always return a set of rules where the offset never changes.
     * @return the rules, not null
     * @throws ZoneRulesException if no rules are available for this ID
     */
    getRules(): ZoneRules;

    /**
     * Normalizes the time-zone ID, returning a {@code ZoneOffset} where possible.
     *  <p>
     *  The returns a normalized {@code ZoneId} that can be used in place of this ID.
     *  The result will have {@code ZoneRules} equivalent to those returned by this object,
     *  however the ID returned by {@code getId()} may be different.
     *  <p>
     *  The normalization checks if the rules of this {@code ZoneId} have a fixed offset.
     *  If they do, then the {@code ZoneOffset} equal to that offset is returned.
     *  Otherwise {@code this} is returned.
     * @return the time-zone unique ID, not null
     */
    normalized(): ZoneId;

    /**
     * Checks if this time-zone ID is equal to another time-zone ID.
     *  <p>
     *  The comparison is based on the ID.
     * @param obj the object to check, null returns false
     * @return true if this is equal to the other time-zone ID
     */
    equals(obj: unknown): boolean;

    /**
     * A hash code for this time-zone ID.
     * @return a suitable hash code
     */
    hashCode(): number;

    /**
     * Outputs this zone as a {@code String}, using the ID.
     * @return a string representation of this time-zone ID, not null
     */
    toString(): string;

    /**
 * A map of zone overrides to enable the short time-zone names to be used.
 *  <p>
 *  Use of short zone IDs has been deprecated in {@code java.util.TimeZone}.
 *  This map allows the IDs to continue to be used via the
 *  {@link #of(String, Map)} factory method.
 *  <p>
 *  This map contains a mapping of the IDs that is in line with TZDB 2005r and
 *  later, where 'EST', 'MST' and 'HST' map to IDs which do not include daylight
 *  savings.
 *  <p>
 *  This maps as follows:
 *  <ul>
 *  <li>EST - -05:00</li>
 *  <li>HST - -10:00</li>
 *  <li>MST - -07:00</li>
 *  <li>ACT - Australia/Darwin</li>
 *  <li>AET - Australia/Sydney</li>
 *  <li>AGT - America/Argentina/Buenos_Aires</li>
 *  <li>ART - Africa/Cairo</li>
 *  <li>AST - America/Anchorage</li>
 *  <li>BET - America/Sao_Paulo</li>
 *  <li>BST - Asia/Dhaka</li>
 *  <li>CAT - Africa/Harare</li>
 *  <li>CNT - America/St_Johns</li>
 *  <li>CST - America/Chicago</li>
 *  <li>CTT - Asia/Shanghai</li>
 *  <li>EAT - Africa/Addis_Ababa</li>
 *  <li>ECT - Europe/Paris</li>
 *  <li>IET - America/Indiana/Indianapolis</li>
 *  <li>IST - Asia/Kolkata</li>
 *  <li>JST - Asia/Tokyo</li>
 *  <li>MIT - Pacific/Apia</li>
 *  <li>NET - Asia/Yerevan</li>
 *  <li>NST - Pacific/Auckland</li>
 *  <li>PLT - Asia/Karachi</li>
 *  <li>PNT - America/Phoenix</li>
 *  <li>PRT - America/Puerto_Rico</li>
 *  <li>PST - America/Los_Angeles</li>
 *  <li>SST - Pacific/Guadalcanal</li>
 *  <li>VST - Asia/Ho_Chi_Minh</li>
 *  </ul>
 *  The map is unmodifiable.
  
    */
    SHORT_IDS: Map;
  };
