import { Task } from 'types'

import { formatDate } from './date'

export const categorizeTasksByDate = (tasks: Task[]): Record<string, Task[]> => {
  return tasks.reduce(
    (acc, cur) => {
      const date = formatDate(new Date(cur.createdAt))
      if (acc?.[date] === undefined) {
        acc[date] = [cur]
      } else {
        acc[date].push(cur)
      }
      return acc
    },
    {} as Record<string, Task[]>,
  )
}

export const isDuplicateTaskId = (tasks: Task[]): boolean => {
  const taskIds = tasks.map((task) => task.id)
  return taskIds.some((id, index) => taskIds.indexOf(id) !== index)
}
