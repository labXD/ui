import { Input } from "../components"

export function KitchenSinkPage() {
  return (
    <main className="max-w-screen-xl mx-auto p-8 space-y-2">
      <h1 className="text-3xl font-bold">Input</h1>
      <section className="underline underline-offset-4 uppercase text-sm text-gray-500 grid grid-cols-3 gap-y-8 items-end">
        <span>default</span>
        <span>default disabled</span>
        <span>inline</span>
      </section>
      <section className="grid grid-cols-3 gap-y-8 items-end">
        <Input
          label="Label"
          placeholder="Placeholder"
          validationState="valid"
          errorMessage="error text"
        />
        <Input
          label="Label"
          placeholder="Placeholder"
          validationState="valid"
          errorMessage="error text"
          isDisabled
        />
        <Input
          inline
          label="Label"
          placeholder="Placeholder"
          validationState="valid"
          errorMessage="error text"
        />
        <Input
          label="Label"
          placeholder="Placeholder"
          validationState="invalid"
          errorMessage="error text"
        />
        <Input
          label="Label"
          placeholder="Placeholder"
          validationState="invalid"
          errorMessage="error text"
          isDisabled
        />
        <Input
          inline
          label="Label"
          placeholder="Placeholder"
          validationState="invalid"
          errorMessage="error text"
        />
      </section>
    </main>
  )
}
