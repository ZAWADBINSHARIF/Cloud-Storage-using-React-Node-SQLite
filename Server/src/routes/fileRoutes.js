const express = require('express');
const { getUploadedFiles, uploadFile, downloadUploadedFile, removeUploadedFile } = require('../controllers/fileController');
const singleFileUploader = require('../middlewares/singleFileUploader');

const router = express.Router();

router.get("/all_files", getUploadedFiles);
router.get("/download/:filename", downloadUploadedFile)
router.post("/upload", singleFileUploader, uploadFile)
router.delete("/remove/:filename", removeUploadedFile)

module.exports = router