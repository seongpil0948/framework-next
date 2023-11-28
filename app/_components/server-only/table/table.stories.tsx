import React from 'react'
import { Meta } from '@storybook/react'
import CmTable from '.'
import { Radio, RadioGroup } from '@nextui-org/radio'

export default {
  title: 'Components/Table',
  component: CmTable,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/profile',
        query: {
          user: 'santa',
        },
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: [
        'default',
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
      ],
      control: 'select',
    },
  },
  args: {
    tableData: {
      headerList: [
        {
          key: 'key',
          label: 'KEY',
        },
        {
          key: 'name',
          label: 'NAME',
        },
        {
          key: 'role',
          label: 'ROLE',
        },
        {
          key: 'status',
          label: 'STATUS',
        },
      ],
      data: [
        {
          key: '1',
          name: 'Tony Reichert',
          role: 'CEO',
          status: 'Active',
        },
        {
          key: '2',
          name: 'Zoey Lang',
          role: 'Technical Lead',
          status: 'Paused',
        },
        {
          key: '3',
          name: 'Jane Fisher',
          role: 'Senior Developer',
          status: 'Active',
        },
        {
          key: '4',
          name: 'William Howard',
          role: 'Community Manager',
          status: 'Vacation',
        },
        {
          key: '5',
          name: 'Tony Reichert',
          role: 'CEO',
          status: 'Active',
        },
        {
          key: '6',
          name: 'Zoey Lang',
          role: 'Technical Lead',
          status: 'Paused',
        },
        {
          key: '7',
          name: 'Jane Fisher',
          role: 'Senior Developer',
          status: 'Active',
        },
        {
          key: '8',
          name: 'William Howard',
          role: 'Community Manager',
          status: 'Vacation',
        },
        {
          key: '9',
          name: 'Tony Reichert',
          role: 'CEO',
          status: 'Active',
        },
        {
          key: '10',
          name: 'Zoey Lang',
          role: 'Technical Lead',
          status: 'Paused',
        },
        {
          key: '11',
          name: 'Zoey Lang',
          role: 'Technical Lead',
          status: 'Paused',
        },
      ],
      currentPage: 1,
      limit: 10,
      totalPage: 10,
    },
  },
} satisfies Meta<typeof CmTable>

export const Default = (arg: any) => {
  return <CmTable {...arg} />
}

export const NoData = {
  args: {
    tableData: {
      headerList: [
        {
          key: 'name',
          label: 'NAME',
        },
        {
          key: 'role',
          label: 'ROLE',
        },
        {
          key: 'status',
          label: 'STATUS',
        },
      ],
      data: [],
      currentPage: 1,
      limit: 10,
      totalPage: 10,
    },
  },
}

export const WithSelector = (arg: any) => {
  const [selectionBehavior, setSelectionBehavior] = React.useState('toggle')

  return (
    <>
      <CmTable
        {...arg}
        selectionMode="multiple"
        selectionBehavior={selectionBehavior}
      />

      <RadioGroup
        className="mt-2"
        label="Selection Behavior"
        orientation="horizontal"
        value={selectionBehavior}
        onValueChange={setSelectionBehavior}
      >
        <Radio value="toggle">Toggle</Radio>
        <Radio value="replace">Replace</Radio>
      </RadioGroup>
    </>
  )
}

export const FixedHeader = (arg: any) => {
  return (
    <CmTable
      {...arg}
      classNames={{
        base: 'max-h-[180px] overflow-scroll',
        table: 'min-h-[36px]',
      }}
      isHeaderSticky
    />
  )
}
