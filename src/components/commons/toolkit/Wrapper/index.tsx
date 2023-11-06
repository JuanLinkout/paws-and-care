import React, { PropsWithChildren } from 'react'
import { config } from './config'

import { Container, StyledWrapper } from './styles'

export const Wrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <StyledWrapper {...{ ...config }}>{children}</StyledWrapper>
    </Container>
  )
}
