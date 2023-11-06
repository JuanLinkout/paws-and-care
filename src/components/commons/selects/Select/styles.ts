import styled from 'styled-components'

interface Props {
  width?: string
}

export const Container = styled.div<Props>`
  ${props => (props.width ? { width: props.width } : {})}
`
