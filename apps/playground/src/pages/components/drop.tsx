import {
  ComboBox,
  Item,
  MenuButton,
  SearchAutocomplete,
  Section,
  Select,
} from "@/ui"

export default function ComponentsPage() {
  return (
    <div className="flex flex-col p-8 max-w-lg space-y-8">
      <section>
        <p>Combobox, ListBox, Popover</p>
        <ComboBox label="Favorite Animal">
          <Item key="red panda">Red Panda</Item>
          <Item key="cat">Cat</Item>
          <Item key="dog">Dog</Item>
          <Item key="aardvark">Aardvark</Item>
          <Item key="kangaroo">Kangaroo</Item>
          <Item key="snake">Snake</Item>
        </ComboBox>
      </section>
      <section>
        <p>Select</p>
        <Select label="Favorite Animal">
          <Item key="red panda">Red Panda</Item>
          <Item key="cat">Cat</Item>
          <Item key="dog">Dog</Item>
          <Item key="aardvark">Aardvark</Item>
          <Item key="kangaroo">Kangaroo</Item>
          <Item key="snake">Snake</Item>
        </Select>
      </section>
      <section>
        <p>Search Autocomplete</p>
        <SearchAutocomplete label="Search" allowsCustomValue>
          <Section title="Companies">
            <Item>Chatterbridge</Item>
            <Item>Tagchat</Item>
            <Item>Yambee</Item>
            <Item>Photobug</Item>
            <Item>Livepath</Item>
          </Section>
          <Section title="People">
            <Item>Theodor Dawber</Item>
            <Item>Dwight Stollenberg</Item>
            <Item>Maddalena Prettjohn</Item>
            <Item>Maureen Fassan</Item>
            <Item>Abbie Binyon</Item>
          </Section>
        </SearchAutocomplete>
      </section>
      <section>
        <p>Menu</p>
        <MenuButton label="Actions" onAction={(key) => alert(key)}>
          <Section>
            <Item key="edit">Edit…</Item>
            <Item key="duplicate">Duplicate</Item>
          </Section>
          <Section>
            <Item key="move">Move…</Item>
            <Item key="rename">Rename…</Item>
          </Section>
          <Section>
            <Item key="archive">Archive</Item>
            <Item key="delete">Delete…</Item>
          </Section>
        </MenuButton>
      </section>
    </div>
  )
}
