// Interfaces
import { IColumn, IRow } from '../types'

// DataGrid
export const sortByColumn = (
  column: IColumn,
  rows: IRow[],
  reverse?: boolean
): IRow[] => {
  let sorted: IRow[]
  let type: string

  rows.some(row => {
    if (typeof row[column.field] !== 'undefined') {
      type = typeof row[column.field]
      return true
    } else return false
  })

  if (type === 'number') {
    sorted = rows.sort(
      (a, b) => (a[column.field] || 0) - (b[column.field] || 0)
    )
  } else {
    sorted = rows.sort(function (a, b) {
      return (`${a[column.field] as string}` || '').localeCompare(
        b[column.field] || '',
        undefined,
        {
          numeric: true,
          sensitivity: 'base'
        }
      )
    })
  }

  if (reverse) {
    return sorted.reverse()
  }

  return sorted
}
