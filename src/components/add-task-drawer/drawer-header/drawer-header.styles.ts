import { styled } from '@mui/material'

export const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(1, 3),
  gap: theme.spacing(3),
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',

  [theme.breakpoints.down('md')]: {
    maxWidth: 440,
    width: '100vw',
  },
}))

export const Contents = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(0.5),
  alignItems: 'center',
}))
