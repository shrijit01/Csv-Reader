var express = require('express');
var router = express.Router();
const fs = require('fs');
const multer = require('multer');
const csv = require('csv-parser');


let uploadedFiles = [];

const storage = multer.diskStorage({
  destination: './uploads',
  filename: function (req, file, callback) {
      callback(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

/* GET home page. */

router.get('/', (req, res) => {
  res.render('index', { uploadedFiles });
});


router.post('/upload', upload.single('csvFile'), (req, res) => {
  if (!req.file) {
      return res.redirect('/');
  }

  const uploadedFileName = req.file.originalname;
  uploadedFiles.push(uploadedFileName);

  res.redirect('/');
});

router.get('/view/:filename', (req, res) => {
  const filePath = `./uploads/${req.params.filename}`;
  const results = [];

  fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
          const headers = results.length > 0 ? Object.keys(results[0]) : [];
          res.render('csv-view', { headers, data: results ,filename:req.params.filename});
      });
});


module.exports = router;