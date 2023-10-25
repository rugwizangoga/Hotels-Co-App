
import Container from "@/app/components/Container";
import { getListings } from "./actions/Listings";
import { LoadMore } from "./components/hooks/loadMore";

const Home = async() => {

  const data = await getListings(1) 

  return (
      <Container>
        <div 
          className="
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
        >
        <LoadMore />
        </div>
      </Container>
  )
}

export default Home;