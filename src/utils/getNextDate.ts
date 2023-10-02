export const getNextDate = (dateString: string) => {
  const dateParts = dateString.split(" ");

  const datePart = dateParts[0];
  const timePart = dateParts[1];

  const [day, month, year] = datePart.split(".").map(Number);
  const [hours, minutes] = timePart.split(":").map(Number);

  const currentMonth = month - 1;

  const date = new Date(year, currentMonth, day, hours, minutes);

  const nextDay = 24;
  date.setHours(date.getHours() + nextDay);

  const newDay = date.getDate().toString().padStart(2, "0");
  const newMonth = (date.getMonth() + 1).toString().padStart(2, "0");
  const newYear = date.getFullYear();
  const newHours = date.getHours().toString().padStart(2, "0");
  const newMinutes = date.getMinutes().toString().padStart(2, "0");

  return `${newDay}.${newMonth}.${newYear} ${newHours}:${newMinutes}`;
};
