import { IMargin } from '@services/types/css'
import { applyMargin } from '@utils/functions/applyCss'
import styled, { css } from 'styled-components'

export interface ContainerProps extends IMargin {
  width?: string
  flex?: number
}

// Estilizar o minHeight e etc...
export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;

  ${props => applyMargin(props)};
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
  ${props =>
    props.flex &&
    css`
      flex: ${props.flex};
    `}
`

export const StyledInput = styled.input`
  width: 100%;
`
