import React from "react";

const Hero = () => {
  return (
    <section className="bg-white top-[87px] ">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        {/* <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="font-butler max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Unlock Amazing <span className="text-[#0D90C1]">Discounts</span>{" "}
            with daBarcodes
          </h1>
          <p className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl">
            Unlock access to exclusive promotions and unbeatable savings with
            daBarcodes. Expreinece a new level of shopping convenience and value
          </p>

          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
          >
            Join Now
          </a>
        </div> */}
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="font-butler text-4xl sm:text-[61px] font-extrabold sm:leading-[73.2px] text-left">
            Unlock Amazing <span className="text-[#0D90C1]">Discounts</span>{" "}
            with daBarcodes
          </h1>
          {/* <p className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl">
            Unlock access to exclusive promotions and unbeatable savings with
            daBarcodes. Experience a new level of shopping convenience and
            value.
          </p> */}
          <p className="max-w-2xl mb-6 mt-6 text-black lg:mb-8 text-[20px] font-normal leading-[24px] text-left">
            Unlock access to exclusive promotions and unbeatable savings with
            daBarcodes. Experience a new level of shopping convenience and
            value.
          </p>

          {/* <a
            href="#"
            className="w-[152px] inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg focus:ring-4 focus:ring-gray-100 bg-[#0D90C1]"
          >
            Join Now
          </a> */}
          <a
            href="#"
            className="w-[152px] inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg bg-[#0D90C1] hover:bg-[#0A6A9A] focus:ring-4 focus:ring-[#0A6A9A]"
          >
            Join Now
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          {/* <img src="/home.png" alt="home" className="w-[731px] h-[667px]" /> */}
          <img src="/home.png" alt="home" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
