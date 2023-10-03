import { Paper, Theme, styled } from '@mui/material'

export const Root = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: 300,
  height: '100%',
  alignSelf: 'stretch',
  backgroundColor: theme.palette.secondary.dark,
}))

export const getBoardBackgroundColor = (theme: Theme, isDraggingOver: boolean, isDraggingFrom: boolean): string => {
  if (isDraggingOver) {
    return theme.palette.success.dark
  }
  if (isDraggingFrom) {
    return theme.palette.error.dark
  }

  return theme.palette.secondary.main
}

type CardContainerProps = {
  isDraggingOver?: boolean
  isDraggingFrom?: boolean
}

export const Wrapper = styled('div', {
  shouldForwardProp: (props: string) => !['isDraggingOver', 'isDraggingFrom'].includes(props),
})<CardContainerProps>(({ theme, isDraggingOver = false, isDraggingFrom = false }) => ({
  backgroundColor: getBoardBackgroundColor(theme, isDraggingOver, isDraggingFrom),
  height: '100%',
  transition: 'background-color 0.2s ease, opacity 0.1s ease',
  userSelect: 'none',
  borderRadius: 16,
}))

export const DropZone = styled('div')(({ theme }) => ({
  minHeight: 200,
  paddingBottom: theme.spacing(2),
}))

export const ScrollContainer = styled('div')(({ theme }) => ({
  overflowX: 'hidden',
  overflowY: 'scroll',
  height: 'calc(100% - 72px)',
  padding: theme.spacing(0, 2),
  scrollBehavior: 'smooth',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}))
