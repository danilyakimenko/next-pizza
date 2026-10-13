import { Container, SortPopup, Title } from "@/components/shared"
import { Categories } from "@/components/shared"

export default function Page() {
  return (
    <>
      <Container className="mt-10">
        <Title className="font-extrabold" size="lg" text="Все пиццы" />
        <Categories />
        <SortPopup />
      </Container>
    </>
  )
}
