const express = require("express");
const router = express();

// root request for avoiding error

router.get("/", async (req, res) => {
    return res.status(200).send();
});

// test route

router.get("/test", async (req, res) => {
    return res
        .status(200)
        .send({
            message: "Hey you are watching code with saad youtube channel",
        });
});

module.exports = router;
