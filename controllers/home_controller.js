const fs = require('fs');
const multer = require('multer');
const csv = require('csv-parser');


// MULTER DISK STORAGE 
const storage = multer.diskStorage({
    destination: './uploads',
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    },
});
const upload = multer({ storage: storage });

let uploadedFiles = [];

// HOME CONTROLLER FOE HOME PAGE 
module.exports.home = function (req, res) {
    res.render('index', { uploadedFiles });
}



// UPLOAD FILE FUNCTION 
module.exports.upload = (req, res) => {
    if (!req.file) {
        return res.redirect('/');
    }
    console.log(req.file);
    const uploadedFileName = req.file.originalname;
    uploadedFiles.push(uploadedFileName);
    res.redirect('/');
};


// VIEW FILE FUNCTION 
module.exports.view = function (req, res) {
    // return res.end("Jai shree ram");
    const filePath = `./uploads/${req.params.filename}`;
    const results = [];

    fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            const headers = results.length > 0 ? Object.keys(results[0]) : [];
            res.render('csv-view', { headers, data: results, filename: req.params.filename });
        });
}
