// @flow

import React, { type Node } from 'react'
import { useFela } from 'react-fela'

import { Box, FlexContainer, Heading, IconNew, Tooltip } from 'web-components'
import { InfoIcon } from 'web-components/atoms/icons-new'

import { graphContainerHeader } from './GraphContainer.style'

type GraphContainerProps = {
  children: Node,
  graphInfoText: string,
  heading?: string,
}

const GraphContainer = (props: GraphContainerProps) => {
  const { heading, children, graphInfoText } = props

  const { css } = useFela()

  return (
    <Box
      dataTestId="graph-container"
      minHeight="500px"
      border="subtle"
      borderRadius="sm"
      position="relative"
    >
      <div className={css(graphContainerHeader)}>
        <FlexContainer justifyContent="space-between" alignItems="center">
          <FlexContainer alignItems="center" gap="xs">
            <Heading level={3}>{heading}</Heading>

            <Tooltip text={graphInfoText} variant="info">
              <IconNew as={InfoIcon} size="lg" />
            </Tooltip>
          </FlexContainer>
        </FlexContainer>
      </div>

      <div>{children}</div>
    </Box>
  )
}

export default GraphContainer
