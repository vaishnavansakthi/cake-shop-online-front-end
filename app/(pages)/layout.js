import React, { Suspense } from "react";

const Header = React.lazy(() =>
  import("../../components/organisms/Header/Header")
);
const Footer = React.lazy(() =>
  import("../../components/organisms/Footer/Footer")
);

export default function Layout({ children }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      {children}
      <Footer />
    </Suspense>
  );
}
