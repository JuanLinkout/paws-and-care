import { defaultAnchors } from '@utils/facepaint'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 30rem;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;

  ${defaultAnchors({ minWidth: ['15rem', '20rem', '20rem', '25rem', '30rem'] })}
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: solid 1px ${({ theme }) => theme.colors.border};
`

export const Content = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  background-color: ${({ theme }) => theme.colors.surface};
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
`

export const Footer = styled.div`
  border-top: solid 1px ${({ theme }) => theme.colors.border};
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.surface};
`
