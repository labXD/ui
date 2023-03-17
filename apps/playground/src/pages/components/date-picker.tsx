import { DatePicker, DateRangePicker } from "@/components"
import { today, getLocalTimeZone } from "@internationalized/date"

export default function DatePickerPage() {
  return (
    <div className="ml-12 max-w-lg space-y-8">
      <section>
        <h2 className="mt-12 mb-2 font-bold text-xl text-left">Date Picker</h2>
        <DatePicker
          label="Appointment date"
          minValue={today(getLocalTimeZone())}
        />
      </section>
      <section>
        <h2 className="mt-12 mb-2 font-bold text-xl text-left">
          DateRangePicker
        </h2>
        <DateRangePicker
          label="Trip dates"
          minValue={today(getLocalTimeZone())}
        />
      </section>
    </div>
  )
}
