
import Container from "@/app/components/Container";
import { getListings } from "./actions/Listings";
import { LoadMore } from "./components/hooks/loadMore";
import { Listings } from "./components/listings/Listings";

const Home = async() => {

  const listings = await getListings(1) 

  return (
      <Container>
        
        <Listings listings={listings} />
        <LoadMore />
      </Container>
  )
}

export default Home;