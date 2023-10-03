import axios from 'axios'

import { BACKEND_URL } from 'constants/constants'

import { RequestTimeoutException } from 'errors/request-timeout'

import { TaskStatus, TasksDetails } from 'types'
import { getTodoListResponseConverter } from 'types/converter'
import { GetTodoListResponse } from 'types/dto'

const httpClient = axios.create({
  baseURL: BACKEND_URL,
  timeout: 5000,
})

export const getTodoListData = async (status: TaskStatus, page: number): Promise<TasksDetails> => {
  try {
    const response = await httpClient.get<GetTodoListResponse>('/todo-list', {
      params: { limit: 10, status: status.toUpperCase(), isAsc: true, sortBy: 'createdAt', offset: page },
    })

    const rawTasks = getTodoListResponseConverter(response.data)

    // * Backend sent duplicate `taskId`
    const tasks: TasksDetails = {
      ...rawTasks,
      tasks: rawTasks.tasks.map((task) => ({ ...task, id: `${status}-${task.id}` })),
    }

    if (response.status === 200) {
      return tasks
    }

    throw new Error(`[getTodoListData] response with status ${response.status}`)
  } catch (error) {
    if (!axios.isAxiosError(error)) {
      throw error
    }

    if (error.code === 'ECONNABORTED') {
      throw new RequestTimeoutException()
    }

    throw new Error(error.message)
  }
}
