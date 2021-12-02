import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { VscAdd, VscCheck } from 'react-icons/vsc'
import api from '../../services/api'

import { Container, Card } from './styles'

interface ToDoListTypes {
  id: number
  name: string,
  complete: boolean
}

interface IFormInput{
  itemName: string,
}

const ToDoList: React.FC = () => {
  const url = document.URL

  const projectIdWithBar = new URL(url).pathname

  const [, projectId] = projectIdWithBar.split('/')

  const onSubimit: SubmitHandler<IFormInput> = async ({ itemName }: IFormInput) => {
    if (!itemName) {
      console.log('temnad')
    } else {
      await api.post(`/newToDoIten/${projectId}`, {
        itemName
      })
    }
  }

  const [toDoListItens, setToDoList] = useState<ToDoListTypes[]>([])

  useEffect(() => {
    async function getToDoList () {
      await api.get<ToDoListTypes[]>(`/getToDo/${projectId}`).then((response) => {
        setToDoList(response.data)
      })
    }
    getToDoList()
  }, [])

  useEffect(() => {
    async function getToDoList () {
      await api.get<ToDoListTypes[]>(`/getToDo/${projectId}`).then((response) => {
        setToDoList(response.data)
      })
    }
    getToDoList()
  }, [onSubimit, completeToDoFunc])

  const { register, handleSubmit } = useForm<IFormInput>({})

  async function completeToDoFunc (toDoId: number) {
    await api.post(`/completeToDo/${projectId}`, {
      toDoId
    })
  }

  return (
    <Container>
      <h1>ToDo List</h1>

      <form onSubmit={handleSubmit(onSubimit)} >
        <input {...register('itemName')} type="text" placeholder={'Nova tarefa'} />
        <button><VscAdd/></button>
      </form>

      <ul>
        {toDoListItens.map(toDoItens => {
          return (
            <Card key={toDoItens.id}>
              <strong>{toDoItens.name}</strong>
              <button onClick={() => completeToDoFunc(toDoItens.id)} className={'button'} >
                <VscCheck/>
              </button>
            </Card>
          )
        })}
      </ul>
    </Container>
  )
}

export { ToDoList }
