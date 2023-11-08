'use server'
import axios from "axios";

export const getListings = (pagePram: number) => {
  const ListingsURL = new URL ('https://65338eb8d80bd20280f69405.mockapi.io/api/Rooms');
  ListingsURL.searchParams.append('completed', 'false');
  ListingsURL.searchParams.append('page', pagePram.toString());
  ListingsURL.searchParams.append('limit', '3');

  return axios.get(ListingsURL.toString()).then((res)=>res.data);
};

export const getListing = (id:any) => {
  const ListingURL = 'https://65338eb8d80bd20280f69405.mockapi.io/api/Rooms/'+`${id}`;
  return axios.get(ListingURL).then((res)=>res.data);
};
