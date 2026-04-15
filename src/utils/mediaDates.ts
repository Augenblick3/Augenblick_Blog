type MediaDateShape = {
  dateConsumed?: Date;
  dateConsumedEnd?: Date;
};

function formatDate(date: Date, locale = 'zh-CN') {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function getMediaStartDate(data: MediaDateShape) {
  return data.dateConsumed ?? data.dateConsumedEnd!;
}

export function getMediaEndDate(data: MediaDateShape) {
  return data.dateConsumedEnd ?? data.dateConsumed!;
}

export function getMediaSortDate(data: MediaDateShape) {
  return getMediaEndDate(data);
}

export function getMediaMonthKey(data: MediaDateShape, locale = 'zh-CN') {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
  }).format(getMediaSortDate(data));
}

export function formatMediaDateLabel(data: MediaDateShape, locale = 'zh-CN') {
  const start = getMediaStartDate(data);
  const end = data.dateConsumedEnd ?? data.dateConsumed;

  if (!end || start.getTime() === end.getTime()) {
    return formatDate(start, locale);
  }

  return `${formatDate(start, locale)} — ${formatDate(end, locale)}`;
}
