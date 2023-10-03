import { CircularProgress, Typography } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'

import { useBreakpoints } from 'hooks/useBreakpoints'

import { useTasks } from 'contexts/tasks.context'

import { RequestTimeoutException } from 'errors/request-timeout'

import { TaskStatus } from 'types'

import { Desktop } from './desktop'
import { FullScreenCenter } from './home.styles'
import { Mobile } from './mobile'

export const Home = () => {
  const { downMd } = useBreakpoints()

  const { fetch } = useTasks()

  const [isScreenLoading, setIsScreenLoading] = useState<boolean>(true)

  const [isError, setIsError] = useState<boolean>(false)
  const [errorMassage, setErrorMassage] = useState<string>('')

  const fetchTask = useCallback(
    async (taskStatus: TaskStatus, pageNumber: number) => {
      try {
        await fetch(taskStatus, pageNumber)
      } catch (error) {
        if (error instanceof RequestTimeoutException) {
          setErrorMassage(error.message)
        } else {
          setErrorMassage('something went wrong')
        }
        setIsError(true)
      }
    },
    [fetch],
  )

  useEffect(() => {
    const initTasks = async () => {
      await Promise.all([fetchTask('todo', 0), fetchTask('doing', 0), fetchTask('done', 0)])
      setIsScreenLoading(false)
    }
    initTasks()
  }, [])

  if (isScreenLoading) {
    return (
      <FullScreenCenter>
        <CircularProgress />
      </FullScreenCenter>
    )
  }

  if (isError) {
    return (
      <FullScreenCenter>
        <Typography variant="h3" color="error">
          {errorMassage || 'Unknown error'}
        </Typography>
      </FullScreenCenter>
    )
  }

  if (downMd) {
    return <Mobile fetchTask={fetchTask} />
  }

  return <Desktop fetchTask={fetchTask} />
}
