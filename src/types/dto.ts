export type TaskStatusDto = 'TODO' | 'DOING' | 'DONE'

export type TaskDto = {
  id: string
  title: string
  description: string
  createdAt: string
  status: TaskStatusDto
}

export type GetTodoListResponse = {
  tasks: TaskDto[]
  pageNumber: number
  totalPages: number
}
