// External Libraries
import React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'
import Link from '@components/toolkit/Link'

// Styles
import { Container, IconContainer } from './styles'
import theme from '@globals/theme'

interface Props {
  label: string
  path: string
  Icon: React.FC<{ selected: boolean }>
  selected?: boolean
}

export const MenuItem: React.FC<Props> = ({ Icon, label, path, selected }) => {
  return (
    <Link href={path}>
      <Container selected={selected}>
        <IconContainer>
          <Icon selected={selected} />
        </IconContainer>
        <Typography
          variant={selected ? 's2' : 'b2'}
          color={
            selected ? theme.colors.textPrimary : theme.colors.textSecondary
          }
        >
          {label}
        </Typography>
      </Container>
    </Link>
  )
}
