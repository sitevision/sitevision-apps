import Calendar from '../../builtins/Calendar';
import Date from '../../builtins/Date';
import Locale from '../../builtins/Locale';

declare namespace dateUtil {
  function getCalendarAsISO8601String(aCalendar: Calendar): string;
  function getCalendarAsString(
    aFormatPattern: string,
    aCalendar: Calendar
  ): string;
  function getCalendarAsString(
    aFormatPattern: string,
    aCalendar: Calendar,
    aLocale: Locale
  ): string;

  function getDateAsISO8601String(aDate: Date): string;
  function getDateAsString(aFormatPattern: string, aDate: Date): string;
  function getDateAsString(
    aFormatPattern: string,
    aDate: Date,
    aLocale: Locale
  ): string;

  function getEditorFormatPattern(aLocale: Locale): string;

  function parseDate(aDateString: string, aFormatPattern: string);
  function parseDate(
    aDateString: string,
    aFormatPattern: string,
    aLocale: Locale
  );

  function toCalendar(aDate: Date): Calendar;
  function toDate(aCalendar: Calendar): Date;
}

export default dateUtil;
