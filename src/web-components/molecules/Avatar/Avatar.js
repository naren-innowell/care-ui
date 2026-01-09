// @flow

import React from 'react'
import { useFela } from 'react-fela'
import { uniqueId } from 'lodash/fp'

import { avatarGroupStyle, avatarStyle } from './Avatar.style'

type PropsType = {
  avatarInitials: Array<string>,
  color?: string,
  requireSupport?: boolean,
}

const AvatarNew = (props: PropsType): React$Node => {
  const { avatarInitials } = props
  const { css } = useFela({ ...props })

  const isAvatarGroup = avatarInitials.length > 1

  if (!avatarInitials.length) {
    return null
  }

  if (!isAvatarGroup) {
    return (
      <div className={css(avatarStyle)} key={uniqueId('avatar-')}>
        {avatarInitials[0]}
      </div>
    )
  }

  // currently, only Supports maximum 3 avatars in group
  return (
    <div className={css(avatarGroupStyle)}>
      {avatarInitials.map((avatarInitial, index) => {
        if (index > 2) return null

        return (
          <div className={css(avatarStyle)} key={uniqueId('avatar-')}>
            {avatarInitial}
          </div>
        )
      })}
    </div>
  )
}

export default AvatarNew
