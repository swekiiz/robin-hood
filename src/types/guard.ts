import { TaskStatus } from 'types'

export const isTaskStatus = (value: unknown): value is TaskStatus => {
  return typeof value === 'string' && ['todo', 'doing', 'done'].includes(value)
}
