// import React from "react";
// import { FadeLoader, BarLoader } from "react-spinners";

// const Loader = ({ loading, spinner = "scale",color="0989FF" }) => {
//   return (
//     <div className="text-center">
//       {spinner === "scale" && (
//         <BarLoader
//           color={`#${color}`}
//           loading={loading}
//           height={8}
//           width={100}
//           margin={2}
//         />
//       )}
//       {spinner === "fade" && <FadeLoader loading={loading} color="#0989FF" />}
//     </div>
//   );
// };

// export default Loader;



import React, { useEffect, useState } from "react";
import { FadeLoader, BarLoader } from "react-spinners";
import Image from "next/image"; // Import Next.js Image component
import logo from '@assets/img/logo/logo.png'; // Correct path for the logo

const Loader = ({ loading, spinner = "scale", color = "0989FF", loadingTime = 3000 }) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Set a timeout to remove the loader after the specified loading time
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, loadingTime);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, [loadingTime]);

  if (!loading || !showLoader) {
    return null; // Do not display loader if not loading or after time has elapsed
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Logo to display while loading */}
      {/* <Image src={logo} alt="logo" priority height={30} width={70} /> */}

      {spinner === "scale" && (
        <BarLoader
          color={`#${color}`}
          loading={loading}
          height={8}
          width={100}
          margin={2}
        />
      )}
      {spinner === "fade" && <FadeLoader loading={loading} color={`#${color}`} />}
    </div>
  );
};

export default Loader;

