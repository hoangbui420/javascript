function getCountElement(arr) {
  return arr.reduce((acc, item) => {
    // Nếu phần tử đã tồn tại trong object, tăng giá trị lên 1
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
}
