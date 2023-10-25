'use client'
import EmptyState from "../EmptyState";
import ListingCard from "./ListingCard";

export function Listings({ listings }: any) {
  return (
    <>
      {listings && listings.length > 0 ? (
        listings.map((listing: any) => (
          <ListingCard
            key={listing.id}
            data={listing}
          />
        ))
      ) : (
        <EmptyState showReset />
      )}
    </>
  );
}
