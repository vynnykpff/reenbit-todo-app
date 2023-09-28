export const getExpirationDate = (dateString: string) => {
  const dateParts = dateString.split(" ");

  const datePart = dateParts[0];
  const timePart = dateParts[1];

  const [day, month, year] = datePart.split(".").map(Number);
  const [hours, minutes] = timePart.split(":").map(Number);

  const date = new Date(year, month - 1, day, hours, minutes);

  date.setHours(date.getHours() + 24);

  const newDay = date.getDate().toString().padStart(2, "0");
  const newMonth = (date.getMonth() + 1).toString().padStart(2, "0");
  const newYear = date.getFullYear();
  const newHours = date.getHours().toString().padStart(2, "0");
  const newMinutes = date.getMinutes().toString().padStart(2, "0");

  return `${newDay}.${newMonth}.${newYear} ${newHours}:${newMinutes}`;
};
