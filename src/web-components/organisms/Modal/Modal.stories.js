import React, { useState } from 'react'

import { Button } from 'web-components'

import ModalComponent from './Modal'

export default {
  title: 'Organisms/Modal',
  component: ModalComponent,
  argTypes: {
    heading: { control: 'text' },
    isOpen: { control: 'boolean' },
    width: { control: 'text' },
  },
  useCustomOverlay: false,
  render: (args) => <InteractiveModal {...args} />,
}

const InteractiveModal = (args) => {
  const [isOpen, setIsOpen] = useState(false)

  // Custom action to toggle modal
  const toggleModal = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  return (
    <>
      <Button variant="primary" onClick={toggleModal}>
        Open Modal
      </Button>
      <ModalComponent {...args} isOpen={isOpen} closeModal={toggleModal} />
    </>
  )
}

export const Modal = {
  args: {
    heading: 'Default Heading',
    children: 'This is the body of the modal.',
  },
}
