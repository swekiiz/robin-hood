import { alpha, styled } from '@mui/material'

export const StyledCard = styled('div', {
  shouldForwardProp: (props: string) => !['isDragging', 'isDisappear'].includes(props),
})<{
  isDragging?: boolean
  isDisappear?: boolean
}>(({ theme, isDragging = false, isDisappear = false }) => ({
  width: '100%',
  padding: theme.spacing(2),
  opacity: isDisappear ? 0.2 : isDragging ? 0.6 : 1,
  marginBottom: theme.spacing(2),
  borderRadius: 10,
  background: alpha(theme.palette.background.paper, 0.15),
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(6px)',
  border: `2px solid ${alpha(theme.palette.primary.main, 0.27)}`,
}))
