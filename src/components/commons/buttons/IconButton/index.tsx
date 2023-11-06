// External Libraries
import React from 'react'

// Styles
import { Container } from './styles'
import { IMargin } from '@services/types/css'

interface Props extends IMargin {
  icon: JSX.Element
  disabled?: boolean
  onClick?: () => void
  as?: any
  size?: string
  color?: string
  label?: string
  hasBorder?: boolean
  borderColor?: string
  hoverColor?: string
}

export const IconButton: React.FC<Props> = ({
  icon,
  onClick,
  size,
  color,
  disabled,
  hasBorder = false,
  borderColor,
  as,
  ...rest
}) => {
  return (
    <Container
      as={as}
      onClick={onClick}
      size={size}
      color={color}
      hasBorder={hasBorder}
      borderColor={borderColor}
      disabled={disabled}
      {...rest}
    >
      {icon}
    </Container>
  )
}
