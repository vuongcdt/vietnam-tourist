const express = require("express");
const path = require("path");
const adminMdw = require("../middlewares/adminMdw");
const { asyncWrapper } = require("../middlewares/asyncWrapper");
const router = express.Router();

router.get("/", adminMdw, asyncWrapper(async(req, res) => {
    res.sendFile(path.join(__dirname,'../public','main.799d2eba.js'))
}));

module.exports = router; 