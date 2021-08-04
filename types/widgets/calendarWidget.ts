// types
import type { ISOString } from 'tools/types/common';

export interface CalendarWidget {
  id: string;
  date: ISOString;
  start: string;
  title: string;
  end: string;
}
