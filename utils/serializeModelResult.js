const serializeModelResult = (result) => {
  return Array.isArray(result)
    ? result.map((resultRow) => resultRow.toJSON())
    : result.toJSON();
};

module.exports = serializeModelResult;
