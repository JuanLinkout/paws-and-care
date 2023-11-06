import * as React from 'react'
import { SVGProps } from 'react'

export const SmallDownChevronSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg width={12} height={12} fill="none" {...props}>
    <path
      stroke="#757575"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.125}
      d="m9 4.5-3 3-3-3"
    />
  </svg>
)
