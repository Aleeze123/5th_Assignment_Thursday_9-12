import React from "react";
import Header from "@/components/Header";
import Image from "next/image";

function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-col md:flex-row justify-center items-center h-[80%] px-4 md:px-10">
        <div className="flex flex-col justify-start items-start md:max-w-[548px] w-full mb-8 md:mb-0 md:pr-8 flex-grow">
          <h1
            className="text-[32px] md:text-[40px] font-bold leading-tight tracking-[0.05em] text-center md:text-left mt-8 md:mt-0"
            style={{ fontFamily: 'Libre Bodoni', fontWeight: 700 }}
          >
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="w-full text-[16px] md:text-xl text-[#7d765c] leading-relaxed font-medium tracking-[0.025em] text-center md:text-left mt-4"
            style={{ fontFamily: 'Libre Bodoni', fontWeight: 500 }}
          >
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>
          <button className="mt-8 lg:mt-10 text-white md:text-[22px] font-serif bg-[#A29875] w-[200px] md:w-[250px] lg:w-[288px] h-[50px] rounded-lg">
            Explore Now
          </button>
        </div>
        <div className="w-full md:w-[400px] mt-4 md:mt-0 flex justify-center">
          <Image
            src="/figma.svg"
            alt="Figma"
            width={200}
            height={200}
            className="object-contain w-[200px] h-[200px] md:w-[300px] md:h-[300px] mt-4 md:mt-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
