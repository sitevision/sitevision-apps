import Calendar from '../../builtins/Calendar';
import Date from '../../builtins/Date';
import Instant from '../../builtins/Instant';
import LocalDateTime from '../../builtins/LocalDateTime';
import Locale from '../../builtins/Locale';

declare namespace timestampUtil {
  function format(aTimestamp: number, aFormatPattern: string): string;
  function format(
    aTimestamp: number,
    aFormatPattern: string,
    aLocale: Locale
  ): string;
  function formatCurrent(aFormatPattern: string): string;
  function formatCurrent(aFormatPattern: string, aLocale: Locale): string;
  function fromCalendar(aCalendar: Calendar): number;
  function fromDate(aDate: Date): number;
  function fromInstant(aInstant: Instant): number;
  function fromLocalDateTime(aLocalDateTime: LocalDateTime): number;
  function getTimestamp(): number;
  function toCalendar(aTimestamp: number): Calendar;
  function toDate(aTimestamp: number): Date;
  function toInstant(aTimestamp: number): Instant;
  function toLocalDateTime(aTimestamp: number): LocalDateTime;
}

export default timestampUtil;
