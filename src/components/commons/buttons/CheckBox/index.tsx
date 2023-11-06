// External Libraries
import React from 'react'

// Components
import { TypographyVariants } from '@components/toolkit/Typography/types'
import { Typography } from '@components/toolkit/Typography'

// Assets
import { CheckSVG } from '@assets/icons/buttons/Check'

// Styles
import { Box, Container, TextButton } from './styles'
import theme from '@globals/theme'

interface Props {
  checked?: boolean
  indeterminate?: boolean
  onChange?: (value: boolean) => void
  label?: string
  labelVariant?: TypographyVariants
  labelColor?: string
  size?: string
  borderRadius?: string
  disabled?: boolean
}

export const CheckBox: React.FC<Props> = ({
  indeterminate,
  checked,
  onChange,
  label,
  labelVariant,
  labelColor,
  borderRadius,
  disabled,
  size
}) => {
  // Functions
  // Estilizar o check com os svgs desejados
  const renderCheck = () => {
    if (checked) {
      return <CheckSVG />
    } else if (indeterminate) {
      return null
    } else {
      return null
    }
  }

  const getAriaChecked = () => {
    if (checked) return 'true'
    else if (indeterminate) return 'mixed'
    else return 'false'
  }

  const getAriaLabel = () => {
    if (label) return label
    else return ''
  }

  return (
    <Container>
      <Box
        size={size}
        aria-label={getAriaLabel()}
        aria-checked={getAriaChecked()}
        onClick={() => onChange && onChange(!checked)}
        checked={checked || indeterminate}
        borderRadius={borderRadius}
        disabled={disabled}
      >
        {renderCheck()}
      </Box>

      {label ? (
        <TextButton
          onClick={() => onChange && onChange(!checked)}
          disabled={disabled}
        >
          <Typography
            variant={labelVariant || 'b1'}
            color={labelColor || theme.colors.textSecondary}
            marginLeft="0.5rem"
          >
            {label}
          </Typography>
        </TextButton>
      ) : null}
    </Container>
  )
}
