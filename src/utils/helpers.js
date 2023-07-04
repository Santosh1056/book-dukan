export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("en-In", {
    style: "currency",
    currency: "INR",
  }).format(number / 1);
  return newNumber;
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === "colors") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};
