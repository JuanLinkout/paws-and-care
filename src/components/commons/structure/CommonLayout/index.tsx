// External Libraries
import React, { PropsWithChildren } from 'react'

// Components

// Styles
import { Container, Content, PageContainer } from './styles'
import { Sidebar } from '@components/structure/Sidebar'
import { Header } from '@components/structure/Header'

export const CommonLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Sidebar />

      <Content>
        <Header />

        <PageContainer>{children}</PageContainer>
      </Content>
    </Container>
  )
}
