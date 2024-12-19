import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Video from "../assets/videos/a Cinematic Fitness Video...SONY FX6.mp4";
import HeaderImg from "../assets/14.jpg";
import SecImgOne from "../assets/1.jpeg";
import SecImgTwo from "../assets/123.jpg";

const Home = () => {
  return (
    <>
      <Nav />
      {/* Header-Start */}
      <header className="flex max-lg:justify-center">
        <img src={HeaderImg} alt="HeaderImage" className="max-lg:opacity-15" />
        <div className="my-auto ml-[4em] onscrollHeadersContent">
          <h1 className="main-heading text-white">
            Build Your <br />
            Efficiency
          </h1>

          <button className="mt-[1.5em] max-lg:mx-auto flex justify-center items-center btn-submit w-3/4 h-[3em] text-2xl bg-[#D6FD51] text-black rounded-xl hover:bg-[#6c6968] hover:text-white">
            <a target="_blank" href="./contact">
              See transformations
            </a>
          </button>
        </div>
      </header>
      {/* Header-End */}

      {/* Section-one-Start */}
      <h1 className="main-heading mb-8 text-[#D6FD51] mt-[3em] text-center max-lg:mt-[1em] max-lg:mb-1">
        Keep Moving
      </h1>
      <section className="">
        <img
          className="max-lg:hidden sectionImg hover:animate-pulse"
          src={SecImgOne}
          alt="sas"
        />
        <div className="h-3/4 flex flex-col justify-center space-y-5">
          <h1 className="main-heading text-white max-lg:mx-auto">Start Training</h1>
          <p className="max-lg:text-center max-lg:mx-auto">
            Push your limits and conquer every challenge. Strength is built
            through dedication.
          </p>
          <div className="flex justify-center">
            <button className="btn-submit xz w-5/12 h-[2.5em] bg-white text-black rounded-xl transition-all hover:bg-[#6c6968] hover:text-white text-2xl">
              <a target="_blank" href="./contact">
                Contact us
              </a>
            </button>
            <button className="btn-submit w-5/12 h-[2.5em] bg-[#D6FD51] text-black rounded-xl ml-10 hover:bg-[#6c6968] hover:text-white shadow-2xl shadow-white hover:shadow-none text-2xl">
              <a target="_blank" href="./services">
                Packages
              </a>
            </button>
          </div>
        </div>
      </section>
      {/* Section-one-End */}

      {/* SectionTwo-Start */}
      <h1 className="max-lg:hidden main-heading mb-8 text-[#D6FD51] mt-[3em] text-center">
        Fuel The Fire
      </h1>
      <section className="max-lg:hidden">
        <div className="h-3/4 flex flex-col justify-center space-y-5">
          <h1 className="main-heading text-white">Stay Strong</h1>
          <p>
            Push your limits and conquer every challenge. Strength is built
            through dedication.
          </p>
          <div>
            <button className="btn-submit w-5/12 h-[2.5em] bg-white text-black text-2xl rounded-xl transition-all hover:bg-[#6c6968] hover:text-white">
              <a target="_blank" href="./contact">
                Contact us
              </a>
            </button>
            <button className="btn-submit w-5/12 h-[2.5em] bg-[#D6FD51] text-black text-2xl rounded-xl ml-10 hover:bg-[#6c6968] hover:text-white shadow-2xl shadow-white hover:shadow-none">
              <a target="_blank" href="./services">
                Packages
              </a>
            </button>
          </div>
        </div>
        <img
          className="sectionImg hover:animate-pulse bg-contain"
          src={SecImgTwo}
          alt="sas"
        />
      </section>
      {/* SectionTwo-End */}

      <h1 className="main-heading text-[#D6FD51] mt-[3em] text-center max-lg:mt-1 max-lg:mb-1">
        Let's Do It
      </h1>

      {/* Section-three-Start */}
      <div className="flex justify-center items-center">
        <video
          className="w-[60em] h-[38em] mt-[3em] mb-[3em] max-lg:w-full"
          controls
          muted
          width={"100%"}
          height={"100%"}
          autoPlay
          loop
          src={Video}
        ></video>
      </div>
      {/* Section-three-End */}

      {/* Copyright Section */}


      <Footer />
    </>
  );
};

export default Home;