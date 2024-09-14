export const metadata = {
  title: "About page",
  description: "This is the about page",
  ogImage: "/about.jpg",
  twitter: {
    handle: "@ssbakes",
    site: "@ssbakes",
    cardType: "summary_large_image",
  },
  openGraph: {
    type: "website",
    url: "https://cake-shop-online.com/about",
    title: "About Us",
    description: "This is the about page",
    images: [
      {
        url: "/about.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  revisitAfter: "3 days",
  robots: "index, follow",
  canonical: "https://cake-shop-online.com/about",
  amp: true,
};

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-center text-2xl">About Us</p>
    </div>
  );
};

export default About;
