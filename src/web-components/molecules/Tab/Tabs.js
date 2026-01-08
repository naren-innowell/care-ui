// @flow

import React, { type Node, useEffect, useState } from 'react'
import { uniqueId } from 'lodash'

import FlexContainer from '../../layouts/Flex/FlexContainer'

import Tab from './Tab'

type PropsType = {
  defaultTab: number,
  onChange: (tab: number) => void,
  tabs: Array<{
    content: Node,
    dataTestId?: string,
    disabled?: boolean,
    label: string,
    size?: "lg" | "md",
  }>,
}

const Tabs = ({ tabs, onChange, defaultTab }: PropsType) => {
  const [selectedTab, setSelectedTab] = useState(defaultTab)

  useEffect(
    () => {
      if (defaultTab) {
        setSelectedTab(defaultTab)
      } else {
        setSelectedTab(0)
      }
    },
    [defaultTab],
  )

  const handleTabClick = tab => {
    setSelectedTab(tab)
    onChange(tab)
  }

  return (
    <FlexContainer gap="sm">
      {tabs.map((tab, index) => (
        <Tab
          key={uniqueId('tab-')}
          label={tab.label}
          isActive={index === selectedTab}
          onClick={() => handleTabClick(index)}
          disabled={Boolean(tab.disabled)}
          dataTestId={tab.dataTestId}
          size={tab.size}
        />
      ))}
    </FlexContainer>
  )
}

export default Tabs
