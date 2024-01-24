const fs = require('fs');
const Database = require('better-sqlite3');
const db = new Database('database.db', { verbose: console.log });

function getUploadedFiles(req, res) {
    const data = db.prepare('SELECT * FROM files').all();

    res.status(200).json({ data });
}

function uploadFile(req, res) {
    const filename = req.body.fileName;
    db.exec(`CREATE TABLE IF NOT EXISTS files (id INTEGER PRIMARY KEY AUTOINCREMENT, filename TEXT NOT NULL)`);
    const insert = db.prepare('INSERT INTO files (filename) VALUES (?)');
    insert.run(filename);

    res.status(200).json({ filename });
}

function downloadUploadedFile(req, res) {
    const filename = req.params.filename;
    const file = `${__dirname}/../public/uploads/${filename}`;
    res.download(file);
}

function removeUploadedFile(req, res) {
    const filename = req.params.filename;
    db.prepare('DELETE FROM files WHERE filename=?').run(filename);
    fs.unlink(`${__dirname}/../public/uploads/${filename}`, (err) => {
        if (err) throw err;
        console.log('File deleted!');
        res.status(200).json("File deleted");
    });
}

module.exports = {
    getUploadedFiles,
    uploadFile,
    downloadUploadedFile,
    removeUploadedFile
};