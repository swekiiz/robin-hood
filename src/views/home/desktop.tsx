import { DragDropContext, DropResult } from 'react-beautiful-dnd'

import { Board } from 'components/board/board'

import { useIntersactionObserver } from 'hooks/useIntersectionObserver'

import { useTasks } from 'contexts/tasks.context'

import { reorder } from 'utils/reorder'

import { TaskStatus } from 'types'
import { isTaskStatus } from 'types/guard'

import { BoardContainer, Screen } from './desktop.styles'

export type DesktopProps = {
  fetchTask: (taskStatus: TaskStatus, pageNumber: number) => Promise<void>
}

export const Desktop = ({ fetchTask }: DesktopProps) => {
  const { isLoading, hasMore, nextPage, tasks, setTasks } = useTasks()

  const todoRef = useIntersactionObserver(isLoading['todo'] || !hasMore['todo'], () =>
    fetchTask('todo', nextPage['todo']),
  )
  const doingRef = useIntersactionObserver(isLoading['doing'] || !hasMore['doing'], () =>
    fetchTask('doing', nextPage['doing']),
  )
  const doneRef = useIntersactionObserver(isLoading['done'] || !hasMore['done'], () =>
    fetchTask('done', nextPage['done']),
  )

  const onDragStart = () => {
    if (window.navigator.vibrate) {
      window.navigator.vibrate(100)
    }
  }

  const onDragEnd = (result: DropResult) => {
    if (!isTaskStatus(result.source.droppableId)) {
      // * `result.source.droppableId` is wrong type
      return
    }

    if (!result.destination) {
      const currentBoard = [...tasks[result.source.droppableId]]
      currentBoard.splice(result.source.index, 1)
      setTasks({
        ...tasks,
        [result.source.droppableId]: currentBoard,
      })
      return
    }

    if (!isTaskStatus(result.destination.droppableId)) {
      // * `result.destination.droppableId` is wrong type
      return
    }

    if (
      result.destination.index === result.source.index &&
      result.source.droppableId === result.destination.droppableId
    ) {
      // * No change position
      return
    }

    const currentBoard = [...tasks[result.source.droppableId]]
    const nextBoard = [...tasks[result.destination.droppableId]]
    const target = tasks[result.source.droppableId][result.source.index]

    // * same board
    if (result.source.droppableId === result.destination.droppableId) {
      const reordered = reorder(currentBoard, result.source.index, result.destination.index)
      setTasks({
        ...tasks,
        [result.source.droppableId]: reordered,
      })
      return
    }

    // * diff board
    currentBoard.splice(result.source.index, 1)
    nextBoard.splice(result.destination.index, 0, target)
    setTasks({
      ...tasks,
      [result.source.droppableId]: currentBoard,
      [result.destination.droppableId]: nextBoard,
    })
  }

  return (
    <Screen>
      <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <BoardContainer>
          <Board ref={todoRef} header="todo" tasks={tasks.todo} droppableId="todo" />
          <Board ref={doingRef} header="doing" tasks={tasks.doing} droppableId="doing" />
          <Board ref={doneRef} header="done" tasks={tasks.done} droppableId="done" />
        </BoardContainer>
      </DragDropContext>
    </Screen>
  )
}
