import { DateField, TimeField } from "@/ui"
import { now, getLocalTimeZone } from "@internationalized/date"

export default function App() {
  return (
    <div className="ml-12 max-w-lg space-y-8">
      <DateField label="Appointment date" />
      <DateField
        label="Appointment date and time"
        placeholderValue={now(getLocalTimeZone())}
        className="mt-4"
      />
      <h2 className="mb-2 mt-12 font-bold text-xl text-left">TimeField</h2>
      <TimeField label="Appointment time" />
    </div>
  )
}
