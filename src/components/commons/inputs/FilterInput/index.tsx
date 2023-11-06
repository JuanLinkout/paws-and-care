// External Libraries
import React, { InputHTMLAttributes, useImperativeHandle, useRef } from 'react'

// Services
import { utilsModule } from '@utils/maskUtils'
import { FilterInputMethods } from './types'

// Styles
import { Container, ContainerProps, StyledInput } from './styles'

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'width'>,
    ContainerProps {
  label?: string
  mask?: keyof typeof utilsModule
  onChange: (value: string) => void
  onConfirmClick?: () => void
}

export const FilterInput = React.forwardRef<FilterInputMethods, Props>(
  (
    {
      label,
      mask,
      onConfirmClick,
      onChange,
      flex,
      width,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
      ...rest
    },
    ref
  ) => {
    // Refs
    const inputRef = useRef<HTMLInputElement>(null)
    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      blur: () => inputRef.current?.blur()
    }))

    // Functions
    const getLabel = () => {
      if (label) return label
      else return rest['aria-label'] || rest.name || ''
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && onConfirmClick) onConfirmClick()
    }

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let updatedText = e.target.value
      if (mask) {
        updatedText = utilsModule[mask].mask(updatedText)
      }
      if (onChange) onChange(updatedText)
    }

    return (
      <Container
        width={width}
        flex={flex}
        marginTop={marginTop}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        marginRight={marginRight}
      >
        <StyledInput
          {...rest}
          ref={inputRef}
          onChange={handleTextChange}
          onKeyPress={handleKeyPress}
          aria-label={getLabel()}
        />
      </Container>
    )
  }
)

FilterInput.displayName = 'FilterInput'
