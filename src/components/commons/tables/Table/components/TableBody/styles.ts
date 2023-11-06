import styled from 'styled-components'
import { TABLE_HEADER_HEIGHT } from '../../constants'

export const Container = styled.div``

interface TableProps {
  overflowX?: boolean
}

export const TableContainer = styled.div<TableProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 100%;
  overflow-y: auto;
  overflow-x: ${({ overflowX }) => (overflowX ? 'auto' : 'hidden')};
`

export const BodyTable = styled.table`
  width: 100%;
  flex: 1;
  margin-top: -${TABLE_HEADER_HEIGHT};
  background-color: white;
  border-collapse: collapse;
  table-layout: fixed;

  tbody {
    tr:last-child {
      border: none;
    }
  }
`

interface Props {
  width: string
  noPaddingRight?: boolean
}

export const TH = styled.th<Props>`
  height: ${TABLE_HEADER_HEIGHT};
  vertical-align: middle;
  width: ${({ width }) => width};
  padding: 0 20px;

  ${({ noPaddingRight }) => (noPaddingRight ? { paddingRight: 0 } : {})};
`

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;

  padding: 2rem;
`
