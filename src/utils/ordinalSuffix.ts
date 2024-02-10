export const ordinalSuffix = (number: number) => {
  const stringifiedNumber = String(number);
  const lastCharacter = stringifiedNumber[stringifiedNumber.length - 1];
  if (number <= 10) {
    switch (Number(lastCharacter)) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';

      default:
        return 'th';
    }
  } else {
    return 'th';
  }
};
