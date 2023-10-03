import { Box, Typography } from '@mui/material'
import { forwardRef } from 'react'
import { Droppable } from 'react-beautiful-dnd'

import { Card } from 'components/card/card'

import { useTasks } from 'contexts/tasks.context'

import { isRefPosition } from 'utils/ref-position'

import { Task, TaskStatus } from 'types'

import { DropZone, Root, ScrollContainer, Wrapper } from './board.styles'

type BoardProps = {
  header: string
  tasks?: Task[]
  droppableId: TaskStatus
}

export const Board = forwardRef<HTMLDivElement, BoardProps>(({ header, tasks = [], droppableId }, ref) => {
  const { removeTask } = useTasks()
  return (
    <Root>
      <Droppable droppableId={droppableId}>
        {(dropProvided, dropSnapshot) => (
          <Wrapper
            isDraggingOver={dropSnapshot.isDraggingOver}
            isDraggingFrom={Boolean(dropSnapshot.draggingFromThisWith)}
            {...dropProvided.droppableProps}
          >
            <Box py={1} px={2}>
              <Typography variant="h6" color="primary.dark" fontWeight={700} textTransform="capitalize">
                {header}
              </Typography>
            </Box>
            <ScrollContainer>
              <DropZone ref={dropProvided.innerRef}>
                {tasks.map((task, index) => (
                  <Card
                    key={task.id}
                    ref={isRefPosition(index, tasks.length) ? ref : undefined}
                    task={task}
                    index={index}
                    removeTask={removeTask}
                  />
                ))}
                {dropProvided.placeholder}
              </DropZone>
            </ScrollContainer>
          </Wrapper>
        )}
      </Droppable>
    </Root>
  )
})
