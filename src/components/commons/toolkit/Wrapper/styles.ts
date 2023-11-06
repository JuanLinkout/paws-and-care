import styled from 'styled-components'
import { da } from './config'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

interface WrapperProps {
  paddingTop: string[]
  paddingBottom: string[]
  paddingLeft: string[]
  paddingRight: string[]
}

export const StyledWrapper = styled.div<WrapperProps>`
  max-width: 70rem;
  width: 100%;

  ${({ paddingTop, paddingBottom, paddingLeft, paddingRight }) =>
    da({
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      maxWidth: [
        '22rem',
        '24rem',
        '24rem',
        '34rem',
        '45rem',
        '55rem',
        '60rem',
        '70rem'
      ]
    })}
`
