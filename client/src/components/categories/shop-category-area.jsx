// import React from "react";
// import ErrorMsg from "../common/error-msg";
// import { useGetShowCategoryQuery } from "@/redux/features/categoryApi";
// import { useRouter } from "next/router";
// import ShopCategoryLoader from "../loader/shop/shop-category-loader";

// const ShopCategoryArea = () => {
//   const { data: categories, isLoading, isError } = useGetShowCategoryQuery();
//   const router = useRouter();
//   // handle category route
//   const handleCategoryRoute = (title) => {
//     router.push(
//       `/shop?category=${title
//         .toLowerCase()
//         .replace("&", "")
//         .split(" ")
//         .join("-")}`
//     );
//   };

//   // decide what to render
//   let content = null;

//   if (isLoading) {
//     content = <ShopCategoryLoader loading={isLoading} />;
//   }
//   if (!isLoading && isError) {
//     content = <ErrorMsg msg="There was an error" />;
//   }
//   if (!isLoading && !isError && categories?.result?.length === 0) {
//     content = <ErrorMsg msg="No Category found!" />;
//   }
//   if (!isLoading && !isError && categories?.result?.length > 0) {
//     const category_items = categories.result;
//     content = category_items.map((item) => (
//       <div key={item._id} className="col-lg-3 col-sm-6">
//         <div
//           className="tp-category-main-box mb-25 p-relative fix"
//           style={{ backgroundColor: "#F3F5F7" }}
//         >
//           <div className="tp-category-main-content">
//             <h3
//               className="tp-category-main-title pb-1"
//               onClick={() => handleCategoryRoute(item.parent)}
//             >
//               <a className="cursor-pointer">{item.parent}</a>
//             </h3>
//             <span className="tp-category-main-item">
//               {item.products.length} Products
//             </span>
//           </div>
//         </div>
//       </div>
//     ));
//   }
//   return (
//     <>
//       <section className="tp-category-area pb-120">
//         <div className="container">
//           <div className="row">{content}</div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ShopCategoryArea;



import React from "react";
import ErrorMsg from "../common/error-msg";
import { useGetShowCategoryQuery } from "@/redux/features/categoryApi";
import { useRouter } from "next/router";
import ShopCategoryLoader from "../loader/shop/shop-category-loader";
import styles from './ShopCategoryArea.module.scss'; // Import SCSS module

const ShopCategoryArea = () => {
  const { data: categories, isLoading, isError } = useGetShowCategoryQuery();
  const router = useRouter();

  // Handle category route
  const handleCategoryRoute = (title) => {
    router.push(
      `/shop?category=${title
        .toLowerCase()
        .replace("&", "")
        .split(" ")
        .join("-")}`
    );
  };

  // Decide what to render
  let content = null;

  if (isLoading) {
    content = <ShopCategoryLoader loading={isLoading} />;
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && categories?.result?.length === 0) {
    content = <ErrorMsg msg="No Category found!" />;
  }
  if (!isLoading && !isError && categories?.result?.length > 0) {
    const categoryItems = categories.result;
    content = (
      <div className={styles.shopCategoryGrid}>
        {categoryItems.map((item) => (
          <div key={item._id} className={styles.shopCategoryItem}>
            <div
              className={styles.shopCategoryImage}
              style={{ backgroundImage: `url(${item.img})` }}
              onClick={() => handleCategoryRoute(item.parent)}
            ></div>
            <div className={styles.shopCategoryContent}>
              <h3 className={styles.shopCategoryTitle}>
                <a
                  className="cursor-pointer"
                  onClick={() => handleCategoryRoute(item.parent)}
                >
                  {item.parent}
                </a>
              </h3>
              <span className={styles.shopCategoryItemCount}>
                {item.products.length} Products
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <section className={styles.shopCategorySection}>
      <div className="container">
        <div className="row">{content}</div>
      </div>
    </section>
  );
};

export default ShopCategoryArea;
