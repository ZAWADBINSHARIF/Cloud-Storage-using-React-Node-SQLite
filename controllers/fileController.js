function getUploadedFiles(req, res) {
    res.send('<h1>/all_files path</h1>');
}

function uploadFile(req, res) {
    res.send('<h1>/upload path</h1>');
}

function downloadUploadedFile(req, res) {
    const fileName = req.params.filename;
    res.send('<h1>/download path and filename is ' + fileName + '</h1>');
}

function removeUploadedFile(req, res) {
    res.send('<h1>/remove path</h1>');
}

module.exports = {
    getUploadedFiles,
    uploadFile,
    downloadUploadedFile,
    removeUploadedFile
};