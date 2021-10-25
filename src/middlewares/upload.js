const multer = require("multer");
const { v4: uuid } = require("uuid");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve("src", "public", "uploads"));
  },
  filename: function (req, file, cb) {
    const extensao = file.originalname.split(".").pop();
    const filename = `${uuid()}.${extensao}`;
    cb(null, filename);
  },
});

const upload = multer({ storage });

//uploadFile.array("nome-campo")
module.exports = upload;
