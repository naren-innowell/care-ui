// @flow

import React from 'react'
import { useFela } from 'react-fela'

import Divider from '../Divider/Divider'

import {
  dataTable,
  emptyStateStyles,
  lastColumnStyles,
  tbodyStyles,
  thStyles,
} from './DataTable.style'
import EmptyState from './EmptyState'

type DataTableProps = {
  emptyStateHeadingText: string,
  emptyStateSubHeadingText: string,
  headers: Array<{ key: string, label: string }>,
  rows: Array<React$Node>,
}

const DataTable = (props: DataTableProps): React$Node => {
  const {
    headers,
    rows,
    emptyStateHeadingText,
    emptyStateSubHeadingText,
  } = props

  const { css } = useFela()

  const hasData = !!rows.length

  return (
    <table className={css(dataTable)}>
      <thead>
        <tr>
          {headers.map((header, index) => {
            const isLastColumn = index === headers.length - 1

            return (
              <th
                className={isLastColumn ? css(lastColumnStyles) : css(thStyles)}
                key={header.key}
              >
                {header.label}
                <Divider variant="default" />
              </th>
            )
          })}
        </tr>
      </thead>

      {hasData && <tbody className={css(tbodyStyles)}>{rows}</tbody>}

      {/* Empty State */}
      {!hasData && (
        <tbody className={css(emptyStateStyles)}>
          <tr>
            <td colSpan={headers.length}>
              <EmptyState
                headingText={emptyStateHeadingText}
                subHeadingText={emptyStateSubHeadingText}
              />
            </td>
          </tr>
        </tbody>
      )}
    </table>
  )
}

export default DataTable
