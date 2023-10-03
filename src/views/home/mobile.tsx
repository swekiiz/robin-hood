import { TabContext } from '@mui/lab'
import { Box, CircularProgress, Stack, Tab, Typography } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'

import { TaskList } from 'components/task-list/task-list'

import { useIntersactionObserver } from 'hooks/useIntersectionObserver'

import { useTasks } from 'contexts/tasks.context'

import { categorizeTasksByDate } from 'utils/tasks'

import { TaskStatus } from 'types'

import { LoadingWrapper, Root, StyledTabs } from './mobile.styles'

export type MobileProps = {
  fetchTask: (taskStatus: TaskStatus, pageNumber: number) => Promise<void>
}

export const Mobile = ({ fetchTask }: MobileProps) => {
  const [tab, setTab] = useState<TaskStatus>('todo')

  const { isLoading } = useTasks()

  return (
    <Root>
      <Stack direction="row" alignItems="end" justifyContent="space-between" mb={2}>
        <Typography variant="h5" color="primary" fontWeight={700}>
          Todo app
        </Typography>
        <Typography variant="caption" color="secondary.light">
          (*swipe left to delete)
        </Typography>
      </Stack>
      <TabContext value={tab}>
        <StyledTabs onChange={(_, newValue) => setTab(newValue)} value={tab} centered>
          <Tab label="Todo" value="todo" />
          <Tab label="Doing" value="doing" />
          <Tab label="Done" value="done" />
        </StyledTabs>
        <TaskList taskStatus={tab} fetchTask={fetchTask} />
        {isLoading[tab] && (
          <LoadingWrapper>
            <CircularProgress />
          </LoadingWrapper>
        )}
      </TabContext>
    </Root>
  )
}
