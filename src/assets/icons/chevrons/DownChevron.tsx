import * as React from 'react'
import { SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
  strokeColor?: string
}

export const DownChevronSVG = (props: Props) => (
  <svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m3.75 5.625 3.75 3.75 3.75-3.75"
      stroke={props.strokeColor || '#000'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
