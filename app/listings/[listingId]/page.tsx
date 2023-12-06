'use client';
import { getlisting } from '@/app/actions/ListingById'
import EmptyState from '@/app/components/EmptyState';
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import React from 'react'
import ListingClient from './ListingClient';

const ListingPage = () => {
    const params = useParams()
    const listing = useQuery(
        {
            queryKey: ['listing'],
            queryFn: ()=>getlisting(params),
        }
    )
    if (listing.isLoading) {
        return <p>Loading...</p>;
      }
    
      if (listing.status === 'error') {
        return <p>Error: {listing.error.message}</p>;
      }
      if (!listing.data) {
        return <EmptyState showReset /> // or another loading state if needed
      }
    return (
    <ListingClient
     listing={listing.data}
    />
  )
}

export default ListingPage