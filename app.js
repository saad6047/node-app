const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

app.use("/public", express.static(__dirname + "/public"));

app.use(express.json());

const router = require("./routes/router");
app.use(router);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
});
