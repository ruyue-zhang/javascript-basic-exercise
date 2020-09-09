export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (!array) {
    throw new Error('Flatten undefined or null array');
  } else if (array.length === 0) {
    return [];
  } else {
    const flattenArray = [];
    Object.keys(array).forEach((key) => {
      if (Array.isArray(array[key])) {
        flattenArray.push(...array[key]);
      } else {
        flattenArray.push(array[key]);
      }
    });
    return flattenArray;
  }
}
