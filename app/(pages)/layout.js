"use client";
import Loader from "@/components/atoms/Loader/Loader";
import React, { Suspense, useState, useEffect } from "react"; // Adjust the path if needed

const Header = React.lazy(() =>
  import("../../components/organisms/Header/Header")
);
const Footer = React.lazy(() =>
  import("../../components/organisms/Footer/Footer")
);

export default function Layout({ children }) {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Set a timeout to delay showing the loader by 2 seconds
    const timer = setTimeout(() => {
      setShowLoader(true);
    }, 2000);

    return () => clearTimeout(timer); // Clean up the timer when the component unmounts
  }, []);

  return (
    <Suspense fallback={showLoader ? <Loader /> : null}>
      <Header />
      {children}
      <Footer />
    </Suspense>
  );
}
