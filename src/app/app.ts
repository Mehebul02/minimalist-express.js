
import express, { NextFunction, Request, Response } from 'express'
const app = express()

app.use(express.json())
app.use(express.text())

// miller ware 

const logger = ((req: Request, res: Response, next: NextFunction) => {
    console.log(req.url, req.method, req.hostname);
})

const useRouter = express.Router()
app.use('/api/v1/users', useRouter)

useRouter.post('/create-user', (req: Request, res: Response) => {
    const user = req.body
    console.log(user);

    res.json({
        success: true,
        message: "successfully data pass",
        data: user
    })
})


// app.get('/', (req: Request, res: Response) => {
//     console.log(req.query);
//     res.send('I am serving bdCalling It Ltd as a front end developer')
// })

app.get('/', (req: Request, res: Response,next:NextFunction) => {
   try{
    console.log(something);
   }
   catch(error){
    next(error)
    // console.log(error);
    // res.status(400).json({
    //     success:false,
    //     message:'Tumar page aka ne nai'
    // })
   }
    
})

app.post('/:userId', (req: Request, res: Response) => {
    console.log(req.params);
    res.json({
        success: true,
        message: 'Data successfully get'
    })
})

// all error handling the code 

app.all("*", (req: Request, res: Response) => {
    res.status(400).json({
        success: false,
        message: "Message Not Found"

    })
})


// gobble  error 

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    res.status(400).json({
        success: false,
        message: "Page Not Found"
    })
})

export default app