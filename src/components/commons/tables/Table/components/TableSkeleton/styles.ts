import styled from 'styled-components'

interface Props {
  width: string
  noPaddingRight?: boolean
}

export const Container = styled.tr``

export const TB = styled.th<Props>`
  width: ${({ width }) => width};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 15px 20px;
  overflow: hidden;
  text-align: left;

  ${({ noPaddingRight }) => (noPaddingRight ? { paddingRight: 0 } : {})};
`
