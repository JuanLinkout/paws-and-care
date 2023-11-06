// Bibliotecas Externas
import styled from 'styled-components'

// Interfaces
import { TypographyStyles } from './fonts'
import { IMargin, TypographyVariants } from './types'
import { applyMargin } from '@utils/functions/applyCss'

export interface StyledTextProps extends IMargin {
  variant?: TypographyVariants

  color?: string
  size?: string

  weight?: number

  align?: 'left' | 'center' | 'right'
}

export const StyledText = styled.div<StyledTextProps>`
  ${props => props.variant && TypographyStyles[props.variant]}

  text-decoration: none;

  ${({ weight }) => (weight ? { fontWeight: weight } : {})};
  ${({ color }) => (color ? { color } : {})};
  ${({ align }) => (align ? { textAlign: align } : {})};
  ${({ size }) => (size ? { fontSize: size } : {})};

  ${props => applyMargin(props)};
  ${props => (props.onClick ? { cursor: 'pointer' } : {})};

  transition: color 0.3s ease;
`
