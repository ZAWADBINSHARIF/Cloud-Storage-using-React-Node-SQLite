const express = require("express");
const fileRoutes = require("./routes/fileRoutes.js");

const app = express();
const PORT = 1337;

app.get("/", (req, res) => { res.send("<H1>Server is running 🚀</H1>"); });

// start from here
app.use('/api', fileRoutes);


app.listen(PORT, () => console.log("Server is listening on port: http://localhost:" + PORT));