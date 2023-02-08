
import { RequestHandler } from 'express'


const logging: RequestHandler = (req, res, next) => {

    const start = Date.now()
    const info = `${req.method}\t${req.url}`
    next()
    console.log(`${info}\t${Date.now()-start}ms\t${res.statusCode}\t${res.statusMessage}`)
}

export default logging
