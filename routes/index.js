var express = require('express');
var router = express.Router();

const multer = require('multer');

const storage = multer.diskStorage({
  destination: './uploads',
  filename: function (req, file, callback) {
      callback(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

const homeController = require("../controllers/home_controller");

/* GET home page. */

router.get('/', homeController.home);
router.post('/upload' ,upload.single('csvFile'),homeController.upload);
router.get('/view/:filename',homeController.view);

module.exports = router;