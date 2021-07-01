import Calendar from '../../builtins/Calendar';
import Date from '../../builtins/Date';
import Instant from '../../builtins/Instant';
import LocalDateTime from '../../builtins/LocalDateTime';
import Locale from '../../builtins/Locale';

/**
* Formats a given timestamp.
* @returns {string} a formatted String representing aTimestamp using Locale according toPortletContextUtil.getCurrentLocale(). If aLocale can not be resolved Locale.ENGLISH is used.If aTimestamp is negative or aFormatPattern is not valid the given timestamp is returned as String.
* @param {number} aTimestamp - a timestamp.
* @param {string} aFormatPattern - a date to string pattern according to SimpleDateFormat.
*/
export function format(aTimestamp: number, aFormatPattern: string): string;

/**
* Formats a given timestamp using a specified Locale.
* @returns {string} a formatted String representing the aTimestamp. If aTimestamp is negative or aFormatPattern is not valid the given timestampis returned as String.
* @param {number} aTimestamp - a timestamp.
* @param {string} aFormatPattern - a date to string pattern according to SimpleDateFormat.
* @param {Locale} aLocale - a locale. If aLocale is null the current locale (as of PortletContextUtil.getCurrentLocale()) will be used. If aLocale can not be resolved Locale.ENGLISH will be used.
*/
export function format(aTimestamp: number, aFormatPattern: string, aLocale: Locale): string;

/**
* Formats current timestamp.
* @returns {string} a formatted String representing current timestamp using Locale according toPortletContextUtil.getCurrentLocale(). If aLocale can not be resolved Locale.ENGLISH is used.If aFormatPattern is not valid current timestamp is returned as String.
* @param {string} aFormatPattern - a date to string pattern according to SimpleDateFormat.
*/
export function formatCurrent(aFormatPattern: string): string;

/**
* Formats current timestamp using a specified Locale.
* @returns {string} a formatted String representing current timestamp. If aFormatPattern is not valid current timestamp is returned as String.
* @param {string} aFormatPattern - a date to string pattern according to SimpleDateFormat.
* @param {Locale} aLocale - a locale. If aLocale is null the current locale (as of PortletContextUtil.getCurrentLocale()) will be used. If aLocale can not be resolved Locale.ENGLISH will be used.
*/
export function formatCurrent(aFormatPattern: string, aLocale: Locale): string;

/**
* Converts a Calendar to a timestamp.
* @returns {number} the timestamp representing aCalendar, or -1 if aCalendar is null.
* @param {Calendar} aCalendar - a Calendar.
*/
export function fromCalendar(aCalendar: Calendar): number;

/**
* Converts a Date to a timestamp.
* @returns {number} the timestamp representing aDate, or -1 if aDate is null.
* @param {Date} aDate - a Date.
*/
export function fromDate(aDate: Date): number;

/**
* Converts a Instant to a timestamp.
* @returns {number} aInstant timestamp representing aInstant, or -1 if aInstant is null.
* @param {Instant} aInstant - a Instant.
*/
export function fromInstant(aInstant: Instant): number;

/**
* Converts a LocalDateTime to a timestamp (using the system default ZoneId).
* @returns {number} aInstant timestamp representing aLocalDateTime, or -1 if aLocalDateTime is null.
* @param {LocalDateTime} aLocalDateTime - a LocalDateTime.
*/
export function fromLocalDateTime(aLocalDateTime: LocalDateTime): number;

/**
* Returns current timestamp.
* @returns {number} a long representing the current time.
*/
export function getTimestamp(): number;

/**
* Converts a timestamp to a Calendar.
* @returns {Calendar} the Calendar representing aTimestamp, or null if aTimestamp is negative.
* @param {number} aTimestamp - a timestamp.
*/
export function toCalendar(aTimestamp: number): Calendar;

/**
* Converts a timestamp to a Date.
* @returns {Date} the Date representing aTimestamp, or null if aTimestamp is negative.
* @param {number} aTimestamp - a timestamp.
*/
export function toDate(aTimestamp: number): Date;

/**
* Converts a timestamp to a Instant.
* @returns {Instant} the Instant representing aTimestamp, or null if aTimestamp is negative.
* @param {number} aTimestamp - a timestamp.
*/
export function toInstant(aTimestamp: number): Instant;

/**
* Converts a timestamp to a LocalDateTime (using the system default ZoneId).
* @returns {LocalDateTime} the LocalDateTime representing aTimestamp, or null if aTimestamp is negative.
* @param {number} aTimestamp - a timestamp.
*/
export function toLocalDateTime(aTimestamp: number): LocalDateTime;

declare namespace timestampUtil {
  export {
    format,
    formatCurrent,
    fromCalendar,
    fromDate,
    fromInstant,
    fromLocalDateTime,
    getTimestamp,
    toCalendar,
    toDate,
    toInstant,
    toLocalDateTime,
  };
}

export default timestampUtil;
