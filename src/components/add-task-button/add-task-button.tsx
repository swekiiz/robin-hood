import AddIcon from '@mui/icons-material/Add'
import { SvgIcon, Tooltip } from '@mui/material'

import { ContentsWrapper, StyledButton } from './add-task-button.styles'

type AddTaskButtonProps = {
  onClick?: () => void
}

export const AddTaskButton = ({ onClick }: AddTaskButtonProps) => (
  <Tooltip title="Add Task">
    <ContentsWrapper onClick={onClick}>
      <StyledButton>
        <SvgIcon>
          <AddIcon />
        </SvgIcon>
      </StyledButton>
    </ContentsWrapper>
  </Tooltip>
)
