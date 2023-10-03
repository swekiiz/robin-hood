export type TaskStatus = 'todo' | 'doing' | 'done'

export type Task = {
  id: string
  title: string
  description: string
  createdAt: string
  status: TaskStatus
}

export type TasksDetails = {
  tasks: Task[]
  pageNumber: number
  totalPages: number
}

export type CategorizedTask = Record<TaskStatus, Task[]>

export type AddTaskOptions = Pick<Task, 'title' | 'description' | 'status'>
