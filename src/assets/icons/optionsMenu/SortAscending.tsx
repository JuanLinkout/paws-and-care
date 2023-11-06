import * as React from 'react'
import { SVGProps } from 'react'

export const SortAscendingSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m2 10.667 2.667 2.666 2.666-2.666M4.667 13.333V2.667M13.333 5.333H10M10 6.667V4.333a1.667 1.667 0 1 1 3.333 0v2.334M10 9.333h3.333l-3.333 4h3.333"
    />
  </svg>
)
