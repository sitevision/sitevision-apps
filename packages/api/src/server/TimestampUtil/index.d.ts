import Calendar from '../../builtins/Calendar';
import Date from '../../builtins/Date';
import Instant from '../../builtins/Instant';
import LocalDateTime from '../../builtins/LocalDateTime';
import Locale from '../../builtins/Locale';

export function format(aTimestamp: number, aFormatPattern: string): string;
export function format(
  aTimestamp: number,
  aFormatPattern: string,
  aLocale: Locale
): string;
export function formatCurrent(aFormatPattern: string): string;
export function formatCurrent(aFormatPattern: string, aLocale: Locale): string;
export function fromCalendar(aCalendar: Calendar): number;
export function fromDate(aDate: Date): number;
export function fromInstant(aInstant: Instant): number;
export function fromLocalDateTime(aLocalDateTime: LocalDateTime): number;
export function getTimestamp(): number;
export function toCalendar(aTimestamp: number): Calendar;
export function toDate(aTimestamp: number): Date;
export function toInstant(aTimestamp: number): Instant;
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
