/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import dbConnection from '../db/config'
import todoRoutes from '../routes/todo.routes'

dotenv.config()
const app = Express()

export default class Server {
  port: string
  uri: string
  todoPath: string

  constructor () {
    this.port = process.env.PORT ?? '5000'
    this.uri = process.env.URI ?? ''
    this.todoPath = '/todos'

    void this.connectDB()
    this.middlewares()
    this.routes()
  }

  async connectDB () {
    await dbConnection(this.uri)
  }

  middlewares () {
    app.use(Express.json())
    app.use(cors())
    app.use(Express.static('public'))
  }

  routes () {
    app.use(this.todoPath, todoRoutes)
  }

  listen () {
    app.listen(this.port, () => {
      console.log(`Server listening on PORT: ${this.port}`)
    })
  }
}
