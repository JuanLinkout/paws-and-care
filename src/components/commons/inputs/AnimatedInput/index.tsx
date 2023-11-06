// External Libraries
import { utilsModule } from '@utils/maskUtils'
import React, { HTMLProps, useImperativeHandle, useRef, useState } from 'react'

// Components
import { Typography } from '../../toolkit/Typography'

// Constants
import {
  placeholderContainerVariants,
  textContainerVariants
} from './constants'

// Styles
import {
  Container,
  PlaceholderContainer,
  StyledInput,
  TextContainer
} from './styles'

interface Props
  extends Omit<HTMLProps<HTMLInputElement>, 'as' | 'fowardAs' | 'onChange'> {
  placeholderColor?: string
  mask?: keyof typeof utilsModule
  onChange: (value: string) => void
  onConfirmPress?: () => void
}

export interface InputRefMethods {
  focus: () => void
}

export const AnimatedInput = React.forwardRef<InputRefMethods, Props>(
  (
    { placeholder, placeholderColor, mask, onChange, onConfirmPress, ...rest },
    ref
  ) => {
    // State
    const [isFocused, setIsFocused] = useState(false)

    // Refs
    const inputRef = useRef<HTMLInputElement>(null)
    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus()
    }))

    // Functions
    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
      let updatedText = e.target.value
      if (mask) {
        updatedText = utilsModule[mask].mask(updatedText)
      }
      if (onChange) onChange(updatedText)
    }

    const handleFocus = () => {
      setIsFocused(true)
    }

    const handleBlur = () => {
      if (inputRef.current?.value) return
      setIsFocused(false)
    }

    const handleContainerClick = () => {
      inputRef.current?.focus()
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        onConfirmPress && onConfirmPress()
      }
    }

    return (
      <Container onClick={handleContainerClick} isFocused={isFocused}>
        <PlaceholderContainer
          htmlFor={rest.name}
          transition={{ type: 'tween', duration: 0.25 }}
          variants={placeholderContainerVariants}
          animate={isFocused ? 'closed' : 'open'}
        >
          <TextContainer
            transition={{ type: 'tween', duration: 0.25 }}
            variants={textContainerVariants}
            animate={isFocused ? 'closed' : 'open'}
          >
            <Typography variant="b2" color={placeholderColor || '#c0c0c0'}>
              {placeholder || ''}
            </Typography>
          </TextContainer>
        </PlaceholderContainer>

        <StyledInput
          {...rest}
          onKeyPress={handleKeyPress}
          aria-label={rest['aria-label'] || rest.name}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={inputRef}
          onChange={handleChangeText}
          maxLength={mask ? utilsModule[mask].maxLength : undefined}
        />
      </Container>
    )
  }
)

AnimatedInput.displayName = 'AnimatedInput'
