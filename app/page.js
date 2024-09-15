import Layout from "./(pages)/layout";
import Carousel from "../components/molecules/Carousel/Carousel";
import Image from "next/image";

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
      <div className="">
        <Image
          width={1000}
          height={1000}
          className="w-[100%] h-[500px] max-sm:h-[200px] max-md:[350px] max-lg:h-[400px]"
          src={"/Pastel Pink and Brown Modern Sale Food Banner.png"}
          alt="pastel chocolate cake"
        />
      </div>
      <div className="mt-14 max-md:mt-10 max-sm:mt-5">
        <h1 className="text-center text-4xl max-sm:text-lg max-md:text-2xl max-lg:text-3xl font-bold">
          Bring A Box Of <span className="text-[#EC268F]">Happiness Today</span>
        </h1>
        <div className="flex justify-center mt-5 max-sm:mt-2">
          <div className="p-5 w-[600px] h-[400px] max-sm:w-[880px] max-sm:h-[480px]">
            <Image
              width={1000}
              height={1000}
              // className="w-[100%] h-[500px]"
              src={"/Pastel-slider1.png"}
              alt="pastel chocolate cake"
            />
          </div>
          <div className="p-5 w-[600px] h-[400px] max-sm:w-[880px] max-sm:h-[480px]">
            <Image
              width={1000}
              height={1000}
              // className="w-[100%] h-[500px]"
              src={
                "/Blue Brown Abstract Illustration Ice Cream Banner Landscape.png"
              }
              alt="pastel chocolate cake"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
