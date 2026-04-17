/**
 * Returns a random element from an array
 * <span style="color: hsl(var(--primary)); font-weight: 500;">@param</span> {Array} array - The array to sample from
 * <span style="color: hsl(var(--primary)); font-weight: 500;">@returns</span> {*} Random element
 */
function sample(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Argument must be an array');
  }
  if (array.length === 0) {
    return undefined;
  }

  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

module.exports = {
  sample
};
