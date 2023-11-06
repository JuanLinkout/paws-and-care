import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 2.5rem;
  width: 100%;
  align-items: center;
`
