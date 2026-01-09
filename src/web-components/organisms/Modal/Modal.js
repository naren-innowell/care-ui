// @flow

import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useFela } from 'react-fela'

import { Button, Heading } from 'web-components'
import Close from 'web-components/atoms/icons/close.svg'

import {
  modalBody,
  modalContainer,
  modalFooter,
  modalHeader,
  modalOverlay,
  modalStyle,
} from './Modal.style'

type PropsType = {
  children: React$Node,
  closeModal: () => void,
  dataTestId?: string,
  footer?: React$Node,
  heading?: string,
  height?: string,
  isOpen: boolean,
  useCustomOverlay?: boolean,
  width?: string,
}

//  When `useCustomOverlay` is true, we render a custom <div>-based modal instead of the native <dialog> element. This is primarily used to support tours, where the native dialog's behavior interfere with z-index stacking

const Modal = (props: PropsType): React$Node => {
  const {
    children,
    isOpen,
    heading,
    footer,
    closeModal,
    dataTestId,
    useCustomOverlay = false,
  } = props
  const { css } = useFela({ ...props })
  const ref: any = React.useRef(null)

  // Toggle Body Scroll On Modal Open/Close
  const disableBodyScroll = (disable?: boolean) => {
    if (typeof window !== 'undefined' && document.body) {
      document.body.style.overflow = disable ? 'hidden' : ''
    }
  }

  useEffect(() => {
    if (isOpen) {
      disableBodyScroll(true)
      return ref?.current?.showModal()
    }

    disableBodyScroll(false)
    return ref?.current?.close()
  }, [isOpen])

  const handleOnCancel = () => {
    disableBodyScroll(false)
    closeModal()
  }

  if (!isOpen) return null

  const renderModalContent = () => (
    <>
      {/* Modal Header */}
      {heading && (
        <div className={css(modalHeader)}>
          <Heading dataTestId="ModalHeading" level={3} color="positive" bold>
            {heading}
          </Heading>

          <Button
            variant="text"
            onClick={handleOnCancel}
            dataTestId="closeButton"
            icon={Close}
          />
        </div>
      )}

      {/* Modal Body */}
      <div className={css(modalBody)}>{children}</div>

      {/* Modal Footer */}
      {footer && <div className={css(modalFooter)}>{footer}</div>}
    </>
  )

  if (useCustomOverlay) {
    return ReactDOM.createPortal(
      <div className={css(modalOverlay)} aria-modal="true">
        <div className={css(modalContainer)} data-testid={dataTestId}>
          {renderModalContent()}
        </div>
      </div>,
      ((document.body: any): Element),
    )
  }

  return (
    <dialog
      ref={ref}
      className={css(modalStyle)}
      onCancel={handleOnCancel}
      data-testid={dataTestId}
    >
      {renderModalContent()}
    </dialog>
  )
}

export default Modal
