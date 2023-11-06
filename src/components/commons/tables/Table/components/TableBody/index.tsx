/* eslint-disable react/display-name */
// Bibliotecas externas
import React, { forwardRef, useEffect, useState } from 'react'

// Componentes
import { TableRow } from '../TableRow'
import { TableSkeleton } from '../TableSkeleton'
import { Typography } from '@components/toolkit/Typography'
import { CheckBox } from '@components/buttons/CheckBox'

// Services
import { sortByColumn } from '../../utils/sortByColumn'

// Interfaces
import { IColumn, IRow, ISort } from '../../types'

// Estilização
import { BodyTable, EmptyContainer, TableContainer, TH } from './styles'
import theme from '@globals/theme'

interface Props {
  rows: IRow[]
  columns: IColumn[]
  sort?: ISort
  loading?: boolean

  selectable?: boolean
  selectedRows: IRow[]
  onRowClick?: (value: IRow) => void
  handleSelectedRowChange: (status: boolean, row: IRow) => void
}

const TableBody = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    rows,
    columns,
    selectable,
    sort,
    selectedRows,
    loading,
    onRowClick,
    handleSelectedRowChange
  } = props
  const [sortedRows, setSortedRows] = useState(rows)

  // Effects
  useEffect(() => {
    if (sort)
      setSortedRows(sortByColumn(columns[sort.index], [...rows], sort.reverse))
  }, [sort])

  useEffect(() => {
    setSortedRows(rows)
  }, [rows])

  // Functions
  function renderBody() {
    if (loading) {
      const loadingArray = new Array(10).fill(0)
      return loadingArray.map((item, index) => (
        <TableSkeleton
          selectable={selectable}
          columns={columns}
          key={`loading_${index}`}
          rowIndex={index}
        />
      ))
    } else {
      return sortedRows.map((row, rowIndex) => (
        <TableRow
          onRowClick={onRowClick}
          selectable={selectable}
          row={row}
          rowIndex={rowIndex}
          columns={columns}
          isSelected={selectedRows.includes(row)}
          onChange={handleSelectedRowChange}
          key={`tableBody_${rowIndex}_${
            selectedRows.includes(row) ? '1' : '0'
          }`}
        />
      ))
    }
  }

  return (
    <TableContainer overflowX={!!sortedRows.length} ref={ref}>
      <BodyTable>
        <thead>
          <tr>
            {selectable && (
              <TH width="2rem">
                <CheckBox />
              </TH>
            )}

            {columns.map(column => (
              <TH key={`TH_${column.field}`} width={`${column.width}rem`}>
                {column.title}
              </TH>
            ))}
          </tr>
        </thead>

        <tbody>{renderBody()}</tbody>
      </BodyTable>

      {sortedRows.length === 0 && !loading && (
        <EmptyContainer>
          <Typography
            variant="b2"
            marginBottom="4px"
            align="center"
            weight={500}
          >
            Nenhum registro a ser mostrado.
          </Typography>
          <Typography
            variant="b2"
            align="center"
            marginTop="0.1rem"
            color={theme.colors.textSecondary}
          >
            Esta busca não retornou resultados.
          </Typography>
        </EmptyContainer>
      )}
    </TableContainer>
  )
})

// TableBody.displayName = 'TableBody'

export { TableBody }
