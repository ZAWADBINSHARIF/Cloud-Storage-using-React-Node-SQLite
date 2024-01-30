function getUploadedFiles(req, res) {
    res.send('<h1>/all_files path</h1>');
}

function uploadFile(req, res) {
    res.send('<h1>/upload path</h1>');
}

function downloadUploadedFile(req, res) {
    const filename = req.params.filename;
    // the path where uploaded file keep.
    const file = `${__dirname}/../public/uploads/${filename}`;
    console.log(file);
    res.download(file);
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

