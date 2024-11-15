"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.text());
// miller ware 
const logger = ((req, res, next) => {
    console.log(req.url, req.method, req.hostname);
});
const useRouter = express_1.default.Router();
app.use('/api/v1/users', useRouter);
useRouter.post('/create-user', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "successfully data pass",
        data: user
    });
});
// app.get('/', (req: Request, res: Response) => {
//     console.log(req.query);
//     res.send('I am serving bdCalling It Ltd as a front end developer')
// })
app.get('/', (req, res, next) => {
    try {
        console.log(something);
    }
    catch (error) {
        next(error);
        // console.log(error);
        // res.status(400).json({
        //     success:false,
        //     message:'Tumar page aka ne nai'
        // })
    }
});
app.post('/:userId', (req, res) => {
    console.log(req.params);
    res.json({
        success: true,
        message: 'Data successfully get'
    });
});
// all error handling the code 
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: "Message Not Found"
    });
});
// gobble  error 
app.use((error, req, res, next) => {
    res.status(400).json({
        success: false,
        message: "Page Not Found"
    });
});
exports.default = app;
