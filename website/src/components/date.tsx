import { parseISO, format } from "date-fns";

export function Date({ dateString }: { dateString: string }) {
  if (!dateString) return null;
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>;
}
