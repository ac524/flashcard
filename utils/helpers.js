module.exports = {
  values_match: (value1, value2) => {
    return value1 === value2;
  },
  has_multiple: (value) => {
    return value > 1;
  }
};
