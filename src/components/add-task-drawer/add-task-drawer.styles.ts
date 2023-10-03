import { Stack, styled } from '@mui/material'

export const HeaderWrapper = styled('div')(({ theme }) => ({
  position: 'fixed',
  width: 440,
  top: 0,
  zIndex: 1,
}))

export const ContentsContainer = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(5),
  padding: theme.spacing(8, 3, 16, 3),
  height: '100%'
}))

