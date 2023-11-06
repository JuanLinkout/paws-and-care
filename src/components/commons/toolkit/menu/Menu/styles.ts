import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.div)`
  border-radius: 5px;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
`
