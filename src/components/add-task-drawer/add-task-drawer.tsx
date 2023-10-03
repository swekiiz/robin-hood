import { Button, Drawer, Stack, TextField } from '@mui/material'
import { PropsWithChildren, useState } from 'react'
import { v4 as uuid } from 'uuid'

import { useDrawer } from 'contexts/drawer.context'
import { useTasks } from 'contexts/tasks.context'

import { TaskStatus } from 'types'

import { ContentsContainer, HeaderWrapper } from './add-task-drawer.styles'
import { DrawerHeader } from './drawer-header/drawer-header'
import { StatusOptions } from './status-options/status-options'

type DrawerUiProps = PropsWithChildren<{ isOpen: boolean; close: () => void }>

const DrawerUi = ({ close, isOpen, children }: DrawerUiProps) => {
  return (
    <Drawer
      anchor="right"
      onClose={close}
      open={isOpen}
      disableScrollLock={true}
      ModalProps={{
        disableScrollLock: false,
        BackdropProps: { invisible: true },
        sx: { zIndex: 1400 },
      }}
      PaperProps={{
        elevation: 24,
        sx: {
          maxWidth: '100%',
          width: 440,
          backgroundColor: (theme) => theme.palette.primary.contrastText,
        },
      }}
    >
      {children}
    </Drawer>
  )
}

export const AddTaskDrawer = () => {
  const { close, isOpen } = useDrawer()
  const { addTask } = useTasks()

  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [status, setStatus] = useState<TaskStatus>('todo')

  const handleClearValue = () => {
    setTitle('')
    setDescription('')
    setStatus('todo')
  }

  const handleClick = () => {
    addTask({
      id: uuid(),
      title,
      status,
      description,
      createdAt: new Date().toISOString(),
    })
    close()
    handleClearValue()
  }

  return (
    <DrawerUi isOpen={isOpen} close={close}>
      <HeaderWrapper>
        <DrawerHeader onClose={close} />
      </HeaderWrapper>
      <ContentsContainer>
        <Stack height="100%" justifyContent="space-between">
          <Stack direction="column" spacing={2}>
            <TextField
              variant="filled"
              label="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              size="small"
            />
            <TextField
              variant="filled"
              label="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              size="small"
            />
            <Stack direction="row">
              <StatusOptions onChange={(status) => setStatus(status)} value={status} />
            </Stack>
          </Stack>
          <Button variant="contained" color="primary" disableFocusRipple disableElevation onClick={handleClick}>
            add
          </Button>
        </Stack>
      </ContentsContainer>
    </DrawerUi>
  )
}
