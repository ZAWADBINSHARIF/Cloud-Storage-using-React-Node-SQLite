const express = require('express');
const singleFileUploader = require('../middlewares/singleFileUploader.js');
const {
    removeUploadedFile,
    uploadFile,
    downloadUploadedFile,
    getUploadedFiles } = require('../controllers/fileController');

const router = express.Router();

router.get('/all_files', getUploadedFiles);
router.get('/download/:filename', downloadUploadedFile);
router.post("/upload", singleFileUploader, uploadFile);
router.delete('/remove/:filename', removeUploadedFile);

module.exports = router;