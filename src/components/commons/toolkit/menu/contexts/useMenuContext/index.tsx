// External Libraries
import React, {
  createContext,
  useContext,
  PropsWithChildren,
  useState
} from 'react'

// Types
import { IMenuContextData } from './types'

const MenuContext = createContext<IMenuContextData>({} as IMenuContextData)

const MenuContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  function toggleIsOpen() {
    setIsOpen(prev => !prev)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <MenuContext.Provider value={{ close, toggleIsOpen, isOpen }}>
      {children}
    </MenuContext.Provider>
  )
}

function useMenuContext(): IMenuContextData {
  const context = useContext(MenuContext)

  if (!Object.keys(context)?.length) {
    throw new Error('useMenuContext must be within a ContextProvider')
  }

  return context
}

export { MenuContextProvider, useMenuContext }
