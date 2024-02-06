export const ordinalSuffix = (number: number) => {
  const stringifiedNumber = String(number);
  const lastCharacter = stringifiedNumber[stringifiedNumber.length - 1];
  switch (Number(lastCharacter)) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    case 11:
      return 'th';
    case 12:
      return 'th';
    case 13:
      return 'th';
    default:
      return 'th';
  }
};
