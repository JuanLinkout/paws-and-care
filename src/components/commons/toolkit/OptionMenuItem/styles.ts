import styled from 'styled-components'

export const Container = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  column-gap: 0.5rem;

  align-items: center;

  background-color: ${({ theme }) => theme.colors.white};
  border: none;

  transition: all 0.15s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkSurface};
  }

  border-radius: 5px;
  cursor: pointer;
`
