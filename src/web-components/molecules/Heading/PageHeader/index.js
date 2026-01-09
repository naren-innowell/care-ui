// @flow

import React from 'react'
import { useFela } from 'react-fela'

import { Button, Container, Heading } from 'web-components'
import ChevronLeft from 'web-components/atoms/icons/chevron-left.svg'
import { type ToPropType } from 'web-components/molecules/Button/Button'

import {
  headerStyle,
  scoreCardsHeaderStyle,
  wrapperStyle,
} from './PageHeader.style'

type PropsType = {
  action?: any,
  children: string,
  linkTo: ToPropType,
}

const PageHeader = (props: PropsType): React$Node => {
  const { children, linkTo, action } = props
  const { css } = useFela()

  const backToDashboardText = 'Back to Dashboard'

  return (
    <header className={css(headerStyle)}>
        <Container extend={wrapperStyle}>
          <div className={css(scoreCardsHeaderStyle)}>
            <Heading level={1}>{children}</Heading>

            <Button
              to={linkTo}
              variant="text"
              ariaLabel={backToDashboardText}
              dataTestId="back-to-dashboard"
              leftIcon={ChevronLeft}
            >
              {backToDashboardText}
            </Button>
          </div>

          <div>{action && action}</div>
        </Container>
    </header>
  )
}

export default PageHeader
