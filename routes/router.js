const express = require("express");
const router = express();

// root request for avoiding error

router.get("/", async (req, res) => {
    return res.status(200).send();
});

// test route

router.get("/test", async (req, res) => {
    return res.status(200).send({ message: "Everithing is okay" });
});

module.exports = router;
