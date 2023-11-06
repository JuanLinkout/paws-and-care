// External Libraries
import React from 'react'
import NextLink, { LinkProps } from 'next/link'

type Props = LinkProps

const Link: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  ...rest
}) => {
  return (
    <NextLink {...rest} style={{ textDecoration: 'none' }}>
      {children}
    </NextLink>
  )
}

export default Link
