export function useLocalStorage() {
  // Functions
  function saveItem(key: string, value: any) {
    let updatedValue = value

    if (typeof updatedValue !== 'string') {
      updatedValue = JSON.stringify(updatedValue)
    }

    localStorage.setItem(key, updatedValue)
  }

  function getItem(key: string) {
    const item = localStorage.getItem(key)
    let parsedItem

    if (item) {
      try {
        parsedItem = JSON.parse(item)
      } catch (e) {
        parsedItem = item || undefined
      }
    } else parsedItem = undefined

    return parsedItem
  }

  function removeItem(key: string) {
    localStorage.removeItem(key)
  }

  return { saveItem, getItem, removeItem }
}
