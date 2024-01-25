const express = require("express");
const fileRoutes = require("./routes/fileRoutes.js");
const cors = require('cors')


const app = express();
const PORT = 4000;

app.use(cors());

app.get("/", (req, res) => {
    res.send("<H1>Got it</H1>");
});

app.use('/api', fileRoutes);

app.listen(PORT, () => console.log("Server is listening on port: http://localhost:" + PORT));