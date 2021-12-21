"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("./database");
require("reflect-metadata");
var app = (0, express_1.default)();
var PORT = 3000;
app.get("/", function (request, response) {
    response.status(200).send("Hello World sss!!");
});
app.listen(PORT, function () {
    console.log("listen on ".concat(PORT, " \uD83D\uDC3A"));
});
