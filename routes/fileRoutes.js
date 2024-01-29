const express = require('express');
const router = express.Router();

router.get('/all_files', (req, res) => {
    res.send('<h1>/all_files path</h1>');
});
router.get('/download/:filename', (req, res) => {
    const fileName = req.params.filename;
    res.send('<h1>/download path and filename is ' + fileName + '</h1>');
});
router.post('/upload', (req, res) => {
    res.send('<h1>/upload path</h1>');
});
router.delete('/remove/:filename', (req, res) => {
    res.send('<h1>/remove path</h1>');
});

module.exports = router;