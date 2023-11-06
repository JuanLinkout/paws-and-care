import styled from 'styled-components'
import { TABLE_HEADER_HEIGHT } from '../../constants'

export const TableContainer = styled.div`
  max-width: 100%;
  overflow-x: hidden;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

export const StickyHeaderTable = styled.table`
  width: 100%;
  table-layout: fixed;
  background-color: #fafafa;
  border-collapse: collapse;
`

interface Props {
  width: string
  noPaddingRight?: boolean
}

export const StickHeaderTH = styled.th<Props>`
  height: ${TABLE_HEADER_HEIGHT};
  vertical-align: middle;
  width: ${({ width }) => width};
  padding: 0 20px;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${({ noPaddingRight }) => (noPaddingRight ? { paddingRight: 0 } : {})};
`

export const HeaderButton = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
`
