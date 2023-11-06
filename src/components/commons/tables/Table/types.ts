export interface IColumn {
  title: string
  field: string
  width?: string
  renderValue?: (value: number | string, row?: IRow) => string
  renderItem?: (value: number | string, row?: IRow) => React.ReactNode
}

export interface IRow {
  [key: string]: never
}

export interface ISort {
  index: number
  reverse: boolean
}

export interface ISummary {
  title: string
  value: string
}
