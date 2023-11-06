/* eslint-disable @typescript-eslint/no-empty-interface */
import { applyMargin } from '@utils/functions/applyCss'
import styled from 'styled-components'
import {
  getBackgroundColor,
  getBorderColor
} from '../shared/utils/getInputColors'
import { IMargin } from '@services/types/css'

export interface ContainerProps extends IMargin {
  flex?: number
  width?: string
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  ${props => applyMargin(props)};

  ${({ width }) => (width ? { width } : {})};
  ${({ flex }) => (flex ? { flex } : {})};
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Row = styled.div`
  flex-direction: row;
`

export const SuffixContainer = styled.div`
  align-items: center;
  justify-content: center;
`

export const LoadingContainer = styled.div`
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`

interface RowProps {
  disabled?: boolean
  selected: boolean
  hasError?: boolean
}

export const StyledInput = styled.input<RowProps>`
  display: flex;
  width: 100%;
  height: 2.5rem;
  font-size: 16px;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};

  border-radius: 5px;
  overflow: hidden;
  border: solid 1px ${getBorderColor};
  background-color: ${getBackgroundColor};

  padding: 0px 14px;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  &:disabled {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => theme.colors.textPlaceholder};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${({ theme }) => theme.colors.textPlaceholder};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${({ theme }) => theme.colors.textPlaceholder};
  }
`
