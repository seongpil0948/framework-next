import {
  AriaCalendarGridProps,
  DateValue,
  useCalendar,
  useCalendarCell,
  useLocale,
} from 'react-aria'
import {
  CalendarState,
  CalendarStateOptions,
  useCalendarState,
} from 'react-stately'
import { CalendarDate, createCalendar } from '@internationalized/date'
import { useCalendarGrid } from 'react-aria'
import { getWeeksInMonth } from '@internationalized/date'
import { RefObject, useRef } from 'react'
import { Button } from '@nextui-org/button'
import { forwardRef, HTMLNextUIProps } from '@nextui-org/system'
import { useDOMRef } from '@nextui-org/react-utils'
import clsx from 'clsx'
import { UseButtonProps, useButton } from '@nextui-org/button/dist/use-button'
import { Spinner } from '@nextui-org/spinner'
import { dataFocusVisibleClasses } from '@nextui-org/theme'

// interface Props {
//   divProps: HTMLNextUIProps<'div'>
//   calendarProps: CalendarStateOptions<CalendarDate>
// }

const Calendar = forwardRef<'div', CalendarStateOptions<CalendarDate>>(
  (props, ref) => {
    const { as, className, children, ...otherProps } = props
    const Component = as || 'div'
    const domRef = useDOMRef(ref)
    let state = useCalendarState({
      ...props,
    })
    let { calendarProps, prevButtonProps, nextButtonProps, title } =
      useCalendar(props, state)

    return (
      <Component
        ref={domRef}
        className={clsx(
          className,
          'block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700',
        )}
        {...calendarProps}
      >
        <div className="header 'inline-block text-gray-800'">
          <h2>{title}</h2>
          <Button {...prevButtonProps}>prev &lt;</Button>
          <Button {...nextButtonProps}>go &gt;</Button>
        </div>
        <CalendarGrid state={state} />
      </Component>
    )
  },
)

Calendar.displayName = 'NextUI.Calendar'

export default Calendar

function CalendarGrid({
  state,
  ...props
}: { state: CalendarState } & AriaCalendarGridProps) {
  let { locale } = useLocale()
  let { gridProps, headerProps, weekDays } = useCalendarGrid(props, state)

  // Get the number of weeks in the month so we can render the proper number of rows.
  let weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale)

  return (
    <table {...gridProps}>
      <thead {...headerProps}>
        <tr>
          {weekDays.map((day, index) => (
            <th key={index}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from(new Array(weeksInMonth).keys()).map((weekIndex) => (
          <tr key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex)
              .map((date, i) =>
                date ? (
                  <CalendarCell key={i} state={state} date={date} />
                ) : (
                  <td key={i} />
                ),
              )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function CalendarCell({
  state,
  date,
}: {
  state: CalendarState
  date: CalendarDate
}) {
  let ref = useRef(null)
  let {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    isUnavailable,
    formattedDate,
  } = useCalendarCell({ date }, state, ref)

  return (
    <td
      {...cellProps}
      className={clsx(
        'py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700',
        cellProps.className,
      )}
    >
      <div
        {...buttonProps}
        ref={ref}
        hidden={isOutsideVisibleRange}
        className={clsx(
          `cell ${isSelected ? 'selected' : ''} ${
            isDisabled ? 'disabled' : ''
          } ${isUnavailable ? 'unavailable' : ''}`,
          [
            'z-0',
            'group',
            'relative',
            'inline-flex',
            'items-center',
            'justify-center',
            'box-border',
            'appearance-none',
            'outline-none',
            'select-none',
            'whitespace-nowrap',
            'min-w-max',
            'font-normal',
            'subpixel-antialiased',
            'overflow-hidden',
            'tap-highlight-transparent',
            // focus ring
            ...dataFocusVisibleClasses,
          ],
          buttonProps.className,
        )}
      >
        {formattedDate}
      </div>
    </td>
  )
}