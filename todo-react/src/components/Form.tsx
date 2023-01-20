import { useRef, useState } from 'react'

const Form = ({ addTodo }: { addTodo: Function }) => {
  const [inputValue, setInputValue] = useState('')
  const todoInputRef = useRef<any>()

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value)
  }

  const handleFormSubmit = (e: any) => {
    e.preventDefault()
    if (!inputValue.trim()) return
    addTodo({ id: '5', title: inputValue, completed: false })
    setInputValue('')
  }

  const clearInput = () => {
    todoInputRef.current.focus()
    setInputValue('')
  }

  return (
    <form className='ui form' onSubmit={handleFormSubmit}>
      <div className="ui grid center aligned">
        <div className="row">
          <div className="column five wide">
            <input
              value={inputValue}
              onChange={handleInputChange}
              type="text"
              autoFocus={true}
              ref={todoInputRef}
              placeholder='Enter something todo'
            />
          </div>
          <div className="column one wide">
            <button
              type='submit'
              className='ui button circular icon green'>
              <i className='plus icon white'></i>
            </button>
          </div>
          <div className="column one wide">
            <button
              onClick={clearInput}
              className='ui button circular icon red'>
              <i className='remove icon white'></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Form
