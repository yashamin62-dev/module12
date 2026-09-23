const express = require("express");
const { getPage } = require("./app");

const app = express();

const PORT = process.env.PORT || 3000;
const VERSION = process.env.VERSION || "v1";
const FEATURE_ENABLED =
    process.env.FEATURE_ENABLED === "true";

app.get("/", (req, res) => {
    res.send(getPage(VERSION, FEATURE_ENABLED));
});

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});
