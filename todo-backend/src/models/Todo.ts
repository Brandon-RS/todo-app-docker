import { model, Schema } from 'mongoose'

const TodoSchema = new Schema({
  title: String,
  completed: Boolean
})

export default model('Todo', TodoSchema)
