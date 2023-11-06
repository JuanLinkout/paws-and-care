// External Libraries
import React, { useRef } from 'react'

// Styles
import { Container, Content } from './styles'
import { IconButton } from '@components/buttons/IconButton'
import { SignOutSVG } from '@assets/icons/optionsMenu/SignOut'
import { ActionModal } from '@components/modals/ActionModal'
import { ActionModalMethods } from '@components/modals/ActionModal/types'
import theme from '@globals/theme'

export const Header: React.FC = () => {
  const ref = useRef<ActionModalMethods>(null)

  return (
    <Container>
      <Content>
        {/* <IconButton
          color={theme.colors.border}
          icon={<SignOutSVG />}
          onClick={() => ref.current.open()}
        /> */}
      </Content>
    </Container>
  )
}
