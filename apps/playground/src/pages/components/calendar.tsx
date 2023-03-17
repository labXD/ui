import { RangeCalendar, Calendar } from "@/ui"
import { today, getLocalTimeZone } from "@internationalized/date"

export default function App() {
  return (
    <div className="flex flex-col items-center max-w-xl space-y-8">
      <section>
        <h2 className="mt-12 font-bold text-3xl text-gray-700">Calendar</h2>
        <Calendar
          minValue={today(getLocalTimeZone())}
          defaultValue={today(getLocalTimeZone())}
        />
      </section>
      <section>
        <h2 className="mt-12 font-bold text-3xl text-gray-700">
          RangeCalendar
        </h2>
        <RangeCalendar
          minValue={today(getLocalTimeZone())}
          defaultValue={{
            start: today(getLocalTimeZone()),
            end: today(getLocalTimeZone()).add({ weeks: 2 }),
          }}
        />
      </section>
    </div>
  )
}
