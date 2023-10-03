import CloseIcon from '@mui/icons-material/Close'
import { IconButton, SvgIcon, Typography } from '@mui/material'

import { Contents, Root } from './drawer-header.styles'

type DrawerHeaderProps = {
  onClose?: () => void
}

export const DrawerHeader = ({ onClose }: DrawerHeaderProps) => {
  return (
    <Root>
      <Typography variant="body1" textTransform="capitalize" color="primary">
        add task
      </Typography>
      <Contents>
        <IconButton color="inherit" onClick={onClose}>
          <SvgIcon sx={{ color: (theme) => theme.palette.secondary.contrastText }}>
            <CloseIcon color="inherit" />
          </SvgIcon>
        </IconButton>
      </Contents>
    </Root>
  )
}
