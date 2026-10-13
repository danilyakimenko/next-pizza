import { FilterCheckbox, Title } from "@/components/shared"

export const Filters = () => {
  return (
    <aside>
      <Title className="mb-5 font-bold" size="sm" text="Фильтрация" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>
    </aside>
  )
}
