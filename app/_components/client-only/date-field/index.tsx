'use client'
import {
  DateValue,
  mergeProps,
  useDateField,
  useDateSegment,
  useLocale,
} from 'react-aria'
import {
  CalendarStateOptions,
  DateFieldState,
  DateFieldStateOptions,
  DateSegment,
  useDateFieldState,
} from 'react-stately'
import { RefObject, forwardRef, useMemo, useRef, useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover'
import { Button } from '@nextui-org/button'
import Icon from '@mdi/react'
import { mdiCalendar } from '@mdi/js'

import Calendar from '../calendar'
import {
  today,
  getLocalTimeZone,
  createCalendar,
  CalendarDate,
  parseDate,
} from '@internationalized/date'
import dayjs from 'dayjs'

type DateFieldProps = Omit<
  DateFieldStateOptions<DateValue>,
  'locale' | 'createCalendar'
>

export default function DateField(props: DateFieldProps) {
  let { locale } = useLocale()
  const [date, setDate] = useState(parseDate(dayjs().format('YYYY-MM-DD')))

  let state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  })
  let ref = useRef(null)
  let { labelProps, fieldProps } = useDateField(props, state, ref)

  const segments = useMemo(() => {
    return (
      <>
        {state.segments.map((segment, i) => (
          <DateSegment key={i} segment={segment} state={state} />
        ))}
      </>
    )
  }, [state])

  return (
    <div className=" flex flex-col items-center ">
      <span {...labelProps}>{props.label}</span>
      <div
        {...fieldProps}
        ref={ref}
        className="flex-nowrap px-2 py-3 inline-flex border-solid border-2 align-middle items-center "
      >
        {segments}
        {state.isInvalid && <span aria-hidden="true">🚫</span>}
        <PopoverCalendar
          calendarProps={{
            minValue: today(getLocalTimeZone()),
            defaultValue: today(getLocalTimeZone()),
            locale: locale,
            createCalendar: createCalendar,
            value: date,
            onChange: (newDate) => {
              console.log('newDate', newDate)
              state.setValue(newDate)
              setDate(newDate)
            },
          }}
        />
      </div>
    </div>
  )
}

function DateSegment({
  segment,
  state,
}: {
  segment: DateSegment
  state: DateFieldState
}) {
  let ref = useRef(null)
  let { segmentProps } = useDateSegment(segment, state, ref)

  return (
    <div
      {...segmentProps}
      ref={ref}
      className={`segment ${segment.isPlaceholder ? 'placeholder' : ''}`}
    >
      {/* {segment.text} */}
      {segment.value ?? segment.text}
    </div>
  )
}

export function PopoverCalendar(props: {
  calendarProps: CalendarStateOptions<CalendarDate>
}) {
  const [isOpen, setIsOpen] = useState(false)
  const calendarProps = mergeProps(props.calendarProps, {
    onChange: () => {
      if (isOpen) setIsOpen(false)
    },
  })
  return (
    <Popover isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <PopoverTrigger>
        <Button isIconOnly variant="light" size="sm" radius="none">
          <Icon path={mdiCalendar} size={1} />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Calendar {...calendarProps} />
      </PopoverContent>
    </Popover>
  )
}
