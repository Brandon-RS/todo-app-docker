import React, { useEffect, useState } from 'react'
import todoAPI from './api'
import { TodoType } from './types'
import Form from './components/Form'
import List from './components/List'
import Section from './components/Section'

const appTitle = 'To-Do App'

function App () {
  const [todoList, setTodoList] = useState<TodoType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await todoAPI.get('/todos')
      setTodoList(data)
      console.log(data[0])
    }
    fetchData()
  }, [])

  const addTodo = async (item: TodoType) => {
    const { data } = await todoAPI.post('/todos', item)
    setTodoList(oldList => [...oldList, data])
  }

  const removeTodo = async (id: string) => {
    await todoAPI.delete(`/todos/${id}`)
    setTodoList(oldList => oldList.filter(item => item._id !== id))
  }

  const editTodo = async (id: string, item: TodoType) => {
    await todoAPI.put(`/todos/${id}`, item)
  }

  return (
    <div className="ui container center aligned">
      <Section>
        <h1>{appTitle}</h1>
      </Section>

      <Section>
        <Form addTodo={addTodo} />
      </Section>

      <Section>
        <List
          editTodo={editTodo}
          removeTodo={removeTodo}
          todoList={todoList} />
      </Section>
    </div>
  )
}

export default App
