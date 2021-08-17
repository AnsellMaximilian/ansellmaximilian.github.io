/**
 * Selects array items based on values given
 * @param Array
 * @param Array
 * @param String
 *
 * @return Array
 */
exports.getFromArray = function getFromArray(array, values, identifier) {
  return values.map((value) => {
    return array.find((arrayItem) => {
      return arrayItem[identifier] === value;
    });
  });
  // return array
  //   .filter((arrayItem) => {
  //     if (!!identifier) {
  //       return values.includes(arrayItem[identifier]);
  //     }
  //     return values.includes(arrayItem);
  //   });
};
