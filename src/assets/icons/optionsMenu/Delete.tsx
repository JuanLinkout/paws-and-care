import * as React from 'react'
import { SVGProps } from 'react'

export const DeleteSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke={props.stroke || '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M11.973 3.887h-8.18v8.906c0 .754.614 1.367 1.367 1.367h5.44c.753 0 1.367-.613 1.367-1.367V3.887h.006ZM2.527 3.887h10.946M10.053 1.827H5.947V3.88h4.106V1.827ZM6.627 6.5v4.927M9.367 6.5v4.927"
    />
  </svg>
)
