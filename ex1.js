function getLongestStrings(arr) {
  if (arr.length === 0) return [];


  const maxLength = Math.max(...arr.map((str) => str.length));

  return arr.filter((str) => str.length === maxLength);
}

