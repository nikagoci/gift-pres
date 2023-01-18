import React from "react";

const AboutUs = () => {
  return (
    <>
      <section className="py-8 header-height z-20 bg-center relative w-full bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80')]">
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-black/75" />
        <div className="container relative z-30 h-full mx-auto text-white">
            <div className="flex flex-col items-center justify-center h-full gap-y-16">
                <h1 className="text-2xl text-center max-w-[500px] lg:max-w-full xl:text-4xl lg:text-3xl leading-10 capitalize">The gap between the rich and the poor through the power of clothing.</h1>
                <p className="leading-7 max-w-[400px] lg:max-w-[60%] text-lg text-gray-300 xl:text-2xl xl:max-w-[70%]">Our team is made up of compassionate individuals who are committed to making a difference in the world. We understand that something as simple as a piece of clothing can have a huge impact on someone's life, and we're proud to be a part of that change.</p>
            </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
{
  /* <h1 className='mb-5 text-3xl font-bold text-indigo-600'>About Us</h1> */
}
