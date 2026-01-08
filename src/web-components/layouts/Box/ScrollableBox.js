// @flow

import React, { type Node, useEffect, useRef, useState } from 'react'
import { useFela } from 'react-fela'
import type { Disposable } from 'relay-runtime'

import { scrollableBoxContainer } from './ScrollableBox.style'

type PropTypes = {
  backgroundColor?: string,
  children?: Node,
  dataTestId?: string,
  direction?: 'horizontal' | 'vertical',
  maxHeight?: string,
  maxWidth?: string,
  onScroll?: (event?: Event) => void | Disposable,
}

const ScrollableBox = (props: PropTypes) => {
  const { children, onScroll, dataTestId } = props
  const [hasScrollbar, setHasScrollbar] = useState(false)

  const { css } = useFela({ ...props, hasScrollbar })

  const ref = useRef(null)

  // Logic to either include or exclude paddingRight
  const checkScrollbar = () => {
    if (ref.current) {
      const hasVerticalScrollbar =
        ref.current.scrollHeight > ref.current.clientHeight
      setHasScrollbar(hasVerticalScrollbar)
    }
  }

  useEffect(() => {
    checkScrollbar()

    window.addEventListener('resize', checkScrollbar)
    const observer = new MutationObserver(checkScrollbar)

    if (ref.current) {
      observer.observe(ref.current, { childList: true, subtree: true })
    }

    return () => {
      window.removeEventListener('resize', checkScrollbar)
      observer.disconnect()
    }
  }, [])

  // Pagination on Scroll Feature
  const handleOnScroll = () => {
    if (!ref.current || !onScroll) return

    const { scrollTop, scrollHeight, clientHeight } = ref.current
    const isBottom = scrollTop + clientHeight >= scrollHeight - 10

    if (isBottom) {
      // Load more items when the user scrolls to the bottom
      onScroll()
    }
  }

  return (
    <div
      className={css(scrollableBoxContainer)}
      onScroll={handleOnScroll}
      data-testid={dataTestId}
      ref={ref}
    >
      {children}
    </div>
  )
}

export default ScrollableBox
