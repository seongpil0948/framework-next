import { Chip, ChipProps } from '@nextui-org/chip'
import React from 'react'

export interface ChipListProps {
  tags: string[]
  chipProps?: ChipProps
  onClose?: (item: string, index: number) => void
}

export const ChipList = ({ tags, chipProps, onClose }: ChipListProps) => {
  return (
    <div className="flex gap-1 mt-1">
      {tags.map((item, index) => (
        <Chip
          key={item + index}
          classNames={{
            base: 'min-w-30 h-5 px-1',
            content: 'px-1 text-xs',
          }}
          color="secondary"
          {...chipProps}
          onClose={onClose ? () => onClose(item, index) : undefined}
        >
          {item}
        </Chip>
      ))}
    </div>
  )
}
