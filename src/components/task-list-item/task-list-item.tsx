import { Box, Stack, Typography } from '@mui/material'
import { PanInfo, motion, useAnimationControls } from 'framer-motion'
import { forwardRef } from 'react'

import { Task, TaskStatus } from 'types'

type TaskListItemProps = {
  task: Task
  removeTask: (taskId: string, status: TaskStatus) => void
}

export const TaskListItem = forwardRef<HTMLDivElement, TaskListItemProps>(({ task, removeTask }, ref) => {
  const controls = useAnimationControls()

  const handleDragEnd = async (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -150 || info.velocity.x < -800) {
      await controls.start({ x: '-100%', transition: { duration: 0.3 } })
      removeTask(task.id, task.status)
    } else {
      controls.start({ x: 0, opacity: 1, transition: { duration: 0.5 } })
    }
  }

  return (
    <motion.div
      whileTap={{ cursor: 'grabbing' }}
      layout
      transition={{ type: 'spring', stiffness: 600, damping: 30 }}
      drag="x"
      dragDirectionLock
      onDragEnd={handleDragEnd}
      animate={controls}
    >
      <Stack ref={ref} px={2}>
        <Typography variant="body2" fontWeight={700} color="secondary.contrastText" gutterBottom>
          {task.title}
        </Typography>
        <Box pl={1}>
          <Typography variant="caption" color="secondary.contrastText">
            {task.description}
          </Typography>
        </Box>
      </Stack>
    </motion.div>
  )
})
