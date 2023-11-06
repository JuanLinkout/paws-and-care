import theme from '@globals/theme'
import Tippy from '@tippyjs/react'
import styled from 'styled-components'

interface ModalProps {
  borderRadius?: string
}

export const Modal = styled(Tippy)<ModalProps>`
  &.tippy-box[data-theme~='custom'] {
    /* overflow: hidden; */
    margin-top: 0.25rem;
  }

  .tippy-content {
    padding: 0;
  }
`
