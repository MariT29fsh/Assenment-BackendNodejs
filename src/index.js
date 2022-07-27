import 'dotenv/config'
import express,{json} from "express";
import http from 'http'
import connectDb from "./utils/database.js";
import routes from './routes/index.js'
import cookieParser from 'cookie-parser'

let app = express();
const port=3001
const server = http.createServer(app)

app.use(json())

app.use(cookieParser())


server.listen(port, () => {
  console.log(`Listening on port ${port}`)
  connectDb()
  routes(app)
})