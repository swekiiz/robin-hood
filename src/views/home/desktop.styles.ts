import { Container, styled } from '@mui/material'

export const Screen = styled(Container)(() => ({
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const BoardContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  gap: theme.spacing(4),
  height: '100vh',
}))
