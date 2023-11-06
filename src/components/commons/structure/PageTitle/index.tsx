// External Libraries
import React from 'react'

// Components

// Styles
import { Container, TextContainer } from './styles'
import { Typography } from '@components/toolkit/Typography'
import theme from '@globals/theme'

interface Props {
  title: string
  description: string

  endComponent?: JSX.Element
}

export const PageTitle: React.FC<Props> = ({
  description,
  title,
  endComponent
}) => {
  return (
    <Container>
      <TextContainer>
        <Typography
          marginBottom="2px"
          variant="h4"
          color={theme.colors.textPrimary}
        >
          {title}
        </Typography>

        {description ? (
          <Typography variant="b2" color={theme.colors.textSecondary}>
            {description}
          </Typography>
        ) : null}
      </TextContainer>

      {endComponent}
    </Container>
  )
}
