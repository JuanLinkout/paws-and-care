// External Libraries
import React, { PropsWithChildren } from 'react'

// Styles
import { MenuContextProvider } from '../contexts/useMenuContext'

export const MenuContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <MenuContextProvider>
      <div>{children}</div>
    </MenuContextProvider>
  )
}
