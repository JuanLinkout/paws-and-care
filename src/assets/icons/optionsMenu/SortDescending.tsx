import * as React from 'react'
import { SVGProps } from 'react'

export const SortDescendingSVG = (props: SVGProps<SVGSVGElement>) => (
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
      d="m2 10.667 2.667 2.666 2.666-2.666M4.667 2.667v10.666M10 2.667h3.333l-3.333 4h3.333M10 13.333V11a1.667 1.667 0 0 1 3.333 0v2.333M13.333 12H10"
    />
  </svg>
)
