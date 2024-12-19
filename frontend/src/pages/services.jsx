import React from "react";
import ReactDOM from "react-dom";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Bmr from "./bmr";
import HeaderImg from "../assets/14.jpg";
import SecImgOne from "../assets/16.jpg";
import ServicesImgOne from "../assets/6.jpg";
import ServicesImgTwo from "../assets/11.jpg";
import ServicesImgThree from "../assets/12.jpg";
const Services = () => {
  return (
    <>
      <Nav />
      {/* Header-Start */}
      <header className="flex my-5 max-lg:justify-center">
        <img src={HeaderImg} alt="HeaderImage" className="max-lg:opacity-15"/>
        <div className="my-auto ml-[4em] onscrollHeadersContent">
          <h1 className="main-heading  text-white max-lg:text-center">
            Innovative <br />
            services
          </h1>

          <button className="mt-[1.5em] max-lg:mx-auto flex justify-center items-center btn-submit w-3/4 h-[3em] bg-[#D6FD51] text-black rounded-xl   hover:bg-[#6c6968] hover:text-white text-2xl">
            <a target="_blank" href="./contact">
              See transformations
            </a>
          </button>
        </div>
      </header>
      {/* Header-End */}

      {/* Section-one-Start */}
      <h1 className="main-heading mb-8  text-[#D6FD51]  mt-[3em] max-lg:mt-10 text-center ">
        Dynamic Solutions
      </h1>
      <section className="">
        <img
          className="sectionImg hover:animate-pulse bg-contain max-lg:hidden"
          src={SecImgOne}
          alt="Image"
        />
        <div className="h-3/4 flex flex-col justify-center space-y-5 max-lg:items-center">
          <h1 className=" main-heading text-white ">Meet Excellence</h1>
          <p className="max-lg:text-center">
            Push your limits and conquer every challenge. Strength is built
            through dedication .
          </p>

          <button className="btn-submit shadow-2xl shadow-black w-2/3 max-lg:mx-auto h-[3em] bg-[#D6FD51] text-black rounded-xl hover:bg-[#6c6968] hover:text-white text-2xl">
            <a target="_blank" href="./contact">
              Contact us
            </a>
          </button>
        </div>
      </section>
      {/* Section-one-End */}

      {/* Section-Two-Start */}
      <h1 className=" main-heading mb-8  text-[#D6FD51]  mt-[3em] max-lg:mt-10 text-center ">
        Services
      </h1>
      <section className="mb-[5em] flex justify-around items-center">
        <div className="cursor-pointer relative h-[35em] w-[24em]  rounded-3xl border-[0.1em] border-white transition-all hover:border-[#D6FD51] duration-300 delay-75 ease-in">
          <img
            className="absolute w-full h-full rounded-3xl z-[-1]  blur-[0.4em]"
            src={ServicesImgOne}
            alt="servicesImg"
          />
          <h1 className=" mt-[0.5em] main-heading  text-white text-center ">
            <span className="text-[#D6FD51]">$</span>100
          </h1>
          <div className="h-1/2 flex flex-col justify-center items-center space-y-[2em]">
            <p>🔥 Limited access or specific hours</p>
            <p>🔥 Access on it gym equipment only</p>
            <p>🔥 No access to group fitness classes</p>
            <p>🔥 No additional services like sauna </p>
          </div>
          <div className="flex justify-center mt-[2em]">
            <button className="btn-submit w-2/3 text-xl h-[3em] bg-[#ce5213] text-white rounded-xl hover:bg-gray-600 hover:text-[#D6FD51]">
              <a target="_blank" href="./contact">
                Subscribe now
              </a>
            </button>
          </div>
        </div>
        <div className=" cursor-pointer relative h-[35em] w-[24em]  rounded-3xl border-[0.1em] border-white transition-all hover:border-[#D6FD51] duration-300 delay-75 ease-in">
          <img
            className="absolute w-full h-full rounded-3xl z-[-1]  blur-[1em]"
            src={ServicesImgThree}
            alt="servicesImg"
          />
          <h1 className=" mt-[0.5em] main-heading  text-white text-center ">
            <span className="text-[#D6FD51]">$</span>200
          </h1>
          <div className="h-1/2 flex flex-col justify-center items-center space-y-[2em]">
            <p>🔥 Full-day access to the gym</p>
            <p>🔥 Access to group fitness classes </p>
            <p>🔥 Include extra amenities like sauna</p>
            <p>🔥 Limited personal training sessions </p>
          </div>
          <div className="flex justify-center mt-[2em]">
            <button className="btn-submit  w-2/3 text-xl h-[3em] bg-[#ce5213] text-white rounded-xl hover:bg-gray-600 hover:text-[#D6FD51]">
              <a target="_blank" href="./contact">
                Subscribe now
              </a>
            </button>
          </div>
        </div>
        <div className=" cursor-pointer relative h-[35em] w-[24em]  rounded-3xl border-[0.1em] border-white transition-all hover:border-[#D6FD51] duration-300 delay-75 ease-in">
          <img
            className="absolute w-full h-full rounded-3xl z-[-1] blur-[0.4em]"
            src={ServicesImgTwo}
            alt="servicesImg"
          />
          <h1 className=" mt-[0.5em] main-heading  text-white text-center ">
            <span className="text-[#D6FD51]">$</span>300
          </h1>
          <div className="h-1/2 flex flex-col justify-center items-center space-y-[2em]">
            <p>🔥 Full access to all classes </p>
            <p>🔥 All features from the lower-tier </p>
            <p>🔥 Unlimited access to all activities</p>
            <p>🔥Includes personal training sessions</p>
          </div>
          <div className="flex justify-center mt-[2em]">
            <button className="btn-submit w-2/3 text-xl h-[3em] bg-[#ce5213] text-white rounded-xl hover:bg-gray-600 hover:text-[#D6FD51]">
              <a target="_blank" href="./contact">
                Subscribe now
              </a>
            </button>
          </div>
        </div>
      </section>

      {/* Section-Two-End */}
      <Footer />
    </>
  );
};

export default Services;
