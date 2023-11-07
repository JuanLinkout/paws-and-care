export function makeError(
  title: string,
  message: string,
  code?: string
): Error {
  return new Error(
    JSON.stringify({
      customError: {
        title,
        message,
        code
      }
    })
  )
}
