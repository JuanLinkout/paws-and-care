// External Libraries
import React from 'react'

// Components
import { Typography } from '../Typography'

// Services
import { TypographyVariants } from '../Typography/types'
import { getInitials } from '@utils/functions/getInitials'

// Styles
import { Container, ContainerProps } from './styles'
import theme from '@globals/theme'

interface Props extends ContainerProps {
  label: string
  variant?: TypographyVariants
  labelColor?: string
}

export const Avatar: React.FC<Props> = ({
  label,
  variant = 's3',
  labelColor = theme.colors.white,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Typography variant={variant} color={labelColor}>
        {getInitials(label)}
      </Typography>
    </Container>
  )
}
