import { applyMargin } from '@utils/functions/applyCss'
import styled from 'styled-components'
import { IMargin } from '../Typography/types'

export type ContainerProps = IMargin

export const Container = styled.div<ContainerProps>`
  ${props => applyMargin(props)}
`
