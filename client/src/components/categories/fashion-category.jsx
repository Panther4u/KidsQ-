import React from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar, Autoplay } from 'swiper';
// internal
import ErrorMsg from "../common/error-msg";
import { ArrowRightLong } from "@/svg";
import { HomeTwoCateLoader } from "../loader";
import { useGetProductTypeCategoryQuery } from "@/redux/features/categoryApi";

// Install Swiper modules
SwiperCore.use([Scrollbar, Autoplay]);

const FashionCategory = () => {
  const {
    data: categories,
    isLoading,
    isError,
  } = useGetProductTypeCategoryQuery("fashion");
  const router = useRouter();

  // handle category route
  const handleCategoryRoute = (title) => {
    router.push(
      `/shop?category=${title
        .toLowerCase()
        .replace("&", "")
        .split(" ")
        .join("-")}`
    );
  };

  // slider setting
  const slider_setting = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true, // Enables continuous loop mode
    centeredSlides: false,
    autoplay: {
      delay: 2000, // Slide delay in milliseconds (3 seconds)
      disableOnInteraction: false, // Keeps autoplay running even after user interactions
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragClass: "tp-swiper-scrollbar-drag",
      snapOnRelease: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  };

  // decide what to render
  let content = null;

  if (isLoading) {
    content = <HomeTwoCateLoader loading={isLoading} />;
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && categories?.result?.length === 0) {
    content = <ErrorMsg msg="No Category found!" />;
  }
  if (!isLoading && !isError && categories?.result?.length > 0) {
    const category_items = categories.result;
    content = (
      <Swiper {...slider_setting}>
        {category_items.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="tp-banner-item-2 p-relative z-index-1 grey-bg-2 mb-20 fix">
              <div
                className="tp-banner-thumb-2 include-bg transition-3"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <h3 className="tp-banner-title-2">
                <a
                  className="cursor-pointer"
                  onClick={() => handleCategoryRoute(item.parent)}
                >
                  {item.parent}
                </a>
              </h3>
              <div className="tp-banner-btn-2">
                <a
                  onClick={() => handleCategoryRoute(item.parent)}
                  className="cursor-pointer tp-btn tp-btn-border tp-btn-border-sm"
                >
                  Shop Now <ArrowRightLong />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-scrollbar"></div> {/* Scrollbar element */}
      </Swiper>
    );
  }

  return (
    <section className="tp-banner-area mt-20">
      <div className="container-fluid tp-gx-40">
        <div className="row tp-gx-20">{content}</div>
      </div>
    </section>
  );
};

export default FashionCategory;
