// @flow

export const truncateText = (text: string, limit: number = 20): string => {
  if (text.length <= limit) {
    return text
  }
  return `${text.substring(0, limit)}...`
}
