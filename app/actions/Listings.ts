'use server'
import axios from "axios";

export const listings = async ({pageParam}:{pageParam:number}) => {
  const limit = 8;
  const ListingsURL = `https://65338eb8d80bd20280f69405.mockapi.io/api/Rooms?page=${pageParam}&limit=${limit}`;

  try {
    const response = await axios.get(ListingsURL);
    return response.data;
  } catch (error) {
    console.error('Error fetching listings:', error);
    throw error;
  }
};
