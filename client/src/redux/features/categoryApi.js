import { apiSlice } from "../api/apiSlice";
import { BASE_URL } from "../api/config"; // Import the base URL

export const categoryApi = apiSlice.injectEndpoints({
  overrideExisting:true,
  endpoints: (builder) => ({
    addCategory: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/api/category/add`,
        method: "POST",
        body: data,
      }),
    }),
    getShowCategory: builder.query({
      query: () => `${BASE_URL}/api/category/show`
    }),
    getProductTypeCategory: builder.query({
      query: (type) => `${BASE_URL}/api/category/show/${type}`
    }),
  }),
});

export const {
 useAddCategoryMutation,
 useGetProductTypeCategoryQuery,
 useGetShowCategoryQuery,
} = categoryApi;
