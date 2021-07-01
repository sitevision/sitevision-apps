import Calendar from '../../builtins/Calendar';
import Date from '../../builtins/Date';
import Locale from '../../builtins/Locale';

/**
* Formats a calendar according to the ISO8601 specification.
* @returns {string} aString the calendar date formatted as a ISO8601 string, or null if aCalendar is null 
* @param {Calendar} aCalendar - a Calendar that needs to be formatted
*/
export function getCalendarAsISO8601String(aCalendar: Calendar): string;

/**
* Formats the date of a Calendar according to a SimpleDateFormat pattern.
* @returns {string} returns a String representation of aCalendar according to aFormatPattern (and resolved Locale).Returns null if formatting fails or aCalendar is null 
* @param {string} aFormatPattern - date to string pattern according to SimpleDateFormat. Default pattern will be used if aFormatPattern is null or blank
* @param {Calendar} aCalendar - the Calendar
*/
export function getCalendarAsString(aFormatPattern: string, aCalendar: Calendar): string;

/**
* Formats the date of a Calendar according to a SimpleDateFormat pattern and a given Locale.
* @returns {string} returns a String representation of aCalendar according to aFormatPattern (and resolved Locale).Returns null if formatting fails or aCalendar or aLocale is null 
* @param {string} aFormatPattern - date to string pattern according to SimpleDateFormat. Default pattern will be used if aFormatPattern is null or blank
* @param {Calendar} aCalendar - the Calendar
* @param {Locale} aLocale - the Locale
*/
export function getCalendarAsString(aFormatPattern: string, aCalendar: Calendar, aLocale: Locale): string;

/**
* Formats a date according to the ISO8601 specification.
* @returns {string} the date formatted as a ISO8601 string, or null if aDate is null 
* @param {Date} aDate - a Date that needs to be formatted
*/
export function getDateAsISO8601String(aDate: Date): string;

/**
* Formats a Date according to a SimpleDateFormat pattern.
* @returns {string} returns a String representation of aDate according to aFormatPattern (and resolved Locale).Returns null if formatting fails or aDate is null 
* @param {string} aFormatPattern - date to string pattern according to SimpleDateFormat. Default pattern will be used if aFormatPattern is null or blank
* @param {Date} aDate - the Date
*/
export function getDateAsString(aFormatPattern: string, aDate: Date): string;

/**
* Formats a Date according to a SimpleDateFormat pattern using a given Locale.
* @returns {string} returns a String representation of aDate according to aFormatPattern (and resolved Locale).Returns null if formatting fails or aDate or aLocale is null 
* @param {string} aFormatPattern - date to string pattern according to SimpleDateFormat. Default pattern will be used if aFormatPattern is null or blank
* @param {Date} aDate - the Date
* @param {Locale} aLocale - the Locale
*/
export function getDateAsString(aFormatPattern: string, aDate: Date, aLocale: Locale): string;

/**
* Gets the date format pattern used in the Sitevision editor for a specific Locale.
* @returns {string} the date format pattern used in the Sitevision editor that corresponds to aLocale.If aLocale is null then the current locale (as ofPortletContextUtil.getCurrentLocale())is used to locate the format pattern. If no pattern exist for aLocale then the pattern that corresponds toLocale.ENGLISH will be returned. 
* @param {Locale} aLocale - the Locale that specifies the date format pattern
*/
export function getEditorFormatPattern(aLocale: Locale): string;

/**
* Converts a date string to a Date using a SimpleDateFormat pattern.
* @returns {Date} a Date representation of aDateStr, or null if parsing fails or any method argument (aDateStr, aFormatPattern) is null or blank 
* @param {string} aDateStr - the string representation of a Date
* @param {string} aFormatPattern - string to date pattern according to SimpleDateFormat
*/
export function parseDate(aDateStr: string, aFormatPattern: string): Date;

/**
* Converts a date string to a Date using a SimpleDateFormat pattern and a given Locale.
* @returns {Date} a Date representation of aDateStr, or null if parsing fails or any method argument (aDateStr, aFormatPattern, aLocale) is null or blank 
* @param {string} aDateStr - the string representation of a Date
* @param {string} aFormatPattern - string to date pattern according to SimpleDateFormat
* @param {Locale} aLocale - the Locale
*/
export function parseDate(aDateStr: string, aFormatPattern: string, aLocale: Locale): Date;

/**
* Converts a Date to a Calendar.
* @returns {Calendar} a Calendar representing aDate, or null if aDate is null 
* @param {Date} aDate - a Date
*/
export function toCalendar(aDate: Date): Calendar;

/**
* Converts a Calendar to a Date.
* @returns {Date} a Date representing aCalendar, or null if aCalendar is null 
* @param {Calendar} aCalendar - a Calendar
*/
export function toDate(aCalendar: Calendar): Date;

declare namespace dateUtil {
  export {
    getCalendarAsISO8601String,
    getCalendarAsString,
    getCalendarAsString,
    getDateAsISO8601String,
    getDateAsString,
    getDateAsString,
    getEditorFormatPattern,
    parseDate,
    parseDate,
    toCalendar,
    toDate,
  };
}

export default dateUtil;
