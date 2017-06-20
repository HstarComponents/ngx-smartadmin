const path = require('path');
const root = (...args) => {
  return path.join(__dirname, '../', ...args);
};

module.exports = {
  root
};
