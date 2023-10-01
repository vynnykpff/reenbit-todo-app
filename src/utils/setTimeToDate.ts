export const setMinutesToDate = (date: Date, minutes: number): Date => {
  const newDate = new Date(date);
  newDate.setTime(newDate.getTime() + minutes * 60 * 1000);
  return newDate;
};

export const setMaxTimeToDate = (date: Date): Date => {
  const nextDay = new Date(date);
  nextDay.setDate(nextDay.getDate() + 1);
  nextDay.setHours(23, 59, 0, 0);
  return nextDay;
};

export const setMinTimeToDate = (date: Date | null): Date => {
  const currentDate = new Date();

  if (date && setMinutesToDate(date, -5) > new Date()) {
    currentDate.setHours(0, 0, 0, 0);
    return new Date(currentDate);
  }

  return setMinutesToDate(currentDate, 5);
};
