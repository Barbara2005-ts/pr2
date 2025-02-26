import { Container, SortPopup, Title, TopBar } from "@/components/shared";
import { Categories } from "@/components/shared/categories";


export default function Home() {
  return(
      <>
        <Container>
         <Title text="Все пиццы" size="lg" className="font-extrabold"/>
        </Container>
          <Container>
            <TopBar/> 
          </Container>
      </>
  )
}