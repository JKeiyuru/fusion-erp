// ============================================
// FILE: backend/src/common/utils/date.util.ts
// Location: backend/src/common/utils/date.util.ts
// ============================================
import { format, parse, addDays, addMonths, startOfMonth, endOfMonth } from 'date-fns';

export class DateUtil {
  static format(date: Date, formatStr: string = 'yyyy-MM-dd'): string {
    return format(date, formatStr);
  }

  static parse(dateStr: string, formatStr: string = 'yyyy-MM-dd'): Date {
    return parse(dateStr, formatStr, new Date());
  }

  static addDays(date: Date, days: number): Date {
    return addDays(date, days);
  }

  static addMonths(date: Date, months: number): Date {
    return addMonths(date, months);
  }

  static startOfMonth(date: Date): Date {
    return startOfMonth(date);
  }

  static endOfMonth(date: Date): Date {
    return endOfMonth(date);
  }

  static getDaysBetween(start: Date, end: Date): number {
    const diffTime = Math.abs(end.getTime() - start.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  static isOverdue(dueDate: Date): boolean {
    return new Date() > dueDate;
  }

  static getFinancialYear(date: Date = new Date()): { start: Date; end: Date } {
    const year = date.getFullYear();
    const month = date.getMonth();
    
    // Financial year starts in January
    if (month >= 0) {
      return {
        start: new Date(year, 0, 1),
        end: new Date(year, 11, 31),
      };
    } else {
      return {
        start: new Date(year - 1, 0, 1),
        end: new Date(year - 1, 11, 31),
      };
    }
  }
}
