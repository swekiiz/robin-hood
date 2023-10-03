import { Stack, Typography } from '@mui/material'

import { TaskStatus } from 'types'

import { ChipContainer, StyledChip } from './status-options-styles'

type Option = {
  label: string
  value: TaskStatus
}

const options: Option[] = [
  {
    label: 'Todo',
    value: 'todo',
  },
  {
    label: 'Doing',
    value: 'doing',
  },
  {
    label: 'Done',
    value: 'done',
  },
]

type StatusOptionsProps = {
  value?: TaskStatus
  onChange?: (status: TaskStatus) => void
}

export const StatusOptions = ({ onChange, value }: StatusOptionsProps) => {
  return (
    <Stack spacing={1}>
      <Typography color="text.secondary" variant="overline">
        Status
      </Typography>
      <ChipContainer>
        {options.map((option) => (
          <StyledChip
            key={option.value}
            label={option.label}
            onClick={() => onChange?.(option.value)}
            isSelected={option.value === value}
          />
        ))}
      </ChipContainer>
    </Stack>
  )
}
