import * as React from 'react'
import { SVGProps } from 'react'

export const AddSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={17}
    fill="none"
    {...props}
  >
    <path
      stroke={props.stroke || '#fff'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 3.833v9.334M3.333 8.5h9.334"
    />
  </svg>
)
