// @flow

import React, { type Element } from 'react'
import { useRef, useState } from 'react'
import { useFela } from 'react-fela'
import { useClickAway } from 'react-use'

import { dropdown, dropdownContent } from './DropDownMenu.style'

type PropsType = {
  children?: React$Node,
  closeDropDown?: boolean,
  dropDownTrigger: Element<any>,
  fullWidth?: boolean,
  id?: string,
  minWidth?: string,
  position?: 'start' | 'end' | 'left' | 'right' | 'reverse',
  setCloseDropDown?: (arg: boolean) => void,
}

const DropDownMenu = (props: PropsType): React$Node => {
  const {
    dropDownTrigger,
    children,
    closeDropDown = true,
    setCloseDropDown,
    id,
  } = props

  const ref = useRef(null)

  const [isOpen, setIsOpen] = useState(false)

  const { css } = useFela({ ...props })

  const toggleDropdownMenu = () => {
    setIsOpen(!isOpen)
  }

  // CLICK OUTSIDE HANDLER
  useClickAway(ref, () => {
    setIsOpen(false)
    if (setCloseDropDown) {
      setCloseDropDown(true)
    }
  })

  const isFilterOrSortMenu = !!setCloseDropDown

  return (
    <div className={css(dropdown)} ref={ref} id={id}>
      {/* For FilterAndSort variance, the apply button also toggles dropdown
      Hence the logic to toggle dropdown is handled in parent component */}
      {/* For Navigation variance, toggle dropdown logic is handled here */}

      {isFilterOrSortMenu
        ? dropDownTrigger
        : React.cloneElement(dropDownTrigger, {
            onClick: toggleDropdownMenu,
            name: 'dropdownTrigger',
          })}

      {(isOpen || !closeDropDown) && (
        <div className={css(dropdownContent)}>{children}</div>
      )}
    </div>
  )
}

export default DropDownMenu
