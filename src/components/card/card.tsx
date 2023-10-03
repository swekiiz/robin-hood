import { Box, Divider, Typography } from '@mui/material'
import { forwardRef } from 'react'
import { Draggable } from 'react-beautiful-dnd'

import { Task, TaskStatus } from 'types'

import { StyledCard } from './card.styles'

type CardProps = {
  task: Task
  index: number
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ task, index }, ref) => {
  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(dragProvided, dragSnapshot) => (
        <div ref={ref}>
          <StyledCard
            ref={dragProvided.innerRef}
            isDragging={dragSnapshot.isDragging}
            {...dragProvided.draggableProps}
            {...dragProvided.dragHandleProps}
          >
            <Box mb={4}>
              <Typography variant="body2" color="primary" fontWeight={700} gutterBottom>
                {task.title}
              </Typography>
              <Typography variant="caption" fontWeight={700} color="secondary.contrastText" component="p">
                {task.description}
              </Typography>
            </Box>
            <Typography variant="caption" color="secondary.contrastText" fontSize={10} component="p">
              Create at : {new Date(task.createdAt).toUTCString().slice(0, -4)}
            </Typography>
          </StyledCard>
        </div>
      )}
    </Draggable>
  )
})
