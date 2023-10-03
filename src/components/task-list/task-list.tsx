import { Box, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { useMemo } from 'react'

import { TaskListItem } from 'components/task-list-item/task-list-item'

import { useIntersactionObserver } from 'hooks/useIntersectionObserver'

import { useTasks } from 'contexts/tasks.context'

import { isRefPosition } from 'utils/ref-position'
import { categorizeTasksByDate } from 'utils/tasks'

import { TaskStatus } from 'types'

type TaskListProps = {
  taskStatus: TaskStatus
  fetchTask: (taskStatus: TaskStatus, pageNumber: number) => Promise<void>
}

export const TaskList = ({ taskStatus, fetchTask }: TaskListProps) => {
  const { isLoading, hasMore, nextPage, tasks, removeTask } = useTasks()

  const ref = useIntersactionObserver(
    isLoading[taskStatus] || !hasMore[taskStatus],
    () => fetchTask(taskStatus, nextPage[taskStatus]),
    [taskStatus],
  )

  const [dates, taskList] = useMemo(() => {
    const categorizedTasks = categorizeTasksByDate(tasks[taskStatus])
    return [Object.keys(categorizedTasks), Object.values(categorizedTasks)]
  }, [taskStatus, tasks])

  return (
    <motion.div transition={{ type: 'tween', stiffness: 600, damping: 30 }}>
      <Stack spacing={3}>
        {dates.map((date, dateIndex) => (
          <Stack key={date} spacing={1}>
            <Box>
              <Typography variant="body2" fontWeight={500} color="primary.light">
                {date}
              </Typography>
            </Box>
            {taskList[dateIndex].map((task, taskListIndex) => (
              <TaskListItem
                key={task.id}
                task={task}
                removeTask={removeTask}
                ref={
                  isRefPosition(dateIndex, dates.length) && taskList[dateIndex].length - 1 === taskListIndex
                    ? ref
                    : undefined
                }
              />
            ))}
          </Stack>
        ))}
      </Stack>
    </motion.div>
  )
}
