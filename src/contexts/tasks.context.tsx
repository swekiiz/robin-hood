import { getTodoListData } from 'apis/todo-list-api'
import { Dispatch, ReactNode, SetStateAction, createContext, useCallback, useContext, useEffect, useState } from 'react'

import { Task, TaskStatus } from 'types'

type TasksContextState = {
  tasks: Record<TaskStatus, Task[]>
  setTasks: Dispatch<SetStateAction<Record<TaskStatus, Task[]>>>
  hasMore: Record<TaskStatus, boolean>
  nextPage: Record<TaskStatus, number>
  isLoading: Record<TaskStatus, boolean>
  fetch: (taskStatus: TaskStatus, pageNumber: number) => Promise<void>
  addTask: (task: Task) => void
  removeTask: (taskId: string, status: TaskStatus) => void
}

const initialState: TasksContextState = {
  tasks: { doing: [], done: [], todo: [] },
  setTasks: () => {},
  hasMore: { doing: false, done: false, todo: false },
  nextPage: { doing: 0, done: 0, todo: 0 },
  isLoading: { doing: false, done: false, todo: false },
  fetch: async () => {},
  addTask: () => {},
  removeTask: () => {},
}

export const TasksContext = createContext<TasksContextState>(initialState)

type TasksProviderProps = {
  children?: ReactNode
}

export const TasksProvider = ({ children }: TasksProviderProps) => {
  const [tasks, setTasks] = useState<Record<TaskStatus, Task[]>>(initialState.tasks)

  const [hasMore, setHasMore] = useState<Record<TaskStatus, boolean>>(initialState.hasMore)
  const [nextPage, setNextPage] = useState<Record<TaskStatus, number>>(initialState.nextPage)
  const [isLoading, setIsLoading] = useState<Record<TaskStatus, boolean>>(initialState.isLoading)

  const fetch = useCallback(async (taskStatus: TaskStatus, pageNumber: number) => {
    setIsLoading((prev) => ({ ...prev, [taskStatus]: true }))
    await getTodoListData(taskStatus, pageNumber)
      .then((tasksDetails) => {
        setHasMore((prev) => ({ ...prev, [taskStatus]: tasksDetails.totalPages > tasksDetails.pageNumber + 1 }))
        setTasks((prev) => ({ ...prev, [taskStatus]: [...prev[taskStatus], ...tasksDetails.tasks] }))
        setNextPage((prev) => ({ ...prev, [taskStatus]: prev[taskStatus] + 1 }))
      })
      .catch((error) => {
        throw error
      })
    setIsLoading((p) => ({ ...p, [taskStatus]: false }))
  }, [])

  const addTask = useCallback((task: Task) => {
    setTasks((prev) => ({ ...prev, [task.status]: [...prev[task.status], task] }))
  }, [])

  const removeTask = useCallback(
    (taskId: string, status: TaskStatus) => {
      const shallow = [...tasks[status]]
      setTasks((prev) => ({
        ...prev,
        [status]: shallow.filter((task) => task.id !== taskId),
      }))
    },
    [tasks],
  )

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        hasMore,
        nextPage,
        isLoading,
        fetch,
        addTask,
        removeTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export const TasksConsumer = TasksContext.Consumer

export const useTasks = () => useContext(TasksContext)
