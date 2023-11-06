// External Libraries
import React from 'react'

// Styles
import {
  Container,
  ContainerProps,
  ErrorMessage,
  Input,
  InputContainer,
  InputRow
} from './styles'
import { Typography } from '@components/toolkit/Typography'
import theme from '@globals/theme'

interface Props extends ContainerProps {
  title?: string
  placeholder?: string
  value?: string
  height?: string
  errorMessage?: string
  minLength?: number
  maxLength?: number
  disabled?: boolean
  onChange?: (value: string) => void
}

export const TitledTextArea: React.FC<Props> = ({
  title,
  value,
  placeholder,
  height,
  errorMessage,
  minLength,
  maxLength,
  disabled,
  onChange,
  ...rest
}) => {
  // Functions
  function handleValueChanged(e: React.ChangeEvent<HTMLTextAreaElement>) {
    onChange(e.target.value)
  }

  return (
    <Container {...rest}>
      {title ? (
        <Typography
          marginBottom="4px"
          variant="s3"
          color={theme.colors.textSecondary}
        >
          {title}
        </Typography>
      ) : null}

      <InputRow>
        <InputContainer
          disabled={disabled}
          hasError={!!errorMessage}
          height={height}
        >
          <Input
            disabled={disabled}
            value={value}
            onChange={handleValueChanged}
            placeholder={placeholder}
            minLength={minLength}
            maxLength={maxLength}
          />
        </InputContainer>
      </InputRow>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  )
}
