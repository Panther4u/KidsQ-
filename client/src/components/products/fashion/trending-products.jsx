// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay } from 'swiper';
// import Image from 'next/image';
// import { ArrowRightLong, TextShapeLine } from '@/svg';
// import { useGetProductTypeQuery } from '@/redux/features/productApi';
// import ProductItem from './product-item';
// import ErrorMsg from '@/components/common/error-msg';
// import trending_banner from '@assets/img/product/trending/banner/trending-banner.jpg';
// import { HomeTwoNewPrdPrdLoader } from '@/components/loader';
// import Link from 'next/link';

// // slider setting
// const slider_setting = {
//   slidesPerView: 2,
//   spaceBetween: 24,
//   pagination: {
//     el: ".tp-trending-slider-dot",
//     clickable: true,
//   },
//   autoplay: {
//     delay: 2000, // Slide delay in milliseconds (3 seconds)
//     disableOnInteraction: false, // Keeps autoplay running even after user interactions
//   },
//   breakpoints: {
//     '1200': {
//       slidesPerView: 3,
//     },
//     '768': {
//       slidesPerView: 3,
//     },
//     '596': {
//       slidesPerView: 2,
//     },
//     '0': {
//       slidesPerView: 2,
//     },
//   }
// }

// const TrendingProducts = () => {
//   const { data: products, isError, isLoading } =
//     useGetProductTypeQuery({ type: 'fashion', query: `new=true` });

//   // decide what to render
//   let content = null;

//   if (isLoading) {
//     content = (
//       <HomeTwoNewPrdPrdLoader loading={isLoading}/>
//     );
//   }
//   if (!isLoading && isError) {
//     content = <ErrorMsg msg="There was an error" />;
//   }
//   if (!isLoading && !isError && products?.data?.length === 0) {
//     content = <ErrorMsg msg="No Products found!" />;
//   }
//   if (!isLoading && !isError && products?.data?.length > 0) {
//     const product_items = products.data.slice(0,5);
//     content = (
//       <Swiper
//         {...slider_setting}
//         modules={[Pagination, Autoplay]} // Include Autoplay module
//         className="tp-trending-slider-active swiper-container"
//       >
//         {product_items.map((item) => (
//           <SwiperSlide key={item._id} className="tp-trending-item">
//             <ProductItem product={item} style_2={true} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     )
//   }

//   return (
//     <>
//       <section className="tp-trending-area pt-140 pb-150">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-xl-6 col-lg-6">
//               <div className="tp-trending-wrapper">
                // <div className="tp-section-title-wrapper-2 mb-50">
                //   <span className="tp-section-title-pre-2">
                //     More to Discover
                //     <TextShapeLine />
                //   </span>
                //   <h3 className="tp-section-title-2">Trending Arrivals</h3>
                // </div>
//                 <div className="tp-trending-slider">
//                   {content}
//                   <div className="tp-trending-slider-dot tp-swiper-dot text-center mt-45"></div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-xl-4 col-lg-5 col-md-8 col-sm-10">
//               <div className="tp-trending-banner p-relative ml-35">
//                 <div className="tp-trending-banner-thumb w-img include-bg" style={{backgroundImage:`url(${trending_banner.src})`}}></div>
//                 <div className="tp-trending-banner-content">
//                   <h3 className="tp-trending-banner-title">
//                     <Link href="/shop">Short Sleeve Tunic <br /> Tops Casual Swing</Link>
//                   </h3>
//                   <div className="tp-trending-banner-btn">
//                     <Link href="/shop" className="tp-btn tp-btn-border tp-btn-border-white tp-btn-border-white-sm">
//                       Explore More
//                       <ArrowRightLong />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default TrendingProducts;

import React, { useState } from 'react';
import { useGetProductTypeQuery } from '@/redux/features/productApi';
import ProductItem from './product-item';
import ErrorMsg from '@/components/common/error-msg';
import { HomeTwoNewPrdPrdLoader } from '@/components/loader';
import { ArrowRightLong, TextShapeLine } from '@/svg';

// Color options array
const colorOptions = [
  "#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", 
  "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", 
  "#FFEB3B", "#FFC107", "#FF5722", "#FF9800", "#795548", "#9E9E9E", "#607D8B"
];

const TrendingProducts = () => {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]); // Default color
  const { data: products, isError, isLoading } =
    useGetProductTypeQuery({ type: 'fashion', query: `new=true` });

  // Decide what to render
  let content = null;

  if (isLoading) {
    content = (
      <HomeTwoNewPrdPrdLoader loading={isLoading}/>
    );
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  }
  if (!isLoading && !isError && products?.data?.length > 0) {
    const productItems = products.data.slice(0, 5);
    content = (
      <div className="product-slider">
        {productItems.map((item) => (
          <ProductItem key={item._id} product={item} style_2={true} />
        ))}
      </div>
    );
  }

  // Inline styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
    margin: 'auto',
    textAlign: 'center' // Center text in the container
  };

  const imageContainerStyle = {
    width: '100%',
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const imgStyle = {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: selectedColor,
    border: 'none' // Ensure no border is applied
  };

  const colorsContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    gap: '10px',
    marginTop: '20px' // Add space between color options and image
  };

  const colorItemStyle = (color) => ({
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'inline-block',
    cursor: 'pointer',
    backgroundColor: color,
    border: selectedColor === color ? '3px solid white' : '2px solid transparent',
    transition: 'border 0.3s ease'
  });

  return (
    <>
      <section className="tp-trending-area pt-140 pb-150">
        <div className="tp-section-title-wrapper-2 mb-50">
          <span className="tp-section-title-pre-2 text-center">
            More to Discover
            <TextShapeLine />
          </span>
          <h3 className="tp-section-title-2">Trending Arrivals</h3>
        </div>
        <div style={containerStyle}>
          <div style={imageContainerStyle}>
            <img src="https://i.imgur.com/frhnBT1.png" alt="Color Picker" style={imgStyle} />
          </div>
          <div style={colorsContainerStyle}>
            {colorOptions.map((color) => (
              <div 
                key={color}
                style={colorItemStyle(color)}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        </div>
      </section>
      <style jsx>{`
        @media (max-width: 576px) {
          .tp-trending-area {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .tp-section-title-wrapper-2 {
            text-align: center;
          }
        }
        @media (max-width: 1440px) {
          .tp-trending-area {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .tp-section-title-wrapper-2 {
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};

export default TrendingProducts;
