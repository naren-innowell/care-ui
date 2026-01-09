// @flow

import { type ThemeType } from 'web-components/atoms'

type FlexItemStyleProps = {
  alignSelf: 'center' | 'end' | 'start',
  flex: number,
  theme: ThemeType,
}

export const flexItem = (props: FlexItemStyleProps): { [key: string]: any } => {
  const { flex, alignSelf } = props

  return {
    flex,
    alignSelf,
  }
}
