import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  overflow: hidden;
`

export const Content = styled.div`
  width: 100%;
`

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-height: calc(100vh - 4.563rem);
  height: 100%;
  overflow-y: auto;
`
