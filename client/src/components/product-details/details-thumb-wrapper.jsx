// import Image from "next/image";
// import { useState } from "react";
// import PopupVideo from "../common/popup-video";

// const DetailsThumbWrapper = ({
//   imageURLs,
//   handleImageActive,
//   activeImg,
//   imgWidth = 416,
//   imgHeight = 480,
//   videoId = false,
//   status,
// }) => {
//   const [isVideoOpen, setIsVideoOpen] = useState(false);

//   return (
//     <>
//       <div className="tp-product-details-thumb-wrapper">
//         <nav className="nav-wrapper">
//           <div className="nav nav-tabs">
//             {imageURLs?.map((item, i) => (
//               <button
//                 key={i}
//                 className={`nav-link ${item.img === activeImg ? "active" : ""}`}
//                 onClick={() => handleImageActive(item)}
//               >
//                 <Image
//                   src={item.img}
//                   alt={`Thumbnail ${i + 1}`}
//                   width={78}
//                   height={100}
//                   style={{ width: "100%", height: "100%" }}
//                 />
//               </button>
//             ))}
//           </div>
//         </nav>
//         <div className="tab-content m-img">
//           <div className="tab-pane fade show active">
//             <div className="tp-product-details-nav-main-thumb p-relative">
//               <Image
//                 src={activeImg}
//                 alt="Product Image"
//                 width={imgWidth}
//                 height={imgHeight}
//               />
//               <div className="tp-product-badge">
//                 {status === "out-of-stock" && (
//                   <span className="product-hot">Out of Stock</span>
//                 )}
//               </div>
//               {videoId && (
//                 <div
//                   onClick={() => setIsVideoOpen(true)}
//                   className="tp-product-details-thumb-video"
//                 >
//                   <a className="tp-product-details-thumb-video-btn cursor-pointer popup-video">
//                     <i className="fas fa-play"></i>
//                   </a>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {videoId && (
//         <PopupVideo
//           isVideoOpen={isVideoOpen}
//           setIsVideoOpen={setIsVideoOpen}
//           videoId={videoId}
//         />
//       )}

//       <style jsx>{`
//         .tp-product-details-thumb-wrapper {
//           display: flex;
//           flex-direction: row;
//           justify-content: center;
//           align-items: flex-start;
//           gap: 16px;
//           margin: 0px;
//         }

//         .nav-wrapper {
//           flex-shrink: 0;
//         }

//         .nav-tabs {
//           width: 100%;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           gap: 2px;
//         }

//         .tp-product-details-nav-main-thumb {
//           max-width: 100%;
//         }

//         @media (max-width: 576px) {
//           .tp-product-details-thumb-wrapper {
//             flex-direction: column;
//             align-items: center;
//             margin: 0px;
//           }

//           .nav-wrapper {
//             order: 2;
//             margin-top: 16px;
//           }

//           .nav-tabs {
//             flex-direction: row;
//             justify-content: end;
//           }

//           .tp-product-details-nav-main-thumb {
//             width: 100%;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default DetailsThumbWrapper;





import Image from "next/image";
import { useState, useEffect } from "react";
import PopupVideo from "../common/popup-video";

const DetailsThumbWrapper = ({
  imageURLs,
  handleImageActive,
  activeImg,
  imgWidth = 416,
  imgHeight = 480,
  videoId = false,
  status,
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(imageURLs.slice(0, 4));
  const [currentImgHeight, setCurrentImgHeight] = useState(imgHeight);

  // Adjust image height based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setCurrentImgHeight(400);
      } else {
        setCurrentImgHeight(imgHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [imgHeight]);

  // Update visible images based on the startIndex
  useEffect(() => {
    if (imageURLs.length <= 4) {
      setVisibleImages(imageURLs);
      return;
    }
    const newVisibleImages = imageURLs.slice(startIndex, startIndex + 4);
    if (newVisibleImages.length < 4) {
      setVisibleImages([
        ...newVisibleImages,
        ...imageURLs.slice(0, 4 - newVisibleImages.length),
      ]);
    } else {
      setVisibleImages(newVisibleImages);
    }
  }, [startIndex, imageURLs]);

  // Handle up and down arrow clicks
  const handlePrevClick = () => {
    const newIndex = startIndex - 1 < 0 ? imageURLs.length - 1 : startIndex - 1;
    setStartIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (startIndex + 1) % imageURLs.length;
    setStartIndex(newIndex);
  };

  return (
    <>
      <div className="tp-product-details-thumb-wrapper">
        <nav className="nav-wrapper">
          <button className="prev-arrow" onClick={handlePrevClick}>
            &uarr;
          </button>
          <div className="nav nav-tabs">
            {visibleImages.map((item, i) => (
              <button
                key={i}
                className={`nav-link ${item.img === activeImg ? "active" : ""}`}
                onClick={() => handleImageActive(item)}
              >
                <Image
                  src={item.img}
                  alt={`Thumbnail ${i + 1}`}
                  width={78}
                  height={100}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "4px",
                  }}
                />
              </button>
            ))}
          </div>
          <button className="next-arrow" onClick={handleNextClick}>
            &darr;
          </button>
        </nav>

        <div className="tab-content m-img">
          <div className="tab-pane fade show active">
            <div className="tp-product-details-nav-main-thumb p-relative">
              <Image
                src={activeImg}
                alt="Product Image"
                width={imgWidth}
                height={currentImgHeight}
                style={{ borderRadius: "5px" }}
              />
              <div className="tp-product-badge">
                {status === "out-of-stock" && (
                  <span className="product-hot">Out of Stock</span>
                )}
              </div>
              {videoId && (
                <div
                  onClick={() => setIsVideoOpen(true)}
                  className="tp-product-details-thumb-video"
                >
                  <a className="tp-product-details-thumb-video-btn cursor-pointer popup-video">
                    <i className="fas fa-play"></i>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {videoId && (
        <PopupVideo
          isVideoOpen={isVideoOpen}
          setIsVideoOpen={setIsVideoOpen}
          videoId={videoId}
        />
      )}

      <style jsx>{`
        .tp-product-details-thumb-wrapper {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: flex-start;
          gap: 16px;
          margin: 0px;
        }

        .nav-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .nav-tabs {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .prev-arrow,
        .next-arrow {
          cursor: pointer;
        }

        .prev-arrow {
          margin-bottom: 8px;
        }

        .next-arrow {
          margin-top: 8px;
        }

        .tp-product-details-nav-main-thumb {
          max-width: 100%;
        }

        @media (max-width: 576px) {
          .tp-product-details-thumb-wrapper {
            flex-direction: column;
            align-items: center;
          }

          .nav-wrapper {
            order: 2;
            flex-direction: row;
            justify-content: center;
          }

          .nav-tabs {
            flex-direction: row;
            width: 100%;
          }

          .prev-arrow,
          .next-arrow {
            margin-bottom: 0;
            width: 20px;
            height: 20px;
          }

          .prev-arrow {

          }

          .next-arrow {

          }
        }
      `}</style>
    </>
  );
};

export default DetailsThumbWrapper;
