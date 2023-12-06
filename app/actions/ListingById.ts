import axios from "axios";

export const getlisting = async (params: any)  => {
  const { listingId } = params;
  const ListingsURL = `https://65338eb8d80bd20280f69405.mockapi.io/api/Rooms/${listingId}`;

  try {
    const response = await axios.get(ListingsURL);
    return response.data;
  } catch (error) {
    console.error('Error fetching listings:', error);
    throw error;
  }
};
