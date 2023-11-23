export function ParsedTimeSince(date: Date | string): string {
  const now = new Date(Date.now());

  if (typeof date == "string") date = new Date(date);

  const diffTime = Math.abs(now.getTime() - date.getTime());

  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays) {
    return `${diffDays}d`;
  }

  const diffHours = Math.floor(diffTime / (1000 * 60 * 60));

  if (diffHours) {
    return `${diffHours}h`;
  }

  const diffMinutes = Math.floor(diffTime / (1000 * 60));

  if (diffMinutes) {
    return `${diffMinutes}m`;
  }

  return "new";
}

export function DateToCalendarFormat(date: Date | string) {
  if (typeof date === "string") date = new Date(date);
  return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
}

export default {
  ParsedTimeSince,
  DateToCalendarFormat,
};
