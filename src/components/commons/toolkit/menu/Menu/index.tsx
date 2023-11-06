// External Libraries
import React, { PropsWithChildren } from 'react'

// Components

// Styles
import { Container } from './styles'
import { TippySelect } from '@components/toolkit/TippySelect'
import { useMenuContext } from '../contexts/useMenuContext'
import { modalAnimationPresets } from '@utils/functions/AnimationPresets'

export const Menu: React.FC<PropsWithChildren> = ({ children }) => {
  const { isOpen, close } = useMenuContext()

  return (
    <TippySelect
      visible={isOpen}
      onClose={close}
      content={<Container {...modalAnimationPresets}>{children}</Container>}
    />
  )
}
