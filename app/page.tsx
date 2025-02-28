import { Container, SortPopup, Title, TopBar } from "@/components/shared";
import { Categories } from "@/components/shared/categories";
// import { Filters } from "@/components/filters";  
// import { ProductList } from "@/components/productList"; 

export default function Home() {
  return (
    <>
      <Container>
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      {}
      <Container className="flex">
        {}
        <div className="w-1/4 p-4">
          <Filters />
        </div>

        {}
        <div className="w-3/4 p-4">
          <ProductList />
        </div>
      </Container>
    </>
  );
}
