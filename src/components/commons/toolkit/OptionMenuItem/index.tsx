// External Libraries
import React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'
import Link from '@components/toolkit/Link'

// Styles
import { Container } from './styles'
import theme from '@globals/theme'

interface Props {
  label: string
  icon: JSX.Element
  onClick?: () => void
}

export const OptionMenuItem: React.FC<Props> = ({ label, icon, onClick }) => {
  return (
    <Container as={'button'} onClick={onClick}>
      {icon}

      <Typography variant={'b2'} color={theme.colors.textPrimary}>
        {label}
      </Typography>
    </Container>
  )
}
