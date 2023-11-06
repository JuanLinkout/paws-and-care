import { motion } from 'framer-motion'
import styled from 'styled-components'
import { INPUT_PADDING } from './constants'

interface ContainerProps {
  isFocused?: boolean
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  padding: ${INPUT_PADDING};
  transition: all 0.25s;

  // Props para customizar
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.b2}px;
  border: solid 1px
    ${({ isFocused, theme }) =>
      isFocused ? theme.colors.black : theme.colors.divider};
`

export const PlaceholderContainer = styled(motion.label)`
  position: absolute;
  left: ${INPUT_PADDING};
  right: 0;
  bottom: 0;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 1;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  height: fit-content;
  pointer-events: none;
`

export const TextContainer = styled(motion.div)`
  position: relative;
  left: 0;
`

export const StyledInput = styled.input`
  position: relative;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;

  // Alterar caso não fique alinhado com o tamanho da fonte
  top: 0.4rem;
`
