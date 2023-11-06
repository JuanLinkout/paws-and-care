import { SMaskValidators } from '../../types'

function isValid(text: string): boolean {
  if (text) {
    text = text
      .replaceAll('(', '')
      .replaceAll(')', '')
      .replaceAll(' ', '')
      .replaceAll('-', '')

    switch (text.length) {
      case 10:
        return true
      case 11:
        return true
      case 14:
        return true
      case 15:
        return true
      default:
        return false
    }
  }

  return false
}

export const validators: SMaskValidators = { isValid }
