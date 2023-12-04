'use client'
import Container from "@/app/components/Container";
import { listings } from "./actions/Listings";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";
import useIntersectionObserver from "./components/hooks/useIntersectionObserver";
import { Spinner } from "./components/Spinner";
import { useInfiniteQuery } from '@tanstack/react-query'
import React from "react";

const Home = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    status,
  } = useInfiniteQuery({
    queryKey: ['rooms'],
    queryFn: listings,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
    if (lastPage.length === 0) {
        return undefined
    }
    return lastPageParam + 1
  },
  })
  const lastListingRef = useIntersectionObserver<HTMLDivElement
  >(() => {
    if (hasNextPage) {
      void fetchNextPage();
    }
  }, [hasNextPage]);

  if (status === 'pending') {
    return <p>Loading...</p>;
  }

  if (status === 'error') {
    return <p>Error: {error.message}</p>;
  }

  if (!data || data?.pages[0].length === 0) {
    return <EmptyState showReset /> // or another loading state if needed
  }
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
           xl:grid-cols-4 
           2xl:grid-cols-5
           gap-8
         "
       >
      {data.pages.map((group, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {group.map((listing: any, i: any) => (
              <ListingCard
                key={listing.id}
                data={listing}
                ref={(data.pages.length - 1 === pageIndex && group.length - 1 === i) ? lastListingRef : null}
              />
            ))}
          </React.Fragment>
        ))}
    </div>
    {hasNextPage && isFetching ? <Spinner /> : null}
    </Container>
  )
};

export default Home;