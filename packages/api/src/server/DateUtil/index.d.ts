import Calendar from '../../builtins/Calendar';
import Date from '../../builtins/Date';
import Locale from '../../builtins/Locale';

export function getCalendarAsISO8601String(aCalendar: Calendar): string;
export function getCalendarAsString(
  aFormatPattern: string,
  aCalendar: Calendar
): string;
export function getCalendarAsString(
  aFormatPattern: string,
  aCalendar: Calendar,
  aLocale: Locale
): string;
export function getDateAsISO8601String(aDate: Date): string;
export function getDateAsString(aFormatPattern: string, aDate: Date): string;
export function getDateAsString(
  aFormatPattern: string,
  aDate: Date,
  aLocale: Locale
): string;
export function parseDate(aDateString: string, aFormatPattern: string);
export function parseDate(
  aDateString: string,
  aFormatPattern: string,
  aLocale: Locale
);
export function toCalendar(aDate: Date): Calendar;
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
