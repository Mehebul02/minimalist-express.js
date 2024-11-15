
import express, { Request, Response } from 'express'
const app = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('I am serving bdCalling It Ltd as a front end developer')
})

app.get('/', (req: Request, res: Response) => {
    console.log(req.body);

    res.json({
        success: true,
        message: 'Confirm the data'
    })
})

app.get('/userId', (req: Request, res: Response) => {
    console.log(req.params);
    res.json({
        success: true,
        message: 'Data successfully get'
    })
})


export default app