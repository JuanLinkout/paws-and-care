// External Libraries
import React, { PropsWithChildren } from 'react'

// Components
import { Button } from '@components/buttons/Button'

// Service
import { useMenuContext } from '../contexts/useMenuContext'

// Styles
import { UnstyledButton } from './styles'

type Props = React.ComponentProps<typeof Button>

export const MenuButton: React.FC<PropsWithChildren<Props>> = ({
  children,
  ...rest
}) => {
  const { toggleIsOpen } = useMenuContext()

  if (children)
    return <UnstyledButton onClick={toggleIsOpen}>{children}</UnstyledButton>

  return <Button {...rest} onClick={toggleIsOpen} />
}
