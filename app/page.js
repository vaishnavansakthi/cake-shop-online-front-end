import Layout from "./(pages)/layout";

export const metadata = {
  title: "Cake Shop Online",
  description: "Welcome to our delightful cake shop!",
  image: "/cake.jpg",
  url: "https://cake-shop-online.com",
  twitter: {
    handle: "@ssbakes",
    site: "@ssbakes",
    cardType: "summary_large_image",
  },
  openGraph: {
    type: "website",
    url: "https://cake-shop-online.com",
    title: "Cake Shop Online",
    description: "Welcome to our delightful cake shop!",
    images: [
      {
        url: "/cake.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  revisitAfter: "3 days",
  robots: "index, follow",
  canonical: "https://cake-shop-online.com",
  amp: true,
};

const items = [
  { image: "https://via.placeholder.com/1200x400", alt: "Image 1" },
  { image: "https://via.placeholder.com/600x400", alt: "Image 2" },
  { image: "https://via.placeholder.com/600x400", alt: "Image 3" },
  { image: "https://via.placeholder.com/600x400", alt: "Image 4" },
  { image: "https://via.placeholder.com/600x400", alt: "Image 5" },
];
export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-center text-2xl">Cake Shop Online</p>
      </div>
    </Layout>
  );
}
