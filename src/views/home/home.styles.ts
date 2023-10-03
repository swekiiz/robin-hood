import { Container, styled } from '@mui/material'

const Screen = styled(Container)(() => ({
  width: '100%',
  minHeight: '100vh',
}))

export const FullScreenCenter = styled(Screen)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))
