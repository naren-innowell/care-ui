// @flow

import React from 'react'
import { useFela } from 'react-fela'
import { useTranslation } from 'react-i18next'

import Section from 'react-ui/components/Section'
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

const PageHeader = (props: PropsType) => {
  const { children, linkTo, action } = props
  const { css } = useFela()

  const { t: translation } = useTranslation()

  return (
    <header className={css(headerStyle)}>
      <Section noPadding color="white">
        <Container extend={wrapperStyle}>
          <div className={css(scoreCardsHeaderStyle)}>
            <Heading level={1}>{children}</Heading>

            <Button
              to={linkTo}
              variant="text"
              ariaLabel={translation('back_to_dashboard')}
              dataTestId="back-to-dashboard"
              leftIcon={ChevronLeft}
            >
              {translation('back_to_dashboard')}
            </Button>
          </div>

          <div>{action && action}</div>
        </Container>
      </Section>
    </header>
  )
}

export default PageHeader
