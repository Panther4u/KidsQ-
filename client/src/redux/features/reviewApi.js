import { apiSlice } from "../api/apiSlice";
import { BASE_URL } from "../api/config"; // Import the base URL

export const reviewApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    addReview: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/api/review/add`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => ["Products",{ type: "Product", id: arg.productId }],
    }),
  }),
});

export const {useAddReviewMutation} = reviewApi;
