import { DateObject, DateType, Day } from "./types";
declare type Operator = 'less' | 'more' | 'equal';
export declare type Validator = (format: string, val: string) => boolean;
export declare const getIndexOfDay: (day: Day) => number;
export declare const getYearBlock: (year: number) => number;
export declare const getDaysInMonth: (year: number, month: number) => number;
export declare const getFirstDayOfMonth: (year: number, month: number) => number;
export declare const getDateInfo: (d?: string | number | Date | undefined) => Record<string, any>;
export declare const convertToDate: (d?: string | number | Date | DateObject | undefined, format?: string | undefined, validator?: Validator | undefined) => Date | undefined;
export declare const compareDecade: (d: DateType | undefined, operator: Operator, currDecade: number) => boolean;
export declare const compareDate: (d: DateType | undefined, operator: Operator, currYear: number, currMonth?: number | undefined, currDate?: number | undefined) => boolean;
export declare const translateToString: (format: string, d?: Date | undefined) => string;
export declare const translateToDate: (format: string, val: string, validator?: Validator | undefined) => Date | undefined;
export {};
