'use client';

import { useMemo } from "react";

import Container from "@/app/components/Container";
import { categories } from "@/app/components/navbar/Categories";

import ListingInfo from "@/app/components/listings/ListingInfo";
import ListingHead from "@/app/components/listings/ListingHead";

const ListingClient = (
  listing: any) => {

  const category = useMemo(() => {
     return categories.find((items) => 
      items.label === listing.listing.category);
  }, [listing.listing.category]);

  return ( 
    <Container>
      <div 
        className="
          max-w-screen-lg 
          mx-auto
        "
      >
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.listing.title}
            imageSrc={listing.listing.imageSrc}
            locationValue={listing.listing.locationValue}
            id={listing.listing.id}
          />
          <div 
            className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-10 
              mt-6
            "
          >
            <ListingInfo
              user={listing.listing.userId}
              category={category}
              description={listing.listing.description}
              roomCount={listing.listing.roomCount}
              guestCount={listing.listing.guestCount}
              bathroomCount={listing.listing.bathroomCount}
              locationValue={listing.listing.locationValue}
            />
          </div>
        </div>
      </div>
    </Container>
   );
}
 
export default ListingClient;