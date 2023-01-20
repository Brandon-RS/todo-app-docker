/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import Todo from '../models/Todo'

const router = Router()

router.get('/', async (_req: any, res: any) => {
  const todos = await Todo.find()
  res.json(todos)
})

router.post('/', async (req, res) => {
  const todo = new Todo(req.body)
  await todo.save()
  res.json(todo)
})

router.put('/:id', async (req, res) => {
  const id = req.params.id
  const tempTodo = req.body
  // const todo = await Todo.findByIdAndUpdate(id, tempTodo, { returnOriginal: false })
  const todo = await Todo.findByIdAndUpdate(id, tempTodo, { new: true })
  res.json(todo)
})

router.delete('/:id', async (req, res) => {
  const todo = await Todo.findByIdAndDelete(req.params.id)
  res.json(todo)
})

export default router
