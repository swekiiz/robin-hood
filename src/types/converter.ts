import { TaskStatusConverterException } from 'errors/tasks'

import { TaskStatus, TasksDetails } from 'types'

import { GetTodoListResponse, TaskStatusDto } from './dto'
import { isTaskStatus } from './guard'

export const taskStatusConverter = (value: TaskStatusDto): TaskStatus => {
  const taskStatus = value.toLowerCase() as TaskStatus

  if (isTaskStatus(taskStatus)) {
    return taskStatus
  }

  throw new TaskStatusConverterException()
}

export const getTodoListResponseConverter = (response: GetTodoListResponse): TasksDetails => {
  return {
    ...response,
    tasks: response.tasks.map((tasks) => ({ ...tasks, status: taskStatusConverter(tasks.status) })),
  }
}
