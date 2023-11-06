import * as React from 'react'
import { SVGProps } from 'react'

export const CloseSVG = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 .91 1 13.09M1 .91l12 12.18"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
