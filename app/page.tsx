
import { Container, Title, Filters } from "@/components/shared/";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return (
    <>
    <Container className="mt-10">
      <Title size="lg" text="Все пиццы" className="font-black"/>
    </Container>
    <TopBar/>
    <Container>

      <div className="w-[250px]">
        <Filters />
      </div>

    </Container>
    </>
  );
}
