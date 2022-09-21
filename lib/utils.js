export const capitalizeEveryWord = (str) => {
  return `${str}`
    .trim()
    .split(" ")
    .map((el) => {
      return el.charAt(0).toUpperCase() + el.substring(1).toLowerCase();
    })
    .join(" ");
};

export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
};
