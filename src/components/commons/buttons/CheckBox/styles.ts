import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

interface BoxProps {
  checked?: boolean
  size?: string
  borderRadius?: string
}

// Estilizar de acordo com o design
export const Box = styled.button<BoxProps>`
  height: ${({ size }) => size || '1.25rem'};
  width: ${({ size }) => size || '1.25rem'};
  min-height: ${({ size }) => size || '1.25rem'};
  min-width: ${({ size }) => size || '1.25rem'};

  border-radius: ${({ borderRadius }) => borderRadius || '5px'};
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid
    ${({ theme, checked }) =>
      checked ? theme.colors.primary : theme.colors.border};
  cursor: pointer;

  padding: 0;
  background-color: ${({ checked, theme }) =>
    checked ? theme.colors.primary : 'transparent'};
  transition: all 0.1s ease-in-out;

  &:disabled {
    cursor: not-allowed;
  }
`

export const TextButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border: none;

  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`
