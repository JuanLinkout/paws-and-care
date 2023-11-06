import theme from '@globals/theme'
import styled from 'styled-components'

interface Props {
  width: string
  noPaddingRight?: boolean
}

export const Container = styled.tr`
  border-bottom: 1px solid ${theme.colors.border};

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkSurface};
    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
  }
`

export const TB = styled.th<Props>`
  width: ${({ width }) => width};
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 15px 20px;
  overflow: hidden;
  text-align: left;

  ${({ noPaddingRight }) => (noPaddingRight ? { paddingRight: 0 } : {})};
`
