export const setExpirationDateFormat = (date: Date) => {
  const formattedDate = date.toISOString();
  console.log("formattedDate:", formattedDate);
  return formattedDate;
};
