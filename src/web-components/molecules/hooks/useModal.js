// @flow

import { useState } from 'react'

const useModal = (): any => {
  // prettier-ignore
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => {
    setIsOpen(false)
    if (typeof window !== 'undefined' && document.body) {
      document.body.style.overflow = ''
    }
  }

  return {
    isOpen,
    setIsOpen,
    openModal,
    closeModal,
  }
}

export default useModal
