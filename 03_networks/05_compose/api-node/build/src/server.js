"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("dotenv").config();
require("./database");
require("reflect-metadata");
var enviroments_1 = require("./constants/enviroments");
var app = (0, express_1.default)();
var PORT = 3000;
app.get("/", function (request, response) {
    response.status(200).send("Hello World ericks!!");
});
app.listen(PORT, function () {
    console.log("listen on ".concat(PORT, ", env: ").concat(enviroments_1.enviroments.NODE_ENV, " \uD83D\uDC3A"));
});
