/**
 * Returns current timestamp.
 * @return a long representing the current time.
 */
export function getTimestamp(): number;

/**
 * Formats current timestamp.
 * @param aFormatPattern a date to string pattern according to SimpleDateFormat.
 * @return a formatted String representing current timestamp using Locale according to {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentLocale()}. If aLocale can not be resolved Locale.ENGLISH is used. If aFormatPattern is not valid current timestamp is returned as String.
 */
export function formatCurrent(aFormatPattern: string): string;

/**
 * Formats current timestamp using a specified Locale.
 * @param aFormatPattern a date to string pattern according to SimpleDateFormat.
 * @param aLocale a locale. If aLocale is null the current locale (as of {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentLocale()}) will be used. If aLocale can not be resolved Locale.ENGLISH will be used.
 * @return a formatted String representing current timestamp. If aFormatPattern is not valid current timestamp is returned as String.
 */
export function formatCurrent(aFormatPattern: string, aLocale: unknown): string;

/**
 * Formats a given timestamp.
 * @param aTimestamp a timestamp.
 * @param aFormatPattern a date to string pattern according to SimpleDateFormat.
 * @return a formatted String representing aTimestamp using Locale according to {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentLocale()}. If aLocale can not be resolved Locale.ENGLISH is used. If aTimestamp is negative or aFormatPattern is not valid the given timestamp is returned as String.
 */
export function format(aTimestamp: number, aFormatPattern: string): string;

/**
 * Formats a given timestamp using a specified Locale.
 * @param aTimestamp a timestamp.
 * @param aFormatPattern a date to string pattern according to SimpleDateFormat.
 * @param aLocale a locale. If aLocale is null the current locale (as of {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentLocale()}) will be used. If aLocale can not be resolved Locale.ENGLISH will be used.
 * @return a formatted String representing the aTimestamp. If aTimestamp is negative or aFormatPattern is not valid the given timestamp is returned as String.
 */
export function format(
  aTimestamp: number,
  aFormatPattern: string,
  aLocale: unknown
): string;

/**
 * Converts a timestamp to a Date.
 * @param aTimestamp a timestamp.
 * @return the Date representing aTimestamp, or null if aTimestamp is negative.
 * @since Sitevision 4.5.5
 */
export function toDate(aTimestamp: number): unknown;

/**
 * Converts a Date to a timestamp.
 * @param aDate a Date.
 * @return the timestamp representing aDate, or -1 if aDate is null.
 * @since Sitevision 4.5.5
 */
export function fromDate(aDate: unknown): number;

/**
 * Converts a timestamp to a Calendar.
 * @param aTimestamp a timestamp.
 * @return the Calendar representing aTimestamp, or null if aTimestamp is negative.
 * @since Sitevision 4.5.5
 */
export function toCalendar(aTimestamp: number): unknown;

/**
 * Converts a Calendar to a timestamp.
 * @param aCalendar a Calendar.
 * @return the timestamp representing aCalendar, or -1 if aCalendar is null.
 * @since Sitevision 4.5.5
 */
export function fromCalendar(aCalendar: unknown): number;

/**
 * Converts a timestamp to a Instant.
 * @param aTimestamp a timestamp.
 * @return the Instant representing aTimestamp, or null if aTimestamp is negative.
 * @since Sitevision 4.5.5
 */
export function toInstant(aTimestamp: number): unknown;

/**
 * Converts a Instant to a timestamp.
 * @param aInstant a Instant.
 * @return aInstant timestamp representing aInstant, or -1 if aInstant is null.
 * @since Sitevision 4.5.5
 */
export function fromInstant(aInstant: unknown): number;

/**
 * Converts a timestamp to a LocalDateTime (using the system default ZoneId).
 * @param aTimestamp a timestamp.
 * @return the LocalDateTime representing aTimestamp, or null if aTimestamp is negative.
 * @since Sitevision 4.5.5
 */
export function toLocalDateTime(aTimestamp: number): unknown;

/**
 * Converts a LocalDateTime to a timestamp (using the system default ZoneId).
 * @param aLocalDateTime a Instant.
 * @return aInstant timestamp representing aLocalDateTime, or -1 if aLocalDateTime is null.
 * @since Sitevision 4.5.5
 */
export function fromLocalDateTime(aLocalDateTime: unknown): number;

/**
 * Timestamp utility interface.
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getTimestampUtil()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Jimmy Roselin
 * @since Sitevision 4.5.4.1
 */
declare namespace timestampUtil {
  export {
    getTimestamp,
    formatCurrent,
    format,
    toDate,
    fromDate,
    toCalendar,
    fromCalendar,
    toInstant,
    fromInstant,
    toLocalDateTime,
    fromLocalDateTime,
  };
}

export default timestampUtil;
