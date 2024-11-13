import { apiSlice } from "../api/apiSlice";
import { BASE_URL } from "../api/config"; // Import the base URL

export const brandApi = apiSlice.injectEndpoints({
  overrideExisting:true,
  endpoints: (builder) => ({
    getActiveBrands: builder.query({
      query: () => `${BASE_URL}/api/brand/active`
    }),
  }),
});

export const {
 useGetActiveBrandsQuery
} = brandApi;
