import { describe, expect, it } from '@jest/globals'

import { Task } from 'types'

import { categorizeTasksByDate, isDuplicateTaskId } from './tasks'

describe('categorizeTasksByDate', () => {
  it('should categorize tasks by their createdAt date', () => {
    const tasks: Task[] = [
      {
        id: '1',
        title: 'Task 1',
        description: 'Description 1',
        createdAt: '2023-10-03T10:00:00.000Z',
        status: 'todo',
      },
      {
        id: '2',
        title: 'Task 2',
        description: 'Description 2',
        createdAt: '2023-10-03T12:00:00.000Z',
        status: 'doing',
      },
      {
        id: '3',
        title: 'Task 3',
        description: 'Description 3',
        createdAt: '2023-10-04T10:00:00.000Z',
        status: 'done',
      },
    ]

    const result = categorizeTasksByDate(tasks)

    expect(result).toEqual({
      '03/10/2023': [tasks[0], tasks[1]],
      '04/10/2023': [tasks[2]],
    })
  })
})

describe('isDuplicateTaskId', () => {
  it('should return false if there are no duplicate task IDs', () => {
    const tasks: Task[] = [
      { id: '1', title: 'Task 1', description: 'Description 1', createdAt: '2023-10-03T10:00:00.000Z', status: 'todo' },
      {
        id: '2',
        title: 'Task 2',
        description: 'Description 2',
        createdAt: '2023-10-03T12:00:00.000Z',
        status: 'doing',
      },
    ]

    const result = isDuplicateTaskId(tasks)

    expect(result).toBeFalsy()
  })

  it('should return true if there are duplicate task IDs', () => {
    const tasks: Task[] = [
      { id: '1', title: 'Task 1', description: 'Description 1', createdAt: '2023-10-03T10:00:00.000Z', status: 'todo' },
      {
        id: '1',
        title: 'Task 2',
        description: 'Description 2',
        createdAt: '2023-10-03T12:00:00.000Z',
        status: 'doing',
      },
    ]

    const result = isDuplicateTaskId(tasks)

    expect(result).toBeTruthy()
  })
})
