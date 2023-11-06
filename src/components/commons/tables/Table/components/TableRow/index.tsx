// Bibliotecas externas
import React, { memo, useState } from 'react'

// Componentes
import { CheckBox } from '@components/buttons/CheckBox'
import { Typography } from '@components/toolkit/Typography'

// Interfaces
import { IColumn, IRow } from '../../types'

// Estilização
import { Container, TB } from './styles'
import theme from '@globals/theme'

interface Props {
  selectable?: boolean
  isSelected: boolean
  row: IRow
  columns: IColumn[]
  rowIndex: number
  onRowClick?: (value: IRow) => void
  onChange?: (status: boolean, row: IRow) => void
}

const TableRowComponent: React.FC<Props> = ({
  selectable,
  isSelected,
  row,
  columns,
  rowIndex,
  onRowClick,
  onChange
}) => {
  const [selected, setSelected] = useState(isSelected)

  const renderDataCell = (row: IRow, column: IColumn) => {
    if (column.renderItem) {
      return (
        <Typography
          as="span"
          variant="b2"
          weight={400}
          color={theme.colors.black}
        >
          {column.renderItem(row[column.field], row)}
        </Typography>
      )
    } else if (column.renderValue) {
      return (
        <Typography
          as="span"
          variant="b2"
          weight={400}
          color={theme.colors.black}
        >
          {column.renderValue(row[column.field], row)}
        </Typography>
      )
    } else {
      return (
        <Typography
          as="span"
          variant="b2"
          weight={400}
          color={theme.colors.black}
        >
          {row[column.field]}
        </Typography>
      )
    }
  }

  const handleSelectStatus = (status: boolean) => {
    setSelected(status)
    onChange && onChange(status, row)
  }

  function handleClick() {
    if (!onRowClick) return
    onRowClick(row)
  }

  return (
    <Container onClick={onRowClick ? handleClick : undefined}>
      {selectable && (
        <TB width="2rem" noPaddingRight>
          <CheckBox checked={selected} onChange={handleSelectStatus} />
        </TB>
      )}

      {columns.map((column, columnIndex) => (
        <TB
          noPaddingRight
          key={`tableCell_${rowIndex}_${columnIndex}`}
          width={`${column.width}`}
        >
          {renderDataCell(row, column)}
        </TB>
      ))}
    </Container>
  )
}

const areEqual = (prev: Props, next: Props) => {
  if (
    prev.isSelected !== next.isSelected ||
    prev.row !== next.row ||
    prev.columns !== next.columns
  )
    return false

  return true
}

export const TableRow = memo(TableRowComponent, areEqual)
