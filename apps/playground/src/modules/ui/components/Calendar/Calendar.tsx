import { useRef } from "react"
import { useCalendarState } from "react-stately"
import { useCalendar, useLocale } from "react-aria"
import { createCalendar } from "@internationalized/date"
import { CalendarButton } from "../Button"
import { CalendarGrid } from "./CalendarGrid"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

export function Calendar(props) {
  const { locale } = useLocale()
  const state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  })

  const ref = useRef()
  const { calendarProps, prevButtonProps, nextButtonProps, title } =
    useCalendar(props, state)

  return (
    <div {...calendarProps} ref={ref} className="inline-block text-gray-800">
      <div className="flex items-center pb-4">
        <h2 className="flex-1 font-bold text-xl ml-2">{title}</h2>
        <CalendarButton {...prevButtonProps}>
          <ChevronLeftIcon className="h-6 w-6" />
        </CalendarButton>
        <CalendarButton {...nextButtonProps}>
          <ChevronRightIcon className="h-6 w-6" />
        </CalendarButton>
      </div>
      <CalendarGrid state={state} />
    </div>
  )
}
