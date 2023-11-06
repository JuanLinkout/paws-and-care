// External Libraries
import React from 'react'
import ReactSelect, { OptionProps, SingleValueProps } from 'react-select'

// Components
import { getBackgroundColor } from '@components/inputs/shared/utils/getInputColors'
import { Typography } from '@components/toolkit/Typography'

// Services
import { ISelectOption } from './types'

// Styles
import theme from '@globals/theme'
import { Container } from './styles'

interface Props {
  isDisabled?: boolean
  options: ISelectOption[]
  value: ISelectOption[]
  errorMessage?: string
  label?: string
  placeholder?: string
  isMulti?: boolean
  width?: string
  CustomOption?: React.ComponentType<OptionProps<ISelectOption, boolean>>
  SingleValue?: React.ComponentType<SingleValueProps<ISelectOption>>
  onChange: (value: ISelectOption[]) => void
}

export const Select: React.FC<Props> = ({
  isDisabled,
  options,
  value,
  errorMessage,
  placeholder = 'Selecione uma opção',
  isMulti,
  label,
  CustomOption,
  SingleValue,
  width,
  onChange
}) => {
  function handleChange(value: ISelectOption | ISelectOption[]) {
    if (Array.isArray(value)) return onChange(value)
    onChange([value])
  }

  return (
    <Container width={width}>
      {label ? (
        <Typography
          marginBottom="4px"
          variant="s3"
          color={theme.colors.textSecondary}
        >
          {label}
        </Typography>
      ) : null}

      <ReactSelect
        menuPortalTarget={document.body}
        isMulti={isMulti}
        placeholder={placeholder}
        value={value}
        onChange={handleChange as any}
        options={options}
        isDisabled={isDisabled}
        components={
          CustomOption
            ? { Option: CustomOption, SingleValue: SingleValue }
            : undefined
        }
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            border: `solid 1px ${theme.colors.border}`,
            backgroundColor: getBackgroundColor({
              disabled: state.isDisabled,
              hasError: !!errorMessage
            })
          }),
          option: (base, props) => ({
            ...base,
            backgroundColor: props.isSelected
              ? theme.colors.primary
              : props.isFocused
              ? theme.colors.border
              : theme.colors.white,
            ':hover': {
              backgroundColor: props.isSelected
                ? theme.colors.primary
                : theme.colors.border
            }
          }),
          singleValue: (baseStyles, state) => ({
            ...baseStyles,
            color: state.isDisabled
              ? theme.colors.textSecondary
              : theme.colors.textPrimary
          }),
          menuPortal: (baseStyles, state) => ({
            ...baseStyles,
            zIndex: 1000
          })
        }}
      />
    </Container>
  )
}
