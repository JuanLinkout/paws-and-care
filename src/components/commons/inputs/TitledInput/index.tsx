// External Libraries
import React, {
  InputHTMLAttributes,
  memo,
  useImperativeHandle,
  useRef,
  useState
} from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Services
import { SMaskTypes } from '@utils/maskUtils/types'
import { utilsModule } from '@utils/maskUtils'
import { TitledInputMethods } from './types'

// Styles
import {
  Container,
  ContainerProps,
  LoadingContainer,
  Row,
  StyledInput,
  SuffixContainer,
  TitleContainer
} from './styles'
import { ErrorMessageContainer } from '../shared/styles'
import theme from '@globals/theme'
import { AnimatePresence } from 'framer-motion'

interface Props
  extends ContainerProps,
    Omit<
      InputHTMLAttributes<HTMLInputElement>,
      'width' | 'onChange' | 'onSubmit'
    > {
  title?: string
  mask?: SMaskTypes
  disabled?: boolean
  suffix?: string
  errorMessage?: string
  loading?: boolean
  titleColor?: string
  labelButton?: string
  onChange: (v: string) => void
  onSubmit?: () => void
  onLabelButtonPress?: () => void
}

export const TitledInputComponent = React.forwardRef<TitledInputMethods, Props>(
  (
    {
      onChange,
      mask,
      title,
      disabled,
      marginBottom = '0px',
      marginLeft,
      marginRight,
      marginTop,
      width,
      suffix,
      errorMessage,
      loading,
      titleColor,
      labelButton,
      onLabelButtonPress,
      ...rest
    },
    ref
  ) => {
    console.log(errorMessage)

    const inputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      blur: () => inputRef.current?.blur()
    }))

    // States
    const [selected, setSelected] = useState(false)

    // Functions
    function onFocus() {
      setSelected(true)
    }

    function onBlur() {
      setSelected(false)
    }

    const handleChangeText = (text: string) => {
      let updatedText = text
      if (mask) {
        updatedText = utilsModule[mask].mask(text)
      }
      onChange && onChange(updatedText)
    }

    const getInputMaxLength = () => {
      return rest.maxLength
        ? rest.maxLength
        : mask
        ? utilsModule[mask].maxLength
        : undefined
    }

    // Renders
    function renderSuffix() {
      if (loading) {
        return (
          <LoadingContainer>
            {/* <Loader color={theme.colors.primary} /> */}
            <div />
          </LoadingContainer>
        )
      } else if (suffix) {
        return (
          <SuffixContainer>
            <Typography
              marginRight="12px"
              variant="b2"
              color={theme.colors.textSecondary}
            >
              {suffix}
            </Typography>
          </SuffixContainer>
        )
      }

      return null
    }

    function handleKeyDown(event?: React.KeyboardEvent<HTMLInputElement>) {
      if (event.key === 'Enter') {
        rest.onSubmit && rest.onSubmit()
      }
    }

    return (
      <Container
        width={width}
        {...rest}
        {...{ marginLeft, marginRight, marginTop, marginBottom }}
      >
        <TitleContainer>
          {title ? (
            <Typography
              marginBottom="4px"
              variant="s3"
              color={titleColor || theme.colors.textSecondary}
            >
              {title}
            </Typography>
          ) : null}

          {labelButton && onLabelButtonPress ? (
            <Typography
              marginBottom="4px"
              variant="s3"
              as={'a'}
              href={'/teste'}
              color={theme.colors.primary}
              onClick={onLabelButtonPress}
            >
              {labelButton}
            </Typography>
          ) : null}
        </TitleContainer>

        <Row>
          <StyledInput
            {...rest}
            hasError={!!errorMessage}
            selected={selected}
            disabled={disabled}
            ref={inputRef}
            onKeyDown={handleKeyDown}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={e => handleChangeText(e.target.value)}
            maxLength={getInputMaxLength()}
          />

          {renderSuffix()}
        </Row>

        <AnimatePresence>
          {errorMessage ? (
            <ErrorMessageContainer
              layout
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '1rem' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Typography
                marginTop="0.2rem"
                variant="b3"
                color={theme.colors.error}
              >
                {errorMessage}
              </Typography>
            </ErrorMessageContainer>
          ) : null}
        </AnimatePresence>
      </Container>
    )
  }
)

export const TitledInput = memo(
  TitledInputComponent,
  (prev: Props, next: Props) => {
    if (
      prev.value === next.value &&
      prev.errorMessage === next.errorMessage &&
      prev.marginBottom === next.marginBottom &&
      prev.marginTop === next.marginTop &&
      prev.marginLeft === next.marginLeft &&
      prev.marginRight === next.marginRight &&
      prev.title === next.title &&
      prev.mask === next.mask &&
      prev.loading === next.loading &&
      prev.disabled === next.disabled
    ) {
      return true
    }

    return false
  }
)

TitledInputComponent.displayName = 'TitledInputComponent'
