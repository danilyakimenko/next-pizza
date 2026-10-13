import { Categories, Container, SortPopup } from "@/components/shared"

export const TopBar = () => {
  return (
    <div className="sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10">
      <Container className="flex items-center justify-between">
        <Categories/>
        <SortPopup/>
      </Container>
    </div>
  )
}
