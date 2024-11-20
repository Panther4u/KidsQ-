// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, EffectFade, Navigation, Autoplay } from 'swiper';
// import slider_img_1 from '@assets/img/slider/2/slider-1.png';
// import slider_img_2 from '@assets/img/slider/2/slider-2.png';
// import slider_img_3 from '@assets/img/slider/2/slider-3.png';
// import slider_shape from '@assets/img/slider/2/shape/shape-1.png';
// import thumb_shape_1 from '@assets/img/slider/2/shape/shape-2.png';
// import thumb_shape_2 from '@assets/img/slider/2/shape/shape-3.png';
// import styles from './FashionBanner.module.scss';

// const slider_data = [
//   {
//     id: 1,
//     subtitle: 'New Arrivals 2023',
//     title: 'The Clothing Collection',
//     img: slider_img_1,
//   },
//   {
//     id: 2,
//     subtitle: 'Best Selling 2023',
//     title: 'The Summer Collection',
//     img: slider_img_2,
//   },
//   {
//     id: 3,
//     subtitle: 'Winter Has Arrived',
//     title: 'Amazing New designs',
//     img: slider_img_3,
//   },
// ];

// const slider_setting = {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   effect: 'fade',
//   navigation: {
//     nextEl: ".tp-slider-2-button-next",
//     prevEl: ".tp-slider-2-button-prev",
//   },
//   pagination: {
//     el: ".tp-slider-2-dot",
//     clickable: true,
//   },
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
//   },
// };

// const FashionBanner = () => {
//   return (
//     <section className={styles.tpSliderArea}>
//       <Swiper {...slider_setting} modules={[Pagination, Navigation, EffectFade, Autoplay]} className={styles.tpSliderActive2}>
//         {slider_data.map((item) => (
//           <SwiperSlide key={item.id}>
//             <div className={`${styles.tpSliderItem2} ${styles.tpSliderHeight2} `}>
//               {/* <div className={styles.tpSlider2Shape}>
//                 <Image className={styles.tpSlider2Shape1} src={slider_shape} alt="slider_shape" />
//               </div> */}
//               <div className="row align-items-center mx-1">
//                 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
//                   <div className={styles.tpSliderContent2}>
//                     <span>{item.subtitle}</span>
//                     <h3 className={styles.tpSliderTitle2}>{item.title}</h3>
//                     <div className={styles.tpSliderBtn2}>
//                       <Link href="/shop" className={styles.btn}>Shop Collection</Link>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
//                   <div className={styles.tpSliderThumb2Wrapper}>
//                     <div className={styles.tpSliderThumb2Shape}>
//                       <Image className={styles.tpSliderThumb2Shape1} src={thumb_shape_1} alt="shape" />
//                       <Image className={styles.tpSliderThumb2Shape2} src={thumb_shape_2} alt="shape" />
//                     </div>
//                     <div className={`${styles.tpSliderThumb2} text-end`}>
//                       <span className={styles.tpSliderThumb2Gradient}></span>
//                       <Image src={item.img} alt="slider img" priority />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//        <div className="tp-swiper-dot tp-slider-2-dot"></div>
//       </Swiper>
//     </section>
//   );
// };

// export default FashionBanner;




import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Navigation, Autoplay } from 'swiper';
import slider_video_1 from '@assets/videos/slider-video-4.mp4'; 
import slider_video_2 from '@assets/videos/slider-video-4.mp4';
import slider_video_3 from '@assets/videos/slider-video-4.mp4';

const slider_data = [
  {
    id: 1,
    video: slider_video_1,
  },
  {
    id: 2,
    video: slider_video_2,
  },
  {
    id: 3,
    video: slider_video_3,
  },
];

const slider_setting = {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: 'fade',
  navigation: {
    nextEl: ".tp-slider-2-button-next",
    prevEl: ".tp-slider-2-button-prev",
  },
  pagination: {
    el: ".tp-slider-2-dot",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
};

const FashionBanner = () => {
  return (
    <section style={{ position: 'relative', width: '100%', height: '50vh', overflow: 'hidden', borderRadius: "5px" }} className='my-3'>
      <Swiper {...slider_setting} modules={[Pagination, Navigation, EffectFade, Autoplay]} className="tpSliderActive2">
        {slider_data.map((item) => (
          <SwiperSlide key={item.id}>
            <div style={{ position: 'relative', width: '100%', height: '50vh' , borderRadius: "5px", // Rounded corners for the entire container
                                        overflow: "hidden", // Ensures the image stays inside the rounded container
                                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",}}>
                  <div style={{ position: 'relative', width: '100%', height: '100%', textAlign: 'end' }}>
                    <video
                      src={item.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                      }}
                    />
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="tp-swiper-dot tp-slider-2-dot"></div>
      </Swiper>
    </section>
  );
};

export default FashionBanner;
