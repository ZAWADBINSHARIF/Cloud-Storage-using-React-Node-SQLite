const express = require('express');
const {
    removeUploadedFile,
    uploadFile,
    downloadUploadedFile,
    getUploadedFiles } = require('../controllers/fileController');

const router = express.Router();

router.get('/all_files', getUploadedFiles);
router.get('/download/:filename', downloadUploadedFile);
router.post('/upload', uploadFile);
router.delete('/remove/:filename', removeUploadedFile);

module.exports = router;