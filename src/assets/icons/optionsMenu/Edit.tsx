import * as React from 'react'
import { SVGProps } from 'react'

export const EditSVG = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4.307 14.16 9.86-9.86L11.7 1.833l-9.86 9.86-.007 2.474 2.474-.007ZM10.233 4.087l1.68 1.68"
    />
  </svg>
)
