import { ReactNode, createContext, useCallback, useContext, useState } from 'react'

type DrawerContextState = {
  isOpen: boolean
  open: () => void
  close: () => void
}

const initialState: DrawerContextState = {
  isOpen: false,
  open: () => {},
  close: () => {},
}

export const DrawerContext = createContext<DrawerContextState>(initialState)

type DrawerProviderProps = {
  children?: ReactNode
}

export const DrawerProvider = ({ children }: DrawerProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState.isOpen)

  const open = useCallback(() => {
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <DrawerContext.Provider
      value={{
        isOpen,
        open,
        close,
      }}
    >
      {children}
    </DrawerContext.Provider>
  )
}

export const DrawerConsumer = DrawerContext.Consumer

export const useDrawer = () => useContext(DrawerContext)
