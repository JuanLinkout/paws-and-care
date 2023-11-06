export function getInitials(value: string) {
  if (!value) return ''

  const splittedValue = value.split(' ')
  if (splittedValue.length === 1) return splittedValue[0][0]
  else return `${splittedValue[0][0]}${splittedValue.at(-1)[0]}`
}
