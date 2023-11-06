// External Libraries
import React, { useEffect, useRef, useState } from 'react'

// Components
import { TableBody } from './components/TableBody'
import { TableHeader } from './components/TableHeader'
import { Container } from './styles'

// Services
import { IColumn, IRow, ISort, ISummary } from './types'

interface Props {
  rows: IRow[]
  columns: IColumn[]
  selectedRows?: IRow[]
  selectable?: boolean
  searchableFields?: string[]
  loading?: boolean
  title?: string
  onSelectionChange?: React.Dispatch<React.SetStateAction<IRow[]>>
  onRowClick?: (value: IRow) => void

  summary?: ISummary[]
}

const Table: React.FC<Props> = ({
  columns: initialColumns,
  rows: initialRows,
  selectable,
  loading,
  selectedRows = [],
  onRowClick,
  onSelectionChange
}) => {
  // Refs
  const tableHeaderRef = useRef<HTMLDivElement>(null)
  const tableBodyRef = useRef<HTMLDivElement>(null)

  // States
  const [columns, setColumns] = useState<IColumn[]>(initialColumns)
  const [rows, setRows] = useState<IRow[]>(initialRows)
  const [sort, setSort] = useState<ISort>()

  // Effects
  useEffect(() => {
    function handleTableBodyScroll(e: any) {
      tableHeaderRef.current?.scrollTo({
        left: (e.target as HTMLDivElement).scrollLeft
      })
    }

    tableBodyRef.current?.addEventListener('scroll', handleTableBodyScroll)
    return () => {
      tableBodyRef.current?.removeEventListener('scroll', handleTableBodyScroll)
    }
  }, [])

  useEffect(() => {
    setRows(initialRows)
  }, [initialRows])

  useEffect(() => {
    setColumns(initialColumns)
  }, [initialColumns])

  // Functions
  const handleSelectionChange = (selected: boolean, row: IRow) => {
    if (!onSelectionChange) return

    if (selected) onSelectionChange(prev => [...prev, row])
    else onSelectionChange(prev => prev.filter(r => r !== row))
  }

  const handleSelectAll = () => {
    if (!onSelectionChange) return

    if (selectedRows.length === rows.length) onSelectionChange([])
    else onSelectionChange(rows)
  }

  return (
    <Container>
      <TableHeader
        selectable={selectable}
        columns={columns}
        ref={tableHeaderRef}
        setSort={setSort}
        sort={sort}
        rowsLength={rows.length}
        selectedRowsLength={selectedRows.length}
        onSelectAll={handleSelectAll}
      />
      <TableBody
        loading={loading}
        selectable={selectable}
        rows={rows}
        columns={columns}
        ref={tableBodyRef}
        sort={sort}
        selectedRows={selectedRows}
        onRowClick={onRowClick}
        handleSelectedRowChange={handleSelectionChange}
      />
    </Container>
  )
}

export { Table }
