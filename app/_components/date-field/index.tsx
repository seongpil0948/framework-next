'use client'
import { DateValue, useDateField, useDateSegment, useLocale } from 'react-aria'
import {
  CalendarStateOptions,
  DateFieldStateOptions,
  useDateFieldState,
} from 'react-stately'
import { RefObject, forwardRef, useRef, useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover'
import { Button } from '@nextui-org/button'
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

  return (
    <div className=" flex flex-col items-center">
      <span {...labelProps}>{props.label}</span>
      <div
        {...fieldProps}
        ref={ref}
        className="flex-nowrap px-2 py-3 inline-flex border-solid border-2 border-sky-500 "
      >
        {state.segments.map((segment, i) => (
          <DateSegment key={i} segment={segment} state={state} />
        ))}
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

function DateSegment({ segment, state }: any) {
  let ref = useRef(null)
  let { segmentProps } = useDateSegment(segment, state, ref)

  return (
    <div
      {...segmentProps}
      ref={ref}
      className={`segment ${segment.isPlaceholder ? 'placeholder' : ''}`}
    >
      {segment.text}
    </div>
  )
}

export function PopoverCalendar(props: {
  calendarProps: CalendarStateOptions<CalendarDate>
}) {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <Calendar {...props.calendarProps} />
      </PopoverContent>
    </Popover>
  )
}
