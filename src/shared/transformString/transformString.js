const transformString = (obj) => {
 const newObj = {};
 for (const [key, value] of Object.entries(obj)) {
  newObj[key] = Number(value);
 }
 return newObj;
};

export { transformString };
