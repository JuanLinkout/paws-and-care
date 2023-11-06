import React from 'react'

import { Container, Handle } from './styles'

interface Props {
  enabled?: boolean
  disabled?: boolean
  onClick: (value: boolean) => void
}

export const Switch: React.FC<Props> = ({ enabled, disabled, onClick }) => {
  const spring = {
    type: 'spring',
    stiffness: 400,
    damping: 30
  }

  return (
    <Container
      disabled={disabled}
      enabled={enabled}
      onClick={() => onClick(!enabled)}
    >
      <Handle layout transition={spring} />
    </Container>
  )
}
