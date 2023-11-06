import { IRow } from '../types'

interface Params {
  query: string
  initialRows: IRow[]
  searchableFields: string[]
}

export function filterRows({
  initialRows,
  query,
  searchableFields
}: Params): IRow[] {
  if (!query.trim()) return initialRows

  const filteredRows = initialRows.filter(row => {
    let hit = false
    searchableFields.forEach(field => {
      if (
        (row[field] as string)
          .toLowerCase()
          .includes(query.trim().toLowerCase())
      )
        hit = true
    })
    return hit
  })
  return filteredRows
}
