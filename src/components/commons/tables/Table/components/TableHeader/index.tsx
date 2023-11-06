/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'

// Components
import { CheckBox } from '@components/buttons/CheckBox'
import { IconButton } from '@components/buttons/IconButton'
import { Typography } from '@components/toolkit/Typography'

// Services
import { IColumn, ISort } from '../../types'

// Assets
import { UpChevronSVG } from '@assets/icons/chevrons/UpChevron'
import { DownChevronSVG } from '@assets/icons/chevrons/DownChevron'

// Styles
import theme from '@globals/theme'
import {
  HeaderButton,
  StickHeaderTH,
  StickyHeaderTable,
  TableContainer
} from './styles'

interface Props {
  columns: IColumn[]
  sort?: ISort
  selectable?: boolean
  rowsLength: number
  selectedRowsLength: number
  setSort: (s: ISort) => void
  onSelectAll: () => void
}

const TableHeader = forwardRef<HTMLDivElement, Props>(
  (
    {
      columns,
      sort,
      setSort,
      selectable,
      rowsLength,
      selectedRowsLength,
      onSelectAll
    },
    ref
  ) => {
    function renderSortIcon(index: number) {
      if (index !== sort?.index) {
        return <DownChevronSVG strokeColor={theme.colors.textSecondary} />
      }

      if (sort.reverse) return <DownChevronSVG />
      return <UpChevronSVG />
    }

    function handleHeaderClick(index: number) {
      if (sort && sort.index === index)
        setSort({ index, reverse: !sort.reverse })
      else setSort({ index, reverse: false })
    }

    // Validations
    const isIndeterminate =
      selectedRowsLength > 0 && rowsLength !== selectedRowsLength

    const isChecked =
      selectedRowsLength > 0 && rowsLength === selectedRowsLength

    return (
      <TableContainer ref={ref}>
        <StickyHeaderTable>
          <thead>
            <tr>
              {selectable && (
                <StickHeaderTH noPaddingRight width="2rem">
                  <CheckBox
                    onChange={onSelectAll}
                    indeterminate={isIndeterminate}
                    checked={isChecked}
                  />
                </StickHeaderTH>
              )}

              {columns.map((column, index) => (
                <StickHeaderTH
                  key={`stickyheaderth_${column.field}`}
                  width={`${column.width}rem`}
                >
                  <HeaderButton onClick={() => handleHeaderClick(index)}>
                    <Typography variant="s2" color="black" weight={600}>
                      {column.title}
                    </Typography>
                    <IconButton
                      color={theme.colors.surface}
                      marginLeft="0.5rem"
                      size="1.5rem"
                      hoverColor={theme.colors.white}
                      icon={renderSortIcon(index)}
                    />
                  </HeaderButton>
                </StickHeaderTH>
              ))}
            </tr>
          </thead>
        </StickyHeaderTable>
      </TableContainer>
    )
  }
)

// TableHeader.displayName = 'TableHeader'

export { TableHeader }
