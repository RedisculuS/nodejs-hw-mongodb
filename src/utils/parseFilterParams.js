const parseContactType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;
  const isValidType = (type) => ['work', 'home', 'personal'].includes(type);

  if (isValidType(type)) return type;
};

const parseBoolean = (value) => {
  if (value === 'true') return true;
  if (value === 'false') return false;
  return undefined;
};

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;

  const parsedType = parseContactType(type);
  const parsedIsFavourite = parseBoolean(isFavourite);

  return {
    contactType: parsedType,
    isFavourite: parsedIsFavourite,
  };
};
