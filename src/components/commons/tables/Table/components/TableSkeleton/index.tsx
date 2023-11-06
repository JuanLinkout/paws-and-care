// Bibliotecas externas
import React from 'react'

// Interfaces
import { IColumn } from '../../types'

// Estilização
import { Container, TB } from './styles'
import Skeleton from 'react-loading-skeleton'

interface Props {
  selectable?: boolean
  columns: IColumn[]
  rowIndex: number
}

export const TableSkeleton: React.FC<Props> = ({
  selectable,
  columns,
  rowIndex
}) => {
  return (
    <Container>
      {selectable && (
        <TB width="2rem" noPaddingRight>
          <Skeleton />
        </TB>
      )}

      {columns.map((column, columnIndex) => (
        <TB
          noPaddingRight
          key={`skeleton_${rowIndex}_${columnIndex}`}
          width={`${column.width}`}
        >
          <Skeleton />
        </TB>
      ))}
    </Container>
  )
}
