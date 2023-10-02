export const checkOnValidField = (item: string) => {
  return item.replace(/[@#№$%^&*()\\[\]_+={}<>/|]/g, "");
};
