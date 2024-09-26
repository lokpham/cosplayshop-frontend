const baseurl = import.meta.env.VITE_BACKEND_BASEURL;

export const fetch_data = {
  getProductPerpage: async (query: string) => {
    const response = await fetch(baseurl + query);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },
};
