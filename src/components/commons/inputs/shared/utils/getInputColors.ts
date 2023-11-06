import theme from '@globals/theme'

export interface GetBackgroudProps {
  disabled?: boolean
  hasError?: boolean
}

export function getBackgroundColor({ disabled, hasError }: GetBackgroudProps) {
  if (hasError) return theme.colors.errorLowOpacity
  else if (disabled) return theme.colors.surface
  return theme.colors.white
}

export function getBorderColor({ hasError }: GetBackgroudProps) {
  if (hasError) return theme.colors.error
  return theme.colors.border
}
