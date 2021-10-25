const bcrypt = require("bcryptjs");
const crypto = {
  create(data) {
    return bcrypt.hashSync(data, 12);
  },
  validate(data, hash) {
    return bcrypt.compareSync(data, hash);
  },
};

module.exports = crypto;
