import styled from 'styled-components'

interface Props {
  selected?: boolean
}

export const Container = styled.div<Props>`
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  column-gap: 0.5rem;
  align-items: center;

  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.darkSurface : theme.colors.white};

  transition: all 0.15s ease-in-out;
  :hover {
    background-color: ${({ theme }) => theme.colors.darkSurface};
  }

  border-radius: 5px;
  cursor: pointer;
`

export const IconContainer = styled.div`
  width: 1.25rem;
  height: 1.25rem;
`
