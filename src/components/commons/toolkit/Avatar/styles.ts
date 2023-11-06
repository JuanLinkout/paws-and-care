import styled from 'styled-components'

export interface ContainerProps {
  size?: string
  backgroundColor?: string
  borderRadius?: string
}

export const Container = styled.div<ContainerProps>`
  min-height: ${({ size }) => size || '2rem'};
  min-width: ${({ size }) => size || '2rem'};
  height: ${({ size }) => size || '2rem'};
  width: ${({ size }) => size || '2rem'};

  border-radius: ${({ borderRadius }) => borderRadius || '40px'};
  display: flex;

  justify-content: center;
  align-items: center;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor || theme.colors.primary};
`
