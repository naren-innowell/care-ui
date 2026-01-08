import React from 'react'

import { StorybookContainer } from 'web-components'

import DataTableComponent from './DataTable'

const data = [
  {
    individualName: 'John Doe',
    assessment: 'Cognitive Test',
    start: 'Tuesday 2nd Nov 2024',
    end: 'Thursday 4th Nov 2024',
    repeat: '2 weeks',
  },
  {
    individualName: 'Jane Smith',
    assessment: 'Personality Evaluation',
    start: 'Friday 6th Dec 2024',
    end: 'Saturday 7th Dec 2024',
    repeat: '1 week',
  },
  {
    individualName: 'Alex Johnson',
    assessment: 'Skill Aptitude Test',
    start: 'Monday 13th Jan 2025',
    end: 'Wednesday 15th Jan 2025',
    repeat: '3 weeks',
  },
  {
    individualName: 'Emily Brown',
    assessment: 'Technical Interview',
    start: 'Thursday 22nd Feb 2025',
    end: 'Friday 23rd Feb 2025',
    repeat: '1 week',
  },
  {
    individualName: 'Michael Lee',
    assessment: 'Leadership Assessment',
    start: 'Monday 4th Mar 2025',
    end: 'Wednesday 6th Mar 2025',
    repeat: '4 weeks',
  },
]

export default {
  title: 'Molecules/DataTable',
  component: DataTableComponent,
  argTypes: {},
  render: (args) => {
    const headers = [
      { label: 'Individual', key: 'individualName' },
      { label: 'Assessment', key: 'assessment' },
      { label: 'Start', key: 'start' },
      { label: 'End', key: 'end' },
      { label: 'Repeat', key: 'repeat' },
    ]

    const rows = data.map((item) => (
      <tr>
        <td>{item.individualName}</td>
        <td>{item.assessment}</td>
        <td>{item.start}</td>
        <td>{item.end}</td>
        <td>{item.repeat}</td>
      </tr>
    ))
    return (
      <StorybookContainer
        componentName="DataTable"
        componentDescription="Table component that displays data in a tabular format"
      >
        <DataTableComponent {...args} headers={headers} rows={rows} />
      </StorybookContainer>
    )
  },
}

export const DataTable = {
  args: {},
}
