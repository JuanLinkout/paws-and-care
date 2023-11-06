import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 14rem;
  width: 100%;
`

export const Header = styled.div`
  padding: 1rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 100%;
  row-gap: 2rem;
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuOptions = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`
