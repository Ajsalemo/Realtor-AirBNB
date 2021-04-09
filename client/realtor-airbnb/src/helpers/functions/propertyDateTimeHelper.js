import { format, parseISO } from 'date-fns';

export default function propertyDateTimeHelper(ISODateTime) {
  return format(parseISO(ISODateTime), "MM/dd/yyyy")
}
