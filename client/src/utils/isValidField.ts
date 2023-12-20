export const isValidField = (item: string) => {
  return item.replace(/[@#№$%^&*()\\[\]_+={}<>/|]/g, "");
};
