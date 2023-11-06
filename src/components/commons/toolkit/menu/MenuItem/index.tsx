// External Libraries
import React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Styles
import { Container } from './styles'
import theme from '@globals/theme'
import Link from '@components/toolkit/Link'
import { useMenuContext } from '../contexts/useMenuContext'

interface Props {
  label: string
  icon?: JSX.Element
  href?: string
  labelColor?: string
  onClick?: () => void
}

export const MenuItem: React.FC<Props> = ({
  label,
  labelColor,
  icon,
  href,
  onClick
}) => {
  const { close } = useMenuContext()

  if (href) {
    return (
      <Link href={href}>
        <Container as={'div'} onClick={close}>
          {icon}

          <Typography
            variant={'b2'}
            color={labelColor || theme.colors.textPrimary}
          >
            {label}
          </Typography>
        </Container>
      </Link>
    )
  }

  return (
    <Container
      as={'button'}
      onClick={() => {
        close()
        onClick()
      }}
    >
      {icon}

      <Typography variant={'b2'} color={labelColor || theme.colors.textPrimary}>
        {label}
      </Typography>
    </Container>
  )
}
