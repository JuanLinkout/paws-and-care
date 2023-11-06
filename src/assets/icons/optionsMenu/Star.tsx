import * as React from 'react'
import { SVGProps } from 'react'

export const StarSVG = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.552 2.242a.5.5 0 0 1 .897 0l1.495 3.03a.5.5 0 0 0 .376.273l3.345.488a.5.5 0 0 1 .277.853l-2.42 2.357a.5.5 0 0 0-.144.443l.57 3.329a.5.5 0 0 1-.725.527l-2.99-1.573a.5.5 0 0 0-.466 0l-2.99 1.573a.5.5 0 0 1-.726-.527l.571-3.33a.5.5 0 0 0-.144-.442l-2.42-2.357a.5.5 0 0 1 .277-.853l3.345-.488a.5.5 0 0 0 .376-.274l1.496-3.03Z"
    />
  </svg>
)
