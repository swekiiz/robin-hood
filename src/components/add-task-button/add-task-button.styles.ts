import { ButtonBase, styled } from '@mui/material'

export const ContentsWrapper = styled('div')(({ theme }) => ({
  position: 'fixed',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '50%',
  bottom: 0,
  right: 0,
  boxShadow: theme.shadows[16],
  margin: theme.spacing(4),
  zIndex: theme.zIndex.speedDial,
}))

export const StyledButton = styled(ButtonBase)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: '50%',
  padding: '10px',
  color: theme.palette.primary.contrastText,
}))
