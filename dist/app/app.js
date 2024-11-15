"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('I am serving bdCalling It Ltd as a front end developer');
});
app.get('/', (req, res) => {
    console.log(req.body);
    res.json({
        success: true,
        message: 'Confirm the data'
    });
});
app.get('/userId', (req, res) => {
    console.log(req.params);
    res.json({
        success: true,
        message: 'Data successfully get'
    });
});
exports.default = app;
