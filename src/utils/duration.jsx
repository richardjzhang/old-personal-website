// @flow

type AcceptedFormat = 'h m s' | 'm s' | 'h m' | 'h' | 'm' | 's';

export const formatDuration = (
  duration: number,
  format: AcceptedFormat
): string => {
  const hours = format.includes('h') ? Math.floor(duration / 3600) : 0;
  const minutes = format.includes('m')
    ? Math.floor(duration / 60 - hours * 60)
    : 0;
  const seconds = format.includes('s')
    ? Math.floor(duration - hours * 3600 - minutes * 60)
    : 0;

  if (hours === 0 && minutes === 0 && seconds === 0)
    return `0${format.slice(-1)}`;

  const h = hours > 0 ? `${hours}h` : null;
  const m = (hours > 0 && seconds > 0) || minutes > 0 ? `${minutes}m` : null;
  const s = seconds > 0 ? `${seconds}s` : null;

  return [h, m, s].filter(value => value != null).join(' ');
};
