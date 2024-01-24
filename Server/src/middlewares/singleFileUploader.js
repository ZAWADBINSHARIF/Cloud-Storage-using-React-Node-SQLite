const path = require('path');
const multer = require('multer');

function singleFileUploader(req, res, next) {
    const uploadFileDestination = `${__dirname}/../public/uploads/`;
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, uploadFileDestination);
        },
        filename: function (req, file, cb) {
            const fileExt = path.extname(file.originalname);

            const fileName =
                file.originalname
                    .replace(fileExt, "")
                    .toLowerCase()
                    .split(" ")
                    .join("-") +
                "-" +
                Date.now();
            req.body.fileName = fileName + fileExt
            cb(null, fileName + fileExt);
        }
    });

    const upload = multer({ storage }).single("upload_file");
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            console.log(err);
        } else if (err) {
            // An unknown error occurred when uploading.
            console.log(err);
        } else {
            next();
        }
    });
}

module.exports = singleFileUploader;