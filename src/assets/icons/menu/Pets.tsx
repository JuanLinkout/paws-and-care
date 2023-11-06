import * as React from 'react'
import { ICustomSVG } from './types'
import theme from '@globals/theme'

export const PetsSVG = (props: ICustomSVG) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke={
        props.selected ? theme.colors.textPrimary : theme.colors.textSecondary
      }
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 4.167c.558 0 1.125.075 1.667.216 1.483-1.666 4.191-2.366 5.35-1.883 1.166.483-.35 5.833-.35 5.833.475.892.833 1.867.833 2.867 0 3.717-3.358 6.3-7.5 6.3-4.142 0-7.5-2.5-7.5-6.3 0-1.042.417-2 .833-2.867 0 0-1.575-5.35-.416-5.833 1.158-.483 3.933.192 5.416 1.858A7.533 7.533 0 0 1 10 4.167ZM6.667 11.667v.416M13.333 11.667v.416"
    />
    <path
      stroke={
        props.selected ? theme.colors.textPrimary : theme.colors.textSecondary
      }
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.375 13.542h1.25l-.625.625-.625-.625Z"
    />
  </svg>
)
