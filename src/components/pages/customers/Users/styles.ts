import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.surface};
`

export const TitleContainer = styled.div`
  width: 100%;
  padding: 1.5rem;
  border-bottom: solid 1px ${({ theme }) => theme.colors.border};
  display: flex;

  display: flex;
  justify-content: center;
  background-color: white;
`

export const Content = styled.div`
  padding: 1.5rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`
