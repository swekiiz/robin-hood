import CloseIcon from '@mui/icons-material/Close'
import { Box, Stack, Typography } from '@mui/material'
import { forwardRef } from 'react'
import { Draggable } from 'react-beautiful-dnd'

import { Task, TaskStatus } from 'types'

import { Close, StyledCard } from './card.styles'

type CardProps = {
  task: Task
  index: number
  removeTask: (taskId: string, status: TaskStatus) => void
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ task, index, removeTask }, ref) => {
  const handleClick = () => removeTask(task.id, task.status)

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
              <Stack direction="row" width="100%" justifyContent="center" alignItems="start">
                <Box flex={1}>
                  <Typography variant="body2" color="primary" fontWeight={700} gutterBottom>
                    {task.title}
                  </Typography>
                </Box>
                <Close size="small" onClick={handleClick} disableRipple>
                  <CloseIcon color="inherit" />
                </Close>
              </Stack>
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
