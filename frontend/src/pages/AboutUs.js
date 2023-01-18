import React from "react";

const AboutUs = () => {
  return (
    <>
      <section className="relative py-8 header-height z-20 bg-left-bottom w-full bg-[url('https://vault.uicore.co/speaker/wp-content/uploads/sites/23/2022/06/Speaker-Hero-Image-BG.webp')]">
        <div className="absolute top-0 left-0 w-full h-full black-gradient" />
        <div className="w-[600px] h-auto z-40 absolute top-1/2 right-20 -translate-y-1/2">

      <img src='https://vault.uicore.co/speaker/wp-content/uploads/sites/23/2022/06/Speaker-Hero-Image.webp' className="w-full h-full" alt='person' />
        </div>
       
        <div className="container relative z-30 h-full mx-auto text-white">
          <div className="flex flex-col justify-center h-full gap-y-16 max-w-[50%]">
            <h1 className="text-3xl text-center text-indigo-300 capitalize">Join us in our mission to provide clothing and essentials to those in need.</h1>
            <p className="text-xl leading-8 text-center capitalize">Our mission is to help people get what they need. We started this company 3 years ago and expanding everyday. Empowering the less fortunate with dignity and style. </p>
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
