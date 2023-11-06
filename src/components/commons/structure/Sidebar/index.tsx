// External Libraries
import React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'
import { MenuItem } from './components/MenuItem'

import Logo from '@assets/logo/pawscarelogo.png'

// Services
import { MENU_SECTIONS } from './constants'

// Styles
import { Body, Container, Header, MenuOptions, Section } from './styles'
import theme from '@globals/theme'
import { useRouter } from 'next/router'
import Image from 'next/image'

export const Sidebar: React.FC = () => {
  const router = useRouter()

  return (
    <Container>
      <Header>
        <Image src={Logo.src} width={175} height={40} alt={'Logo'} />
      </Header>

      <Body>
        {MENU_SECTIONS.map(item => (
          <Section key={item.title}>
            <Typography
              marginBottom="0.75rem"
              variant="b2"
              color={theme.colors.textSecondary}
            >
              {item.title}
            </Typography>

            <MenuOptions>
              {item.pageList.map(pageItem => (
                <MenuItem
                  selected={
                    router.asPath === '/'
                      ? pageItem.default
                      : router.asPath.includes(pageItem.key)
                  }
                  key={pageItem.key}
                  Icon={pageItem.icon}
                  label={pageItem.title}
                  path={pageItem.key}
                />
              ))}
            </MenuOptions>
          </Section>
        ))}
      </Body>
    </Container>
  )
}
