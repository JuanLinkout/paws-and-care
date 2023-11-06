import * as React from 'react'
import { SVGProps } from 'react'

export const SortByReferenceSVG = (props: SVGProps<SVGSVGElement>) => (
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
      d="m2 10.667 2.667 2.666 2.666-2.666M4.667 13.333V2.667M12.667 4A1.333 1.333 0 0 0 10 4v1.333a1.333 1.333 0 0 0 2.667 0V4ZM11.333 13.333v-4H10M10 13.333h2.667"
    />
  </svg>
)
