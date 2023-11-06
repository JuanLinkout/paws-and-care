import * as React from 'react'
import { ICustomSVG } from './types'
import theme from '@globals/theme'

export const CustomersSVG = (props: ICustomSVG) => (
  <svg
    height={20}
    width={20}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <path
      stroke={
        props.selected ? theme.colors.textPrimary : theme.colors.textSecondary
      }
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.366 9.033a2.517 2.517 0 1 0 0-5.033 2.517 2.517 0 0 0 0 5.033ZM2.292 16v-1.433a3.016 3.016 0 0 1 3.016-3.017h4.517a3.016 3.016 0 0 1 3.017 3.017V16M13.65 9.75a1.867 1.867 0 1 0 0-3.733 1.867 1.867 0 0 0 0 3.733ZM14.183 11.617h1.283c1.234 0 2.234 1 2.234 2.233v1.067"
    />
  </svg>
)
