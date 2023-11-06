import theme from '@globals/theme'
import { motion } from 'framer-motion'
import styled from 'styled-components'

interface ContainerProps {
  enabled: boolean
}

export const Container = styled.button<ContainerProps>`
  width: 3.25rem;
  height: 2rem;
  padding: 3px;
  display: flex;
  justify-content: ${({ enabled }) => (enabled ? 'flex-end' : 'flex-start')};

  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.border};

  align-items: center;
  background-color: ${({ enabled }) =>
    enabled ? theme.colors.primary : theme.colors.border};

  cursor: pointer;

  transition: background-color 0.5s;

  &:disabled {
    cursor: not-allowed;
  }
`

export const Handle = styled(motion.div)`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 22px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.surface};
`
