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
export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-center text-2xl">Cake shop online</p>
      </div>
    </Layout>
  );
}
