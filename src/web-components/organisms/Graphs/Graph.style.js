// @flow

export const paginationButtonStyle = (direction: string) => () => {
  const horizontalPosition = {}

  switch (direction) {
    case 'left':
      horizontalPosition.left = '10px'
      break
    case 'right':
      horizontalPosition.right = '10px'
      break
    default:
      break
  }

  return {
    position: 'absolute',
    zIndex: 10,
    bottom: 44,
    ...horizontalPosition,
  }
}
