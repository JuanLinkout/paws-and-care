import theme from '@globals/theme'

export const modalAnimationPresets = {
  initial: { opacity: 0, scale: 0.95, x: -5, y: -5 },
  animate: { opacity: 1, scale: 1, x: 0, y: 0 },
  exit: { opacity: 0, scale: 0.95, x: -5, y: -5 },
  transition: { type: 'tween', duration: 0.15 },
  style: { boxShadow: theme.colors.shadows.shadowMedium }
}

export const modalAnimationWithoutShadow = {
  initial: { opacity: 0, scale: 0.95, x: -5, y: -5 },
  animate: { opacity: 1, scale: 1, x: 0, y: 0 },
  exit: { opacity: 0, scale: 0.95, x: -5, y: -5 },
  transition: { type: 'tween', duration: 0.15 }
}

export const fadeAnimationPreset = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}
