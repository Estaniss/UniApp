import { DateManager } from 'scr/modules';

const SHORT_ISO_DATE = 'yyyy-MM-dd';
const SCREEN_DATE = 'dd/MM/yyyy';
const ABBREVIATED_DATE = 'dd-MMM-yy';
const FILE_TIMESTAMP = 'yyyyMMdd_HHmmss';

export const formatISOToScreenDate = (date: string): string =>
  DateManager.fromISO(date).toFormat(SCREEN_DATE);

export const formatShortISOToScreenDate = (date: string): string =>
  DateManager.fromFormat(date, SHORT_ISO_DATE).toFormat(SCREEN_DATE);

export const formatScreenDateToISO = (date: string): string =>
  DateManager.fromFormat(date, SCREEN_DATE).toFormat(SHORT_ISO_DATE);

export const formatShortDate = (date: Date): string =>
  DateManager.fromJSDate(date).toFormat(SCREEN_DATE);

export const formatAbbreviatedToScreen = (date: string): string =>
  DateManager.fromFormat(date, ABBREVIATED_DATE).toFormat(SCREEN_DATE);

export const getCurrentFilename = (): string =>
  DateManager.local().toFormat(FILE_TIMESTAMP);
