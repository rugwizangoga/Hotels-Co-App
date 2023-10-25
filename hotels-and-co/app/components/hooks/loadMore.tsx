'use client'

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Spinner } from "../Spinner";
import { getListings } from "@/app/actions/Listings";
import { Listings } from "../listings/Listings";

export function LoadMore() {
    const [listings, setListings] = useState<any[]>([]);
    const [page, setPage] = useState(1);
  
    const { ref, inView } = useInView();
  
    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

      const loadMoreListings = async () => {
        // Once the page 8 is reached repeat the process all over again.
        await delay(2000);
        const nextPage = (page % 7) + 1;
        const newProducts = (await getListings(nextPage)) ?? [];
        setListings((prevProducts: any[]) => [...prevProducts, ...newProducts]);
        setPage(nextPage);
      };

      useEffect(() => {
        if (inView) {
          loadMoreListings();
        }
      }, [inView]);

      return (
        <>
          <Listings listings={listings} />
          <div
            className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"
            ref={ref}
          >
            <Spinner />
          </div>
        </>
      );

}