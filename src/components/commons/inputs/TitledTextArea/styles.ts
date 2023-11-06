import { IMargin } from '@services/types/css'
import { applyMargin } from '@utils/functions/applyCss'
import styled, { css } from 'styled-components'
import {
  getBackgroundColor,
  getBorderColor
} from '../shared/utils/getInputColors'

export interface ContainerProps extends IMargin {
  width?: string
  height?: string
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: ${({ width }) => width || '100%'};
  position: relative;
  ${props => applyMargin(props)};
`

export const InputTitle = styled.label`
  font-weight: 500;
  font-size: 0.85rem;
  margin-bottom: 5px;
  color: black;
`

export const Input = styled.textarea`
  display: block;
  width: 100%;
  height: 100%;

  padding: 10px;
  font-size: 16px;

  background-color: transparent;
  resize: none;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};

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

const errorStyle = css`
  border: 1px solid red;

  &:hover {
    border: 1px solid red;
  }

  :focus-within {
    border: 1px solid red;
  }
`

interface InputProps {
  disabled?: boolean
  hasError?: boolean
  height?: string
}

export const InputContainer = styled.div<InputProps>`
  width: 100%;
  height: ${({ height }) => height || '8rem'};
  display: grid;
  transition: 0.2s ease border;
  align-items: center;

  border-radius: 5px;
  border: solid 1px ${getBorderColor};
  background-color: ${getBackgroundColor};

  ${({ hasError }) => hasError && errorStyle}
`

export const ErrorMessage = styled.p`
  position: absolute;
  color: red !important;
  font-size: 0.8rem;
  bottom: -16px;
`

export const InputRow = styled.div`
  width: 100%;
  display: flex;
`
