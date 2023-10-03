import { Box, Chip, styled } from '@mui/material'

export const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(2, 3, 0, 3),
  gap: theme.spacing(3),
  alignItems: 'center',
  justifyContent: 'center',
}))

export const ColorIcon = styled(Box, {
  shouldForwardProp: (props: string) => !['color'].includes(props),
})<{ color: string }>(({ color }) => ({
  backgroundColor: color,
  borderRadius: '50%',
  flexShrink: 0,
  height: 24,
  width: 24,
}))

export const StyledChip = styled(Chip, {
  shouldForwardProp: (props: string) => !['isSelected'].includes(props),
})<{ isSelected: boolean }>(({ theme, isSelected }) => ({
  borderColor: isSelected ? theme.palette.primary.main : theme.palette.secondary.main,
  borderRadius: 12,
  borderStyle: 'solid',
  borderWidth: 1,
  fontWeight: 400,
  fontSize: theme.typography.body1.fontSize,
  color: theme.palette.primary.main,
}))

export const ChipContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
}))
