import * as React from 'react'
import { SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
  strokeColor?: string
}

export const UpChevronSVG = (props: Props) => (
  <svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.25 9.375 7.5 5.625l-3.75 3.75"
      stroke={props.strokeColor || '#000'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
